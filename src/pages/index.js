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
      Throw us a few bones & support the show
    </a>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
