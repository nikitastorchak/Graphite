import {ReactNode} from 'react'
import './Main.scss'
import styled from "styled-components";

const StyledButton = styled.button`

`
interface ButtonProps {
  children: ReactNode
}
const Button = ({children}:ButtonProps) => <StyledButton>{children}</StyledButton>


export default Button
