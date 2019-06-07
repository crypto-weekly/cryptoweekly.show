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

const TitleLink = styled(Link)`
  color: #111111;
  font-family: "Ultra";
  text-transform: uppercase;
  font-weight: normal;
  text-decoration: none;
`

const Container = styled.header`
  background-color: #ffbd3a;
  margin-bottom: 1.45rem;
`

const HeaderBody = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  > div {
    flex: 1;
    max-width: 200px;
  }
`

const HeaderText = styled.h1`
  max-width: 50%;
`

const Header = ({ siteTitle }) => (
  <Container>
    <HeaderBody>
      <HeaderText>
        <TitleLink to="/">{siteTitle}</TitleLink>
      </HeaderText>
      <HeaderImage />
    </HeaderBody>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
