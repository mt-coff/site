import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "./atoms/Button"
import { MyIcon } from "./atoms/MyIcon"
import { Container } from "./atoms/Container"
import styled from "styled-components"

const Summary: React.FC = () => {
  const { allSnsJson } = useStaticQuery(
    graphql`
      query {
        allSnsJson {
          edges {
            node {
              id
              name
              link
            }
          }
        }
      }
    `
  )

  return (
    <Container color="#1a1a1a">
      <MyIcon />
      <IntroArea>I love coffee ☕️</IntroArea>
      <ButtonArea>
        {allSnsJson.edges.map(({node}) => {
          return (
            <Button key={node.id} link={node.link} color="#c0ffee">
              {node.name}
            </Button>
          )
        })}
      </ButtonArea>
    </Container>
  )
}

const ButtonArea = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  & > a {
    margin: 1rem;
  }
`

const IntroArea = styled.p`
  color: white;
  margin: 2rem 0;
`

export default Summary
