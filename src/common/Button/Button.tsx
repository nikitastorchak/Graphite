import styled from "styled-components";
import React from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  size?: number;
  title?: string;
  color?: string;
  onClick?: () => (behavior: any) => void;
  children?: React.ReactNode;
}

const Wrapper = styled.button`
  position: relative;
  color: #fff;
  font-size: 18px;
  overflow: hidden;
  width: 100px;
  height: 50px;
  background-color: ${(props) => props.theme.primaryLightButton};
  padding: 0;
  align-items: center;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  border: none;
  align-self: center;
  transition: 0.2s;
  :hover {
    transform: scale(1.05);
    transition: 0.2s;
    background-color: ${(props) => props.theme.primaryLightButtonHover};
  }
  :active {
    transform: scale(1.05);
    transition: 0.2s;
    background-color: ${(props) => props.theme.primaryLightButtonHover};
  }
`;

const Text = styled.p`
  margin: 0px;
  font-size: 16px;
  color: ${(props) => props.theme.primaryButtonText};
`;

const Button = ({
  type,
  size,
  title,
  color,
  onClick,
  children,
}: ButtonProps) => (
  <Wrapper type={type} onClick={onClick}>
    {title && <Text>{title}</Text>}
    {children}
  </Wrapper>
);

export default Button;
