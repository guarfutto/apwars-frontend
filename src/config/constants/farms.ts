import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // esse é importante
  // add team(0 no team, 1 - humans, 2 - orcs), tier e filtrar nas telas
  {
    pid: 0,
    internalPID: 0,
    farmManager: '0x6bAE99Aa8289B329bC426339cbbdc8E8384d132D',
    team: 0,
    tier: 0,
    risk: 5,
    lpSymbol: 'warGOLD-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x404aa3ad24ac6ebdaed864d79618ea51f9b23514',
    },
    tokenSymbol: 'warGOLD',
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
    farmManager: '0x6bAE99Aa8289B329bC426339cbbdc8E8384d132D',
    team: 0,
    tier: 0,
    risk: 3,
    lpSymbol: 'warGOLD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x2fb09b7be893675cb60c1cbc7385500da7783b8e',
    },
    tokenSymbol: 'warGOLD',
    tokenAddresses: {
      97: '',
      56: '0xEedbED4971DCe09D692759390Ed787213Db49e95',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 2,
    internalPID: 2,
    farmManager: '0x6bAE99Aa8289B329bC426339cbbdc8E8384d132D',
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
  {
    pid: 3,
    internalPID: 0,
    farmManager: '0x5b7C3220B3c3ae482E97f65e1Bf53D4e56C312E6',
    team: 1,
    tier: 1,
    risk: 3,
    lpSymbol: 'warWarrior-warGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xf8f1b1c3fec08c5d5c717a07f47af96d6bcb42af',
    },
    tokenSymbol: 'warWarrior',
    tokenAddresses: {
      97: '',
      56: '0x2e900F47550DdC631385fF834EcfCB3BB65966b3',
    },
    quoteTokenSymbol: QuoteToken.warGOLD,
    quoteTokenAdresses: contracts.warGOLD,
  },
  {
    pid: 4,
    internalPID: 0,
    farmManager: '0x078171189f48b8E72a652d22afb0eF098D786fAe',
    team: 1,
    tier: 1,
    risk: 3,
    lpSymbol: 'warArcher-warGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x3A4663Fdb2a4cd2Ac8660F4ccF6218739401628c',
    },
    tokenSymbol: 'warArcher',
    tokenAddresses: {
      97: '',
      56: '0xcf6359EeE8e18C78aE1B074c5eFaF20Bd4b0fec4',
    },
    quoteTokenSymbol: QuoteToken.warGOLD,
    quoteTokenAdresses: contracts.warGOLD,
  },
  {
    pid: 5,
    internalPID: 0,
    farmManager: '0xaD5166B54a1372C24054CCd10db459F000946bDC',
    team: 2,
    tier: 1,
    risk: 3,
    lpSymbol: 'warGRUNT-warGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x486d649A19b6De99B304983C9b5dd454787949D7',
    },
    tokenSymbol: 'warGRUNT',
    tokenAddresses: {
      97: '',
      56: '0xcB82BB08E6E0Fd9E52d39a113b4CB9775F1c8f81',
    },
    quoteTokenSymbol: QuoteToken.warGOLD,
    quoteTokenAdresses: contracts.warGOLD,
  },
  {
    pid: 6,
    internalPID: 0,
    farmManager: '0x16826945A80f5ffEC25B381D1AE9411c778C4843',
    team: 2,
    tier: 1,
    risk: 3,
    lpSymbol: 'warORC-ARCHER-warGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x992883155213219B4C1a6620aaD52e51d9fF2A42',
    },
    tokenSymbol: 'warORC-ARCHER',
    tokenAddresses: {
      97: '',
      56: '0x25fBD05F22D294CA48C03f5e477978fbe24C9701',
    },
    quoteTokenSymbol: QuoteToken.warGOLD,
    quoteTokenAdresses: contracts.warGOLD,
  },
  {
    pid: 7,
    internalPID: 0,
    farmManager: '0x984191c14A354711347474a497a94b1Faf7dF909',
    team: 1,
    tier: 2,
    risk: 3,
    lpSymbol: 'warArmored Warrior-warGOLD LP',
    lpAddresses: {
      97: '',
      56: '0x5ec767EE269B34399a41642DDE6B4c46B03380Bc',
    },
    tokenSymbol: 'warArmored-Warrior',
    tokenAddresses: {
      97: '',
      56: '0xe21F6053dfeECcd8DaB90DFbF109CB6fe7D1BaCb',
    },
    quoteTokenSymbol: QuoteToken.warGOLD,
    quoteTokenAdresses: contracts.warGOLD,
  },
  {
    pid: 8,
    internalPID: 0,
    farmManager: '0xFD62A1fa10718D6Fb2D0cfE60B2f1534e49FfcEB',
    team: 1,
    tier: 2,
    risk: 3,
    lpSymbol: 'warCrossbowman-warGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xd7e9256f525ebc370283127e304a465640f70776',
    },
    tokenSymbol: 'warCrossbowman',
    tokenAddresses: {
      97: '',
      56: '0xA39a3F890FE83a9c9AFA24086F9c799A0af5B472',
    },
    quoteTokenSymbol: QuoteToken.warGOLD,
    quoteTokenAdresses: contracts.warGOLD,
  },
  {
    pid: 9,
    internalPID: 0,
    farmManager: '0xC7179cf53f92C8B5aeE53beB9Fe161dbEC669111',
    team: 2,
    tier: 2,
    risk: 3,
    lpSymbol: 'warPIKE-ORC-warGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xa456bbfbab9957f335d4f25b7a167e5074460ab5',
    },
    tokenSymbol: 'warPIKE-ORC',
    tokenAddresses: {
      97: '',
      56: '0x4225bc869f2Abe70D822ed61b92dB9a21ce8Dae2',
    },
    quoteTokenSymbol: QuoteToken.warGOLD,
    quoteTokenAdresses: contracts.warGOLD,
  },
  {
    pid: 10,
    internalPID: 0,
    farmManager: '0x35D79D43C229c81A280218c235684bB3F0d0449F',
    team: 2,
    tier: 2,
    risk: 3,
    lpSymbol: 'warARMORED-GRUNT-warGOLD LP',
    lpAddresses: {
      97: '',
      56: '0xE009059b91fE2e36E2aD1CF33Da771b504ac956E',
    },
    tokenSymbol: 'warARMORED-GRUNT',
    tokenAddresses: {
      97: '',
      56: '0xD814E6cd12EcaC6EC6F2c92f5F64880E17249D13',
    },
    quoteTokenSymbol: QuoteToken.warGOLD,
    quoteTokenAdresses: contracts.warGOLD,
  },
  {
    pid: 11,
    internalPID: 0,
    farmManager: '0x2B1BA6a78Aa0fa8557bB312A9e6B11AFcb38E075',
    team: 1,
    tier: 3,
    risk: 3,
    lpSymbol: 'warArmored Warrior-warCrossbowman LP',
    lpAddresses: {
      97: '',
      56: '0xDE458019B2Eb1ca36806cF5f3Dd74f5d95C3A470',
    },
    tokenSymbol: 'warWizard',
    tokenAddresses: {
      97: '',
      56: '0xa03776574F51d6565e63b807AE924A647A116635',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    internalPID: 0,
    farmManager: '0x074B48161fb38A50b52343eA1d603796F3cC9551',
    team: 2,
    tier: 3,
    risk: 3,
    lpSymbol: 'warPIKE-ORC-warARMORED-GRUNT LP',
    lpAddresses: {
      97: '',
      56: '0x572fce3F47a99F269bb7225CE7d9fcEBAeA8c64f',
    },
    tokenSymbol: 'warSHAMAN',
    tokenAddresses: {
      97: '',
      56: '0xb5C3C13844D3a6a105eAfd5462D98B4a0bD3a29E',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  // {
  //   pid: 3,
  //   internalPID: 2,
  //   farmManager: '0x7B2Cfa4464aC8c733f4caBa2933c7Bb297D1d8a6',
  //   team: 0,
  //   tier: 0,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
