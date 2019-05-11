import styled from "styled-components"
import React from "react"

export interface Props {
  className?: string
  link?: string
  color?: string
}

export const Button: React.FC<Props> = ({
  children,
  className,
  link,
  color,
}) => {
  return (
    <A
      className={className}
      rel="noopener"
      target="_blank"
      href={link}
      color={color}
    >
      {children}
    </A>
  )
}

const A = styled.a`
  font-weight: bold;
  padding: 10px 0;
  width: 120px;
  color: ${props => props.color};
  border: solid 2px ${props => props.color};
  display: inline-block;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: color 0.8s ease, font-size 0.8s ease, border-color 0.8s ease;
  z-index: 10;

  &::before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    transition: transform 0.8s ease;
  }
  &::before {
    background-color: ${props => props.color};
    transform-origin: bottom left;
    transform: rotate(90deg);
    left: 0;
  }
  &:hover {
    color: #ffffff;
    border-color: white;
    font-size: 1.1rem;
  }
  &:hover::before {
    transform: rotate(0deg);
    transform-origin: top right;
    right: 0;
  }
`
