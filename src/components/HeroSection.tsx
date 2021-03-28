import React, { ReactNode } from 'react'
import { HeroContainer, HeroWrapper } from '../styles/pages/HeroSection'

type Props = {
  children?: ReactNode
}

const HeroSection = ({ children }: Props) => (
  <>
    <HeroContainer>
      <HeroWrapper>{children}</HeroWrapper>
    </HeroContainer>
  </>
)

export default HeroSection
