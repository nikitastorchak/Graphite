import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h2`
  width: fit-content;
  max-width: 80%;
  font-family: "Montserrat", sans-serif;
  text-align: center;
  color: #404040;
`;
export const Status = styled.h1`
  width: fit-content;
  font-size: 70px;
  color: #ff6767;
  margin: 0;
`;
export const BackLink = styled.a`
  padding: 15px;
  margin-top: 50px;
  color: #404040;
  transition: 0.2s;
  :hover {
    transform: scale(1.05);
    transition: 0.2s;
    color: #bbb2ff;
  }
`;
