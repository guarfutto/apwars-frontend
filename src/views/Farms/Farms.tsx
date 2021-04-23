import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, CAKE_PER_BLOCK, CAKE_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceBnbBusd, useTokenBUSDPrice } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps {
  tokenMode?: boolean
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const { tierId } = useParams<{ tierId: string }>()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const tokenPrice = useTokenBUSDPrice()
  const bnbPrice = usePriceBnbBusd()
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { tokenMode } = farmsProps
  const isActive = window.location.pathname.search('history') === -1

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => {
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => {
    const isActiveFarms = farm.multiplier !== '0X'

    return isActiveFarms && farm.tier === parseInt(tierId)
  })

  const inactiveFarms = farmsLP.filter((farm) => {
    const isInactiveFarms = farm.multiplier === '0X'

    return isInactiveFarms && farm.tier === parseInt(tierId)
  })

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  const humansFarms = activeFarms.filter((farm) => farm.team === 1)
  const orcsFarms = activeFarms.filter((farm) => farm.team === 2)
  const humansInactiveFarms = inactiveFarms.filter((farm) => farm.team === 1)
  const orcsInactiveFarms = inactiveFarms.filter((farm) => farm.team === 2)
  const stakedHumansFarms = stakedOnlyFarms.filter((farm) => farm.team === 1)
  const stakedOrcsFarms = stakedOnlyFarms.filter((farm) => farm.team === 2)

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      // const tokenPriceVsBNB = new BigNumber(farmsLP.find((farm) => farm.pid === CAKE_POOL_PID)?.tokenPriceVsQuote || 0)
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        // if (!farm.tokenAmount || !farm.lpTotalInQuoteToken || !farm.lpTotalInQuoteToken) {
        //   return farm
        // }

        const tokenRewardPerBlock = new BigNumber(farm.tokenPerBlock || 1)
          .times(new BigNumber(farm.poolWeight))
          .div(new BigNumber(10).pow(18))
        const tokenRewardPerYear = tokenRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = tokenPrice.times(tokenRewardPerYear)

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0)

        if (farm.quoteTokenSymbol === QuoteToken.BNB) {
          totalValue = totalValue.times(bnbPrice)
        }

        if (totalValue.comparedTo(0) > 0) {
          apy = apy.div(totalValue)
        }

        return { ...farm, apy }
      })

      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          bnbPrice={bnbPrice}
          tokenPrice={tokenPrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [bnbPrice, account, tokenPrice, ethereum],
  )

  function showCards() {
    return (
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {farmsList(inactiveFarms, true)}
          </Route>
          <Route exact path={`${path}/team/1`}>
            {stakedOnly ? farmsList(stakedHumansFarms, false) : farmsList(humansFarms, false)}
          </Route>
          <Route exact path={`${path}/team/2`}>
            {stakedOnly ? farmsList(stakedOrcsFarms, false) : farmsList(orcsFarms, false)}
          </Route>
          <Route exact path={`${path}/team/1/history`}>
            {farmsList(humansInactiveFarms, false)}
          </Route>
          <Route exact path={`${path}/team/2/history`}>
            {farmsList(orcsInactiveFarms, false)}
          </Route>
        </FlexLayout>
        {isActive && tierId === '0' && (
          <Image src="/images/goldchest.png" alt="illustration" width={1352} height={587} responsive />
        )}
        {!isActive && tierId === '0' && (
          <Image src="/images/goldchest_close.png" alt="illustration" width={1352} height={587} responsive />
        )}
      </div>
    )
  }

  function showContent() {
    switch (tierId) {
      case '3':
        return <Image src="/images/apwars/arcane.png" alt="illustration" width={1352} height={587} responsive />
      default:
        return showCards()
    }
  }

  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(10002, 'Stake tokens and LP tokens to earn war tokens')}
      </Heading>
      {tierId === '0' && (
        <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
          {TranslateString(10000, 'Deposit Fee will be used to buyback wGOLD')}
        </Heading>
      )}
      {tierId === '1' && (
        <Image src="/images/apwars/barracks.png" alt="illustration" width={1352} height={587} responsive />
      )}
      {tierId === '2' && (
        <Image src="/images/apwars/armory.png" alt="illustration" width={1352} height={587} responsive />
      )}
      <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly} />
      {tierId !== '0' && (
        <Heading as="h2" color="red" mb="50px" style={{ textAlign: 'center' }}>
          {TranslateString(10000, 'Burning Rate is the percentage of wGOLD burned (destroyed) to build troops!')}
        </Heading>
      )}

      {showContent()}
      {parseInt(tierId) > 2 && (
        <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
          Coming Soon
        </Heading>
      )}
    </Page>
  )
}

export default Farms
