import { StaticQuery } from "gatsby"
import React from "react"
import { map } from "lodash/fp"

const PanelMember = ({ name, twitter }) => (
  <div>
    {name} {twitter}
  </div>
)

const PanelMemberList = ({ members }) =>
  map(data => <PanelMember key={data.node.id} {...data.node} />, members)

const PanelMembers = () =>
  console.log("here") || (
    <StaticQuery
      query={graphql`
        query SomeQuery {
          allPanelistsJson {
            edges {
              node {
                id
                name
                twitter
              }
            }
          }
        }
      `}
      render={data => <PanelMemberList members={data.allPanelistsJson.edges} />}
    />
  )

export default () => (
  <div>
    <PanelMembers />
  </div>
)
