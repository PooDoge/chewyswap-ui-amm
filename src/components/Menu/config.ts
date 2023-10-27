import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://farms.chewyswap.dog/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap'
      },
      {
        label: 'Liquidity',
        href: '/pool'
      }
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://farms.chewyswap.dog/farms'
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://farms.chewyswap.dog/treatbowl'
  },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: 'https://www.goosedefi.com/lottery'
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/chewyswap',
      },
      {
        label: 'CHEWY Chart',
        href: 'https://dexscreener.com/shibarium/0x324eef33af720ce44deab7e32f4367a82b4ea43b',
      },
      {
        label: 'PooShi Chart',
        href: 'https://dexscreener.com/shibarium/0x715f605613ba572c3322f458dfafd34e8a26aefd',
      },
      {
        label: 'ChewySwap Pools',
        href: 'https://dexscreener.com/shibarium/chewyswap',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Create Token",
        href: "https://gempad.app/create-token",
      },
      {
        label: "Github",
        href: "https://github.com/ChewySwap/",
      },
      {
        label: "Docs",
        href: "https://docs.chewyswap.com",
      },
    ],
  },
  {
    label: 'Audits',
    icon: 'AuditIcon',
    items: [
      {
        label: 'Shibarium Audit',
        href: 'https://contractwolf.io/projects/chewyswap',
      },
      {
        label: 'Dogechain Audit',
        href: 'https://contractwolf.io/projects/dogeshrek',
      },
    ],
  },
]

export default config
