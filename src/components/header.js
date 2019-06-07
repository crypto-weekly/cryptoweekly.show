import { Link, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderImage = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "crow.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
)

const Container = styled.header`
  background-color: #ffbd3a;
  margin-bottom: 1.45rem;
  font-family: "Ultra";

  > div {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
    display: flex;
    > div {
      flex: 1;
      width: 200px;
    }
  }

  a {
    color: #111111;
    font-family: "Ultra";
    text-transform: uppercase;
    font-weight: normal;
    text-decoration: none;
  }
`

const Header = ({ siteTitle }) => (
  <Container>
    <div>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <HeaderImage />
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
