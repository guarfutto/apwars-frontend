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
    label: 'Wars',
    icon: 'FarmIcon',
    href: '/wars',
    items: [
      {
        label: 'Forces of Extreme Darkness',
        href: '/wars/forces-of-extreme-darkness',
      },
    ],
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
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: `https://pancakeswap.info/token/${contracts.cake[56]}`,
      },
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
        href: `https://app.astrotools.io/pancake-pair-explorer/${contracts.cake[56]}`,
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
  {
    label: 'Audit by Hacken (Goose Finance)',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
  {
    label: 'Audit by CertiK (Goose Finance)',
    icon: 'AuditIcon',
    href: 'https://certik.org/projects/goose-finance',
  },
]

export default config
