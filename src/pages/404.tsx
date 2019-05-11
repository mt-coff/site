import React from "react"
import SEO from "../components/utils/SEO"
import styled from "styled-components"

const NotFoundPage: React.FC = () => (
  <StyledCentering>
    <SEO title="404: Not found" />
    <h1>404 Page Not Found</h1>
  </StyledCentering>
)

const StyledCentering = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

export default NotFoundPage
