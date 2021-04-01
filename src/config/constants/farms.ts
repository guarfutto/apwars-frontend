import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // esse é importante
  {
    pid: 0,
    internalPID: 0,
    farmManager: '0x7B2Cfa4464aC8c733f4caBa2933c7Bb297D1d8a6',
    risk: 5,
    lpSymbol: 'A:GOLD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x0aB8cEeEb3E410CDe3Cb84A8C015651AdEe46294',
    },
    tokenSymbol: 'A:GOLD-TV1',
    tokenAddresses: {
      97: '',
      56: '0x511C89daef3BDd97840BcBdB257DEDA2a04BAe7f',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    internalPID: 0,
    farmManager: '0x1004e751b3dDF9744b621A4bA7cbE93E6Ad085ff',
    risk: 5,
    lpSymbol: 'A:WARRIOR-A:GOLD LP',
    lpAddresses: {
      97: '',
      56: '0xC999f927eD653B30f1653994d7e05B3f02D76912',
    },
    tokenSymbol: 'A:Warrior',
    tokenAddresses: {
      97: '',
      56: '0xf1B60eD903e68a19e07251b69a042a5a78Ffd1a8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: {
      56: '0x511C89daef3BDd97840BcBdB257DEDA2a04BAe7f',
      97: '',
    },
  },
  {
    pid: 2,
    internalPID: 1,
    farmManager: '0x7B2Cfa4464aC8c733f4caBa2933c7Bb297D1d8a6',
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
  {
    pid: 3,
    internalPID: 2,
    farmManager: '0x7B2Cfa4464aC8c733f4caBa2933c7Bb297D1d8a6',
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
