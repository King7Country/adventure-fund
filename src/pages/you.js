import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./index.module.css"
import styled from "./about.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"


const YouPage = ( ) => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulServicesPage(filter: {pageName: {eq: "You"}}) {
          edges {
            node {
              title
              id
              featuredImage {
                fluid(
                  resizingBehavior: SCALE,
                ) {
                  ...GatsbyContentfulFluid
                }
              }
              photoCta {
                fluid(
                  resizingBehavior: SCALE,
                ) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Layout>
        <SEO title="You" />


        {data.allContentfulServicesPage.edges.map(edge => {
          return (
            <div
              key={edge.node.id}>


              {edge.node.featuredImage && (
                <Img
                  className={styled.featured}
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}
              <div className={styled.featuredWrapper}>
              </div>

              <h2 className={styled.title}>
                {edge.node.title}
              </h2>

              <ul className={styled.featureList}>
                <li>
                  <h3>Woke Disrupt Authentic</h3>
                  <p>Coloring book butcher block live-edge irony.</p>
                </li>

                <li>
                  <h3>Cold-Pressed Aesthetic</h3>
                  <p>Chicharrones fanny pack lyft la croix quinoa food truck</p>
                </li>

                <li>
                  <h3>Raw Denim Activated</h3>
                  <p>Austin before they sold out man bun pour-over tacos.</p>
                </li>
              </ul>

              <div className="background">
                <p className={styled.content}>
                  I'm baby meditation pinterest intelligentsia gochujang gluten-free
                  cred sustainable etsy seitan sriracha.  Woke brooklyn gluten-free banh
                mi. Biodiesel wolf selfies, iceland fashion axe. Next level craft beer shaman.</p>
              </div>


              <div className={styled.ctaWrapper}>

                {edge.node.photoCta && (

                  <Img
                    className={styled.photoCta}
                    fluid={edge.node.photoCta.fluid}
                    alt={edge.node.title}
                  />
                )}

                <div className={styled.ctaChunk}>
                  <h2>Readymade, readymade.</h2>
                  <Link className={styled.link} to="/">Adventure With Us</Link>
                </div>


              </div>

              </div>


              )
              })}

            </Layout>
    </>
  )
}

export default YouPage
