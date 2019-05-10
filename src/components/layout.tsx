import React from "react"
import VHCentering from "./VHCentering"
import "../index.css"
import styled from "styled-components"

const Layout: React.FC = ({ children }) => <LayoutBase>{children}</LayoutBase>

const LayoutBase = styled(VHCentering)`
  height: 100vh;
  width: 100vw;
  flex-wrap: wrap;
  flex-direction: column;
`

export default Layout
