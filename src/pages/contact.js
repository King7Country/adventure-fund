import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { useDarkBackground } from "../hooks"

import styles from "./contact.module.css"
import Wrapper from "../components/wrapper"
import Layout from "../components/layout"
import SEO from "../components/seo"





const ContactPage = ( ) => {

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

  useDarkBackground()

  return (
    <>
      <Layout>
        <SEO title="You" />


        {data.allContentfulServicesPage.edges.map(edge => {
          return (
            <div
              key={edge.node.id}>


              <SEO title="Contact" />
              

              <div className={styles.contactWrapper}>

                <div className={styles.title}>
                  <h2 >Go on an adventure with us</h2>
                  <p>Organic vegan leggings, vexillologist letterpress forage single-origin coffee pork belly meh XOXO cold-pressed before they sold out ethical four dollar toast food truck. </p>
                </div>

                <ul className={styles.contactList}>
                  <li>
                    <h3>Email:</h3>
                    <a href="/contact">adventure@fund.com</a>
                  </li>
                  <li>
                    <h3>Phone:</h3>
                    <a href="/contact">604-123-9876</a>
                  </li>


                </ul>

              </div>





              {edge.node.featuredImage && (
                <Img
                  className={styles.contactPhoto}
                  fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                />
              )}


            </div>


          )
        })}

      </Layout>
    </>
  )



}

export default ContactPage
