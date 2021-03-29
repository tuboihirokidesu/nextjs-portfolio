import React from 'react'
import ArticleCardItem from './ArticleCardItems'
import articleCardData from '../../data/articleCardItem'
import {
  CardsContainer,
  CardsItems,
  CardsWrap
} from '../../styles/pages/Article/ArticleCard'

const ArticleCard = () => (
  <CardsContainer>
    <CardsWrap>
      {articleCardData.map(item => (
        <CardsItems key={item.id}>
          <ArticleCardItem
            src={item.src}
            label={item.label}
            path={item.path}
            text={item.text}
          />
        </CardsItems>
      ))}
    </CardsWrap>
  </CardsContainer>
)

export default ArticleCard
