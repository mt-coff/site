import React from "react"
import styled from "styled-components"
import { Copyright } from "./atoms/Copyright"
import { useStaticQuery, graphql } from "gatsby"

const Footer: React.FC = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  return (
    <Wrapper>
      <CopyrightArea author={site.siteMetadata.author} year={2019} />
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #1a1a1a;
  margin-top: -2rem;
`

const CopyrightArea = styled(Copyright)`
  width: 95%;
  color: white;
  display: flex;
  justify-content: flex-end;
`

export default Footer
