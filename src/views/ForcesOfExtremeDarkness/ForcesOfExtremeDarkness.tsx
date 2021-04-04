import React, { useContext, useRef } from 'react'
import Page from 'components/layout/Page'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import useI18n from 'hooks/useI18n'

export interface ForcesProps {
  value?: boolean
}

const IFrame: React.FC<ForcesProps> = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Heading as="h1" size="lg" color="primary" mb="50px" style={{ textAlign: 'center' }}>
        {TranslateString(10574, 'Dragon`s Trasury')}
      </Heading>
      <Image src="/images/apwars/treasury.png" alt="illustration" width={468} height={421} />
    </Page>
  )
}

export default IFrame
