import React from "react"
import SEO from "../components/utils/SEO"
import Summary from "../components/Summary"
import Footer from "../components/Footer"
import "../index.css"

const IndexPage: React.FC = () => (
  <>
    <SEO title="Home" keywords={[`mt_coff`, `mt-coff`]} />
    <Summary />
    <Footer />
  </>
)

export default IndexPage
