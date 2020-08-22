import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Wrapper from "../components/wrapper.js"
import SEO from "../components/seo"
import Cell from "../components/cell"
import staticdata from "../../staticdata.json"

const IndexPage = ( {data} ) => {

  return (
  <Layout>
    <SEO title="Home"/>
    <Wrapper>
    <h1>
      All Aboard
    </h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>


    <div>

      {staticdata.cells.map(cell => (
        <Cell title={cell.title} image={cell.image} text={cell.text} />
      ))}

    </div>



    </Wrapper>
  </Layout>
)
}

export default IndexPage
