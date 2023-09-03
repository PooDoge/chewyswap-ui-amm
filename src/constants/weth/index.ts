import { ChainId } from '@pancakeswap-libs/sdk'

const WETH_NETWORKS: { [chainId in ChainId]: string } = {
    [ChainId.MAINNET]: '0xC76F4c819D820369Fb2d7C1531aB3Bb18e6fE8d8',
    [ChainId.DOGECHAIN]: '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101'
}

export default WETH_NETWORKS