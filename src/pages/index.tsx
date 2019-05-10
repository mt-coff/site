import React from "react"
import SEO from "../components/SEO"
import Summary from "../components/Summary"

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" keywords={[`mt_coff`, `mt-coff`]} />
    <Summary />
  </>
)

export default IndexPage
