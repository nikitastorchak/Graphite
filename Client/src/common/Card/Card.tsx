import {FC} from 'react'
import styled from "styled-components";
import {
  ReactNode
} from "../../../../../../../../snap/intellij-idea-ultimate/353/plugins/JavaScriptLanguage/jsLanguageServicesImpl/external/react";

const CardWrap:any = styled.div<Cards>`
  display: flex;
  flex-direction:column;
  width: 33%;

`
const ImgWrap = styled.div<Cards>`
  position:relative;
  width: fit-content
`

const Img = styled.img<Cards>`
  width: 90%
`
const Sale = styled.p<Cards>`
display: ${props => props.isSale ? 'block' : "none"};
position:absolute;
margin: 0;
color:white;
background-color: #f91255;
padding: 5px 10px;
width: fit-content;
border-radius: 20px;
bottom: 0;

`
const PriceNew = styled.p<Cards>`
margin: 0;
margin-top: 10px;
color: ${props => props.isSale ? '#f91155' : '#001a34'};
font-size:20px;
font-weight: 700;
line-height: 26px;
`
const PriceOld = styled.p<Cards>`
  text-decoration: line-through;
  margin:0;
`
const Name = styled.p<Cards>`
  font-size: 14px;
  word-wrap: break-word;
  text-align:left;
  padding: 0 3px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
//
interface CardProps {
  cards: Cards[]
  // children?: ReactNode,
  // isSale?: boolean,
  // sale?: string,
  // src?: string,
  // priceNew?: string,
  // priceOld?: string | null,
  // name?: string,
}

interface  Cards {
  isSale?: boolean,
  src?: string,
  price?: string,
  priceOld?: string | null,
  name?: string,
  preview?: string,
}

// const saleCount = (item:Cards) => item.priceOld && ('-' + item.priceOld && Math.ceil(100 - (Number(item.priceNew)*100/Number(item.priceOld)) ) + "%")
// const propChecker = (prop:any) => prop ? true : false


const Card:FC<any> = (product) => {

  console.log(product);
  return (
  <CardWrap>
    <ImgWrap>
      <Img src={product.preview}/>
      {/*<Sale isSale={propChecker(props.cards.priceOld)}>{saleCount(props.cards)}</Sale>*/}
    </ImgWrap>
    <PriceNew>{product.price} ₽</PriceNew>
    {/*<PriceOld>{props.cards.priceOld}{props.cards.priceOld && '₽'}</PriceOld>*/}
    <Name>{product.name}</Name>
  </CardWrap>
)
}
export default Card
