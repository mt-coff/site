import React from "react"
import styled from "styled-components"

export interface Props {
  className?: string
  color?: string
}

export const Container: React.FC<Props> = ({ children, className, color }) => (
  <Div className={className} color={color}>
    {children}
  </Div>
)

const Div = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.color ? props.color : "transparent")};
`
