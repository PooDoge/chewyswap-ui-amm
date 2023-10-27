import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@pancakeswap-libs/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import { injected, bsc, walletconnect } from 'connectors'
import { useActiveWeb3React } from 'hooks'
import { getChainLogo, getChainName } from 'utils'
import links from './config'

const Menu: React.FC = props => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const cakePriceUsd = useGetPriceData()
  const { chainId } = useActiveWeb3React()
  let chainImage = 'https://chewyswap.dog/images/chains/109.png'
  let chainName = 'Wrong Network'
  if (chainId) {
    chainImage = getChainLogo(chainId)
    chainName = getChainName(chainId)
  }

  // const theChain = account ? 'https://chewyswap.dog/images/chains/2000.png' : getChainLogo(chainId)

  return (
    <UikitMenu
      links={links}
      priceLink="https://www.coingecko.com/en/coins/chewyswap"
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={cakePriceUsd}
      profile={{
        username: "Current Chain",
        image: chainImage,
        chain: chainName,
        profileLink: "/profile",
        noProfileLink: "/no-profile",
      }}
      {...props}
    />
  )
}

export default Menu
