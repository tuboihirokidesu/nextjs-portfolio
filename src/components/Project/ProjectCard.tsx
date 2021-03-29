import React from 'react'
import styled from 'styled-components'
import CardItem from './ProjectCardItems'
import projectCardData from '../../data/projectCardData'

const Cards = styled.div`
  padding: 6rem;
`
const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1120px;
  width: 90%;
  margin: 0 auto;
`
const CardsWrap = styled.div`
  position: relative;
  margin: 50px 0 45px;
`
const CardsItems = styled.ul`
  margin-bottom: 24px;

  @media only screen and (max-width: 1024px) {
    display: flex;
  }
`

const ProjectCard: React.FC = () => (
  <Cards>
    <CardsContainer>
      <CardsWrap>
        {projectCardData.map(item => (
          <CardsItems key={item.id}>
            <CardItem
              src={item.src}
              label={item.label}
              path={item.path}
              text={item.text}
            />
          </CardsItems>
        ))}
      </CardsWrap>
    </CardsContainer>
  </Cards>
)

export default ProjectCard
