import { MenuEntry } from '@pancakeswap-libs/uikit'
import contracts from '../../config/constants/contracts'

const APWARS_URL_EXCHANGE = process.env.REACT_APP_APWARS_URL_EXCHANGE

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: `${APWARS_URL_EXCHANGE}`,
      },
      {
        label: 'Liquidity',
        href: `${APWARS_URL_EXCHANGE}#/pool`,
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
    items: [
      {
        label: 'Gold Mine',
        href: '/farms/tier/0',
      },
      {
        label: 'Barracks',
        href: '/farms/tier/1',
      },
      {
        label: 'Armory',
        href: '/farms/tier/2',
      },
      {
        label: 'Arcane Library',
        href: '/farms/tier/3',
      },
    ],
  },
  {
    label: 'Buy game items!',
    icon: 'NftIcon',
    href: 'https://app.apwars.farm',
  },
  // {
  //   label: 'Nests',
  //   icon: 'PoolIcon',
  //   href: '/nests',
  // },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      // {
      //   label: 'PancakeSwap',
      //   href: `https://pancakeswap.info/token/${contracts.cake[56]}`,
      // },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/apwars',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/apwars',
      // },
      {
        label: 'AstroTools',
        href: `https://app.astrotools.io/pancake-pair-explorer/0xab6Ddad53513f9F0b57778A2ebf8aA81FBaCc8c9`,
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/apwars/',
      },
      {
        label: 'Docs',
        href: 'https://docs.apwars.farm',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/apwars',
      },
    ],
  },
]

export default config
