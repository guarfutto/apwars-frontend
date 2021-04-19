import BigNumber from 'bignumber.js'
import erc20 from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import unitFarmManager from 'config/abi/unitFarmManager.json'
import burnManager from 'config/abi/burnManager.json'
import multicall from 'utils/multicall'
import farmsConfig from 'config/constants/farms'
import contracts from 'config/constants/contracts'
import { QuoteToken } from '../../config/constants/types'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

const fetchFarms = async (account: string) => {
  const data = await Promise.all(
    farmsConfig.map(async (farmConfig) => {
      const lpAdress = farmConfig.lpAddresses[CHAIN_ID]
      const calls = [
        // Balance of token in the LP contract
        {
          address: farmConfig.tokenAddresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of quote token on LP contract
        {
          address: farmConfig.quoteTokenAdresses[CHAIN_ID],
          name: 'balanceOf',
          params: [lpAdress],
        },
        // Balance of LP tokens in the master chef contract
        {
          address: farmConfig.isTokenOnly ? farmConfig.tokenAddresses[CHAIN_ID] : lpAdress,
          name: 'balanceOf',
          params: [farmConfig.farmManager],
        },
        // Total supply of LP tokens
        {
          address: lpAdress,
          name: 'totalSupply',
        },
        // Token decimals
        {
          address: farmConfig.tokenAddresses[CHAIN_ID],
          name: 'decimals',
        },
        // Quote token decimals
        {
          address: farmConfig.quoteTokenAdresses[CHAIN_ID],
          name: 'decimals',
        },
      ]

      const [
        tokenBalanceLP,
        quoteTokenBlanceLP,
        lpTokenBalanceFarmManager,
        lpTotalSupply,
        tokenDecimals,
        quoteTokenDecimals,
      ] = await multicall(erc20, calls)

      let tokenAmount
      let lpTotalInQuoteToken
      let tokenPriceVsQuote
      if (farmConfig.isTokenOnly) {
        tokenAmount = new BigNumber(lpTokenBalanceFarmManager).div(new BigNumber(10).pow(tokenDecimals))
        if (farmConfig.tokenSymbol === QuoteToken.BUSD && farmConfig.quoteTokenSymbol === QuoteToken.BUSD) {
          tokenPriceVsQuote = new BigNumber(1)
        } else {
          tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP))
        }
        lpTotalInQuoteToken = tokenAmount.times(tokenPriceVsQuote)
      } else {
        // Ratio in % a LP tokens that are in staking, vs the total number in circulation
        const lpTokenRatio = new BigNumber(lpTokenBalanceFarmManager).div(new BigNumber(lpTotalSupply))

        // Total value in staking in quote token value
        lpTotalInQuoteToken = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(18))
          .times(new BigNumber(2))
          .times(lpTokenRatio)

        // Amount of token in the LP that are considered staking (i.e amount of token * lp ratio)
        tokenAmount = new BigNumber(tokenBalanceLP).div(new BigNumber(10).pow(tokenDecimals)).times(lpTokenRatio)
        const quoteTokenAmount = new BigNumber(quoteTokenBlanceLP)
          .div(new BigNumber(10).pow(quoteTokenDecimals))
          .times(lpTokenRatio)

        if (tokenAmount.comparedTo(0) > 0) {
          tokenPriceVsQuote = quoteTokenAmount.div(tokenAmount)
        } else {
          tokenPriceVsQuote = new BigNumber(quoteTokenBlanceLP).div(new BigNumber(tokenBalanceLP))
        }
      }

      let [info, totalAllocPoint, tokenPerBlock] = [null, null, null]
      let depositFeeBP = 0

      const abi = farmConfig.farmManagerVersion ? unitFarmManager : masterchefABI

      ;[info, totalAllocPoint, tokenPerBlock] = await multicall(abi, [
        {
          address: farmConfig.farmManager,
          name: 'poolInfo',
          params: [farmConfig.internalPID],
        },
        {
          address: farmConfig.farmManager,
          name: 'totalAllocPoint',
        },
        {
          address: farmConfig.farmManager,
          name: 'tokenPerBlock',
        },
      ])

      if (farmConfig.farmManagerVersion) {
        if (account) {
          const [burnRate] = await multicall(burnManager, [
            {
              address: info.burnManager,
              name: 'getBurnRate',
              params: [farmConfig.farmManager, farmConfig.lpAddresses[CHAIN_ID], account, farmConfig.internalPID],
            },
          ])

          depositFeeBP = burnRate
        } else {
          depositFeeBP = 9900
        }
      } else {
        // eslint-disable-next-line prefer-destructuring
        depositFeeBP = info.depositFeeBP || 0
      }

      const allocPoint = new BigNumber(info.allocPoint._hex)
      const poolWeight = allocPoint.div(new BigNumber(totalAllocPoint))

      if (farmConfig.pid === 9) {
        console.log({
          pid: farmConfig.pid,
          allocPoint: allocPoint.toString(),
          poolWeight: poolWeight.toString(),
          totalAllocPoint: totalAllocPoint.toString(),
        })
      }

      return {
        ...farmConfig,
        tokenAmount: tokenAmount.toJSON(),
        // quoteTokenAmount: quoteTokenAmount,
        lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
        tokenPriceVsQuote: tokenPriceVsQuote.toJSON(),
        poolWeight: poolWeight.toNumber(),
        multiplier: `${allocPoint.div(100).toString()}X`,
        depositFeeBP,
        tokenPerBlock: new BigNumber(tokenPerBlock).toNumber(),
      }
    }),
  )
  return data
}

export default fetchFarms
