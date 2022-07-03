import styled, { ThemedStyledProps } from "styled-components";
import { MAIN_COLOR, SECOND_COLOR } from "../../constants/Colors";

export const Wrapper = styled.div`
  display: flex;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-shrink: 0;
  scroll-snap-align: center;
  flex-basis: 46%;
  margin: 2%;
  max-width: 46%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;
export const CardName = styled.p`
  font-size: 14px;
  word-wrap: break-word;
  color: ${(props) => props.theme.secondaryLightText};
  width: 100%;
  text-align: center;
  padding: 0 3px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Preview = styled.img`
  width: 95%;
  height: auto;
  border-radius: 7px;
`;
export const PreviewWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: ${(props) => props.theme.secondary};
  color: #fff;
  white-space: initial;
  border-radius: 7px;
  svg {
    position: absolute;
    align-self: center;
    justify-self: center;
    top: 50;
    left: 50;
  }
  ::after {
    content: "";
    display: block;
    border: none;
    outline: none;
    padding-bottom: 100%;
  }
  img {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    left: 0;
  }
`;
export const PriceWithDiscount = styled.p`
  margin: 0 0 10px 0;
  color: ${(props) => props.theme.price};
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;

interface PriceProps {
  sale: number;
}

export const Price = styled.p<PriceProps>`
  margin: 10px 0 0 0;
  text-decoration: ${(props: any) => (props.sale ? "line-through" : "none")};
  color: ${(props) => props.theme.secondaryLightText};
  font-size: ${(props: any) => (props.sale ? "16px" : "20px")};
  font-weight: 700;
  line-height: 26px;
`;
export const Button = styled.button`
  width: 100px;
  background-color: ${(props) => props.theme.primaryLightButton};
  //background-color: #8e47ff;
  //background: rgb(101, 67, 231);
  //background: linear-gradient(
  //  90deg,
  //  rgba(101, 67, 231, 1) 0%,
  //  rgba(68, 72, 255, 1) 100%
  //);
  height: 50px;
  padding: 0;
  align-items: center;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  border: none;
  color: ${(props) => props.theme.primaryLightText};
  margin-top: 10px;
  align-self: center;
  transition: 0.2s;
  :hover {
    transition: 0.2s;
    transform: scale(1.05);
    background-color: #ede2cd;
  }
`;
export const LoadingTrack = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 30px;
  border-radius: 50%;
  animation: spin infinite 2s linear;
`;
