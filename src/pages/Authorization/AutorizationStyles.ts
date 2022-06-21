import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 50px;
  padding: 0 15px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  margin-bottom: 40px;
  justify-content: center;
`;
export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
export const Label = styled.label`
  width: fit-content;
  margin: 10px;
`;
export const ChangeField = styled.button`
  margin: 20px;
  border: none;
  background-color: transparent;
`;
export const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: none;
  outline: none;
`;
export const Error = styled.p`
  margin: 10px 0 0 0;
  color: #ff8282;
`;

export interface FormProps {
  name: string;
  password: string;
  email: string;
  type: string;
}
