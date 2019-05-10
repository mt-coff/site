import React from "react"
import SEO from "../components/SEO"
import VHCentering from "../components/VHCentering"
import styled from "styled-components"

const NotFoundPage: React.FC = () => (
  <StyledCentering>
    <SEO title="404: Not found" />
    <h1>404 Not Found</h1>
  </StyledCentering>
)

const StyledCentering = styled(VHCentering)`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`

export default NotFoundPage
