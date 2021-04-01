import React from 'react'
import styled from 'styled-components'
import { useRouteMatch, Link } from 'react-router-dom'
import { ButtonMenu, ButtonMenuItem, Text, Toggle } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

const FarmTabButtons = ({ stakedOnly, setStakedOnly }) => {
  const { url, isExact } = useRouteMatch()
  const TranslateString = useI18n()

  const isActive = window.location.pathname.search('history')

  const isShowTeam = window.location.pathname.search('/tier/0') === -1
  let team = 0
  if (window.location.pathname.search('/team/1') > 0) {
    team = 1
  }
  if (window.location.pathname.search('/team/2') > 0) {
    team = 2
  }

  return (
    <Wrapper>
      <ToggleWrapper>
        <Toggle checked={stakedOnly} onChange={() => setStakedOnly(!stakedOnly)} />
        <Text> {TranslateString(699, 'Staked only')}</Text>
      </ToggleWrapper>
      <ButtonMenu activeIndex={isActive === -1 ? 0 : 1} size="sm" variant="subtle">
        <ButtonMenuItem as={Link} to={`${url}`}>
          {TranslateString(698, 'Active')}
        </ButtonMenuItem>
        <ButtonMenuItem as={Link} to={`${url}/history`}>
          {TranslateString(700, 'Inactive')}
        </ButtonMenuItem>
      </ButtonMenu>
      {isShowTeam && (
        <ButtonMenu activeIndex={team} size="sm" variant="subtle">
          <ButtonMenuItem as={Link} to={`${url}`}>
            {TranslateString(698, 'All')}
          </ButtonMenuItem>
          <ButtonMenuItem as={Link} to={`${url}/team/1`}>
            {TranslateString(700, 'Humans')}
          </ButtonMenuItem>
          <ButtonMenuItem as={Link} to={`${url}/team/2`}>
            {TranslateString(700, 'Orcs')}
          </ButtonMenuItem>
        </ButtonMenu>
      )}
    </Wrapper>
  )
}

export default FarmTabButtons

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`

const ToggleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 32px;

  ${Text} {
    margin-left: 8px;
  }
`
