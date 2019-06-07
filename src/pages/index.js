import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <a
      href="https://www.patreon.com/bePatron?u=10262003"
      data-patreon-widget-type="become-patron-button"
    >
      Become a Patron!
    </a>
    <script async src="https://c6.patreon.com/becomePatronButton.bundle.js" />
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
