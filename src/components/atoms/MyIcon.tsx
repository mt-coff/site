import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

export const MyIcon: React.FC = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "mt_coff.jpg" }) {
            childImageSharp {
              fixed(width: 150) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => <Image fixed={data.file.childImageSharp.fixed} />}
    />
  )
}

const Image = styled(Img)`
  border-radius: 100%;
`
