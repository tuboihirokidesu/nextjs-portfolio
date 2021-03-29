import styled from 'styled-components'
import {
  CardsImage,
  CardsItem,
  CardsItemInfo,
  CardsItemLink,
  CardsItemText,
  CardsPicWrap
} from '../../styles/pages/Article/ArticleCardItems'

type Props = {
  src: string
  text: string
  label: string
  path: string
}

const ArticleCardItem = ({ src, text, label, path }: Props) => (
  <CardsItem>
    <CardsItemLink href={path} target="_blank" rel="noopener noreferrer">
      <CardsPicWrap data-category={label}>
        <CardsImage src={src} />
      </CardsPicWrap>
      <CardsItemInfo>
        <CardsItemText>{text}</CardsItemText>
      </CardsItemInfo>
    </CardsItemLink>
  </CardsItem>
)

export default ArticleCardItem
