import styled from "styled-components";
import { SECOND_COLOR } from "../../constants/Colors";

export const Wrap = styled.div`
  display: flex;
  overflow: scroll;
  width: 100%;
  height: auto;
  scroll-snap-type: x mandatory;
  flex-wrap: nowrap;
`;

export const Card = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-basis: 30%;
  max-width: 30%;
  height: 100%;
  scroll-snap-align: center;
  margin-right: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const CardName = styled.p`
  font-size: 14px;
  word-wrap: break-word;
  color: #fff;
  text-align: left;
  padding: 0 3px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const PreviewWrap = styled.div`
  width: 100%;
  position: relative;
  box-shadow: 0 0px 4px 4px #121212;
  background: linear-gradient(
    137deg,
    rgba(228, 231, 255, 1) 0%,
    rgba(228, 227, 255, 1) 44%,
    rgba(228, 240, 255, 1) 100%
  );
  box-sizing: border-box;
  border-radius: 7px;
  ::after {
    content: "";
    display: block;
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

export const Preview = styled.img`
  width: 95%;
  height: auto;
  border-radius: 7px;
`;
export const CategoryName = styled.h3`
  text-align: left;
  color: #fff;
`;
export const Price = styled.p`
  margin: 0;
  color: ${SECOND_COLOR};
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;
export const Button = styled.button`
  width: fit-content;
  background-color: ${(props) => props.theme.mainColor};
  border: none;
  border-radius: 5px;
  color: #fff;
  margin-top: 10px;
  padding: 10px 13px;
  align-self: center;
`;
