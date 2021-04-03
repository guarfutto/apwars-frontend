import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // add team(0 no team, 1 - humans, 2 - orcs)
  {
    pid: 0,
    internalPID: 0,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 5,
    lpSymbol: 'wGOLD - BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x404aa3ad24ac6ebdaed864d79618ea51f9b23514',
    },
    tokenSymbol: 'wGOLD',
    tokenAddresses: {
      97: '',
      56: '0xEedbED4971DCe09D692759390Ed787213Db49e95',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    internalPID: 1,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'wGOLD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2fb09b7be893675cb60c1cbc7385500da7783b8e',
    },
    tokenSymbol: 'wGOLD',
    tokenAddresses: {
      97: '',
      56: '0xEedbED4971DCe09D692759390Ed787213Db49e95',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    internalPID: 2,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    internalPID: 3,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561EEe90e24F3b348E1087A005F78B4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 4,
    internalPID: 4,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'BUSD-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x680Dd100E4b394Bda26A59dD5c119A391e747d18',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 5,
    internalPID: 5,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'BUSD-DAI LP',
    lpAddresses: {
      97: '',
      56: '0x680Dd100E4b394Bda26A59dD5c119A391e747d18',
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.DAI,
    quoteTokenAdresses: contracts.dai,
  },
  {
    pid: 6,
    internalPID: 6,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'EGG-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x19e7cbECDD23A16DfA5573dF54d98F7CaAE03019',
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    internalPID: 7,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0Ed8E0A2D99643e1e65CCA22Ed4424090B8B7458',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    internalPID: 8,
    farmManager: '0x334b679ec7ed94fd03342ab842ff3190395ac53b',
    rewardTip: 'wGOLD',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
