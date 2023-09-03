import { ChainId } from '@pancakeswap-libs/sdk'

const FEED_NETWORKS: { [chainId in ChainId]: string } = {
    [ChainId.MAINNET]: '',
    [ChainId.DOGECHAIN]: '0x670404e04Bf2f6F7F8bdb0Ed8714a01c5a1bf4C6'
}

export default FEED_NETWORKS