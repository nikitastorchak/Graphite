import styled from "styled-components";
import { MAIN_COLOR, SECOND_COLOR } from "../../constants/Colors";

export const Wrap = styled.div`
  display: flex;
  overflow: scroll;
  scroll-snap-type: x mandatory;
  white-space: nowrap;
`;
export const Card = styled.div`
  display: flex;
  flex-shrink: 0;
  scroll-snap-align: center;
  flex-basis: 30%;
  margin: 7px;
  max-width: 30%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
`;
export const CardName = styled.p`
  font-size: 14px;
  word-wrap: break-word;
  color: #fff;
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
  position: relative;
  box-shadow: 0 0px 4px 4px #121212;
  background: linear-gradient(
    137deg,
    rgba(228, 231, 255, 1) 0%,
    rgba(228, 227, 255, 1) 44%,
    rgba(228, 240, 255, 1) 100%
  );
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
export const Price = styled.p`
  margin: 0;
  color: ${SECOND_COLOR};
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
`;
export const Button = styled.button`
  width: fit-content;

  background: transparent;

  border: none;
  border-radius: 50%;
  color: #fff;
  margin-top: 10px;

  align-self: center;
`;
export const LoadingTrack = styled.div`
  width: 50px;
  height: 50px;
  margin-top: 30px;
  border-radius: 50%;
  animation: spin infinite 2s linear;
`;
