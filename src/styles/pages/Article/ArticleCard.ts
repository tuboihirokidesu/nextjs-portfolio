import styled from 'styled-components'

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`
export const CardsWrap = styled.div`
  position: relative;
  margin: 50px 0 45px;
`
export const CardsItems = styled.ul`
  margin-bottom: 24px;

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`
