import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem } from '@pancakeswap-libs/uikit'
import { useActiveWeb3React } from 'hooks'
import { ChainId } from '@pancakeswap-libs/sdk'
import TranslatedText from '../TranslatedText'

const StyledNav = styled.div`
  margin-bottom: 25px;
`



const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => {
  const { chainId } = useActiveWeb3React()
  const isMainnet = chainId === ChainId.MAINNET
  const isDogechain = chainId === ChainId.DOGECHAIN
  let bridgeLink = 'https://shibarium.shib.io/bridge'
  if (isMainnet) {
    bridgeLink = 'https://shibarium.shib.io/bridge'
  }
  if (isDogechain) {
    bridgeLink = 'https://dive.dogechain.dog'
  }
  return (
    <StyledNav>
      <ButtonMenu activeIndex={activeIndex} size="sm" variant="primary">
        <ButtonMenuItem id="swap-nav-link" to="/swap" as={Link}>
          <TranslatedText translationId={8}>Swap</TranslatedText>
        </ButtonMenuItem>
        <ButtonMenuItem id="pool-nav-link" to="/pool" as={Link}>
          <TranslatedText translationId={74}>Liquidity</TranslatedText>
        </ButtonMenuItem>
        <ButtonMenuItem
          id="pool-nav-link"
          as="a"
          href={bridgeLink}
          rel="noreferrer noopener"
        >
          Bridge
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  );
}

export default Nav
