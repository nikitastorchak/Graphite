import styled from "styled-components";

export const LoadingTrack = styled.div`
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  width: 30px;
  height: 50px;
  background: rgb(112, 110, 255);
  background: linear-gradient(
    90deg,
    rgba(112, 110, 255, 1) 0%,
    rgba(112, 110, 255, 1) 50%,
    rgba(129, 128, 255, 1) 50%,
    rgba(129, 128, 255, 1) 100%
  );
  margin: 10px;
  animation: spin infinite 1.5s ease;
`;
export const LoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Loading = () => {
  return (
    <LoadingWrap>
      <LoadingTrack />
    </LoadingWrap>
  );
};

export default Loading;
