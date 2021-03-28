import ReactTyped from 'react-typed'
import styled from 'styled-components'
import bgImage from '../../assets/coffee-apple.jpg'

export const HeroContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: cover;
  background-image: url(${bgImage});
`

export const HeroWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 54px;
    margin-top: 40px;
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
export const HeroHeader = styled(ReactTyped)`
  color: #fa923f;
  font-weight: 600;
  font-size: 100px;

  @media screen and (max-width: 960px) {
    font-size: 70px;
  }
`

export const HeroParagraph = styled(ReactTyped)`
  margin-top: 8px;
  color: #fff;
  font-size: 32px;

  @media screen and (max-width: 960px) {
    font-size: 30px;
  }
`
