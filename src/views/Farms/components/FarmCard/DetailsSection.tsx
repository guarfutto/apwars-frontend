import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Text, Flex, Link, LinkExternal } from '@pancakeswap-libs/uikit'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { Address } from 'config/constants/types'

export interface ExpandableSectionProps {
  isTokenOnly?: boolean
  bscScanAddress?: string
  removed?: boolean
  totalValueFormated?: string
  lpLabel?: string
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  isTokenOnly,
  bscScanAddress,
  removed,
  totalValueFormated,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
}) => {
  const TranslateString = useI18n()
  let liquidityUrlPathParts = ''
  if (lpLabel === 'wCROSSBOWMAN - wARMORED-WARRIOR LP') {
    liquidityUrlPathParts = getLiquidityUrlPathParts({
      quoteTokenAdresses, quoteTokenSymbol, tokenAddresses: {
        97: '',
        56: '0xA0ecF9c7114eFFB43440B95D54e09A2a67331236',
      },
    })
  } else if (lpLabel === 'wPIKE-ORC-wARMORED-GRUNT LP') {
    liquidityUrlPathParts = getLiquidityUrlPathParts({
      quoteTokenAdresses, quoteTokenSymbol, tokenAddresses: {
        97: '',
        56: '0x491c739efd076655f7D8D0DB545b7fb09DdF517f',
      },
    })
  } else {
    liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  }

  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text>{TranslateString(316, 'Stake')}:</Text>
        <StyledLinkExternal
          href={
            isTokenOnly
              ? `${process.env.REACT_APP_APWARS_URL_EXCHANGE}/#/swap/${tokenAddresses[process.env.REACT_APP_CHAIN_ID]}`
              : `${process.env.REACT_APP_APWARS_URL_EXCHANGE}/#/add/${liquidityUrlPathParts}`
          }
        >
          {lpLabel}
        </StyledLinkExternal>
      </Flex>
      {!removed && (
        <Flex justifyContent="space-between">
          <Text>{TranslateString(23, 'Total Liquidity')}:</Text>
          <Text>{totalValueFormated}</Text>
        </Flex>
      )}
      <Flex justifyContent="flex-start">
        <Link external href={bscScanAddress} bold={false}>
          {TranslateString(356, 'View on BscScan')}
        </Link>
      </Flex>
    </Wrapper>
  )
}

export default DetailsSection
