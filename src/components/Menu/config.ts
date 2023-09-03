import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://chewyswap.dog/',
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
  /* {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://app.chewyswap.dog/farms'
  }, */
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
        label: 'CHEWY Chart',
        href: 'https://www.geckoterminal.com/eth/pools/0x95e8b4c4739f06968ce4200d5a776abb7189fe87',
      },
      {
        label: 'PooShib Chart',
        href: 'https://www.geckoterminal.com/eth/pools/0x95e8b4c4739f06968ce4200d5a776abb7189fe87',
      },
      {
        label: 'GeckoTerminal',
        href: 'https://www.geckoterminal.com/eth/pools/0x95e8b4c4739f06968ce4200d5a776abb7189fe87',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
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
    label: 'Audits by ContractWolf',
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
