import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


import styled from "./about.module.css"
import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulServicesPage(filter: {pageName: {eq: "About"}}) {
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
            }
          }
        }
      }
    `
  )

  return (
    <>
      <Layout>
        <SEO title="Us" />


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




              </div>


              )
              })}

            </Layout>
    </>
  )
}

export default AboutPage
