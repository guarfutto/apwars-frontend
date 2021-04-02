import { useTokenBUSDPrice } from 'state/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalRewards } from './useTickets'

const useLotteryTotalPrizesUsd = () => {
  const totalRewards = useTotalRewards()
  const totalCake = getBalanceNumber(totalRewards)
  const tokenPriceBUSD = useTokenBUSDPrice()

  return totalCake * tokenPriceBUSD.toNumber()
}

export default useLotteryTotalPrizesUsd
