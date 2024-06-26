import { Contract } from '@ethersproject/contracts'
import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'
import { JsonRpcSigner, Web3Provider } from '@ethersproject/providers'
import { BigNumber } from '@ethersproject/bignumber'
// import { abi as IBaguetteRouterABI } from '@baguette-exchange/contracts/artifacts/contracts/baguette-periphery/interfaces/IBaguetteRouter.sol/IBaguetteRouter.json'
import { abi as IUniswapV2Router02ABI } from '@uniswap/v2-periphery/build/IUniswapV2Router02.json'
import { ChainId, JSBI, Percent, Token, CurrencyAmount, Currency, ETHER } from '@pancakeswap-libs/sdk'
import { ROUTER_ADDRESS } from '../constants'
import { TokenAddressMap } from '../state/lists/hooks'

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

const ETHERSCAN_PREFIXES: { [chainId in ChainId]: string } = {
  2000: 'https://explorer.dogechain.dog',
  109: 'https://www.shibariumscan.io'
}

const CHAIN_IMAGES: { [chainId in ChainId]: string } = {
  2000: 'https://chewyswap.dog/images/chains/2000.png',
  109: 'https://chewyswap.dog/images/chains/109.png',
}

const CHAIN_NAMES: { [chainId in ChainId]: string } = {
  2000: 'Dogechain',
  109: 'Shibarium',
}

const CHAIN_BRIDGES: { [chainId in ChainId]: string } = {
  2000: 'https://dive.dogechain.dog/bridge',
  109: 'https://shibarium.shib.io/bridge',
}

export function getEtherscanLink(chainId: ChainId, data: string, type: 'transaction' | 'token' | 'address'): string {
  const prefix = `${ETHERSCAN_PREFIXES[chainId] || ETHERSCAN_PREFIXES[ChainId.DOGECHAIN]}`

  switch (type) {
    case 'transaction': {
      return `${prefix}/tx/${data}`
    }
    case 'token': {
      return `${prefix}/token/${data}`
    }
    case 'address':
    default: {
      return `${prefix}/address/${data}`
    }
  }
}

export function getChainLogo(chainId: ChainId): string {
  if (chainId === undefined) {
    return 'https://chewyswap.dog/images/chains/109.png'
  }
  const logo = `${CHAIN_IMAGES[chainId] || CHAIN_IMAGES[ChainId.DOGECHAIN]}`
  return logo
}

export function getChainName(chainId: ChainId): string {
  if (chainId === undefined) {
    return 'Wrong Network'
  }
  let name = 'Wrong Network'
  name = `${CHAIN_NAMES[chainId]}`
  return name
}

export function getChainBridge(chainId: ChainId): string {
  if (chainId === undefined) {
    return 'https://shibarium.shib.io/bridge'
  }
  const bridgeUrl = `${CHAIN_BRIDGES[chainId] || CHAIN_BRIDGES[ChainId.DOGECHAIN]}`
  return bridgeUrl
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export function shortenAddress(address: string, chars = 4): string {
  const parsed = isAddress(address)
  if (!parsed) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

// add 10%
export function calculateGasMargin(value: BigNumber): BigNumber {
  return value.mul(BigNumber.from(10000).add(BigNumber.from(1000))).div(BigNumber.from(10000))
}

// converts a basis points value to a sdk percent
export function basisPointsToPercent(num: number): Percent {
  return new Percent(JSBI.BigInt(num), JSBI.BigInt(10000))
}

export function calculateSlippageAmount(value: CurrencyAmount, slippage: number): [JSBI, JSBI] {
  if (slippage < 0 || slippage > 10000) {
    throw Error(`Unexpected slippage value: ${slippage}`)
  }
  return [
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 - slippage)), JSBI.BigInt(10000)),
    JSBI.divide(JSBI.multiply(value.raw, JSBI.BigInt(10000 + slippage)), JSBI.BigInt(10000))
  ]
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

// account is optional
export function getContract(address: string, ABI: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account) as any)
}

// account is optional
export function getRouterContract(chainId: ChainId, library: Web3Provider, account?: string): Contract {
  return getContract(chainId ? ROUTER_ADDRESS[chainId] : ROUTER_ADDRESS[ChainId.MAINNET], IUniswapV2Router02ABI, library, account)
}

export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function isTokenOnList(defaultTokens: TokenAddressMap, currency?: Currency): boolean {
  if (currency === ETHER) return true
  return Boolean(currency instanceof Token && defaultTokens[currency.chainId]?.[currency.address])
}
