import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"


import styles from "./index.module.css"
import Wrapper from "../components/wrapper.js"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Info from "../components/info"
import Testimonials from "../components/testimonials"


const IndexPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}, limit: 3) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "DD MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750,
                  maxHeight: 300,
                  resizingBehavior: SCALE
                ) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
        allContentfulHeroBanner(sort: {fields: publishedDate, order: DESC}, limit: 1) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "DD MMMM, YYYY")
              heroImage {
                fluid(
                  maxWidth: 2000,
                  resizingBehavior: SCALE,
                   toFormat: JPG
                ) {
                  ...GatsbyContentfulFluid
                }
              }
              heroText {
                heroText
              }
            }
          }
        }
        allContentfulHomePageInfo(sort: {fields: publishedDate, order: DESC}, limit: 3) {
          edges {
            node {
              title
              id
              publishedDate(formatString: "DD MMMM, YYYY")
              photo {
                fluid(
                  maxWidth: 500,
                  maxHeight: 500,
                  resizingBehavior: SCALE,
                   toFormat: JPG
                ) {
                  ...GatsbyContentfulFluid
                }
              }
              infoText {
                infoText
              }
              linkTo
              linkText
            }
          }
        }
        allContentfulTestimonial(sort: {fields: publishedDate, order: DESC}, limit: 2) {
          edges {
            node {
              publishedDate(formatString: "DD MMMM, YYYY")
              testimonial {
                testimonial
              }
              clientName
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="Home" />

      {/*******
        Hero section
      *******/}

      <Hero data={data} />

      {/* {data.allContentfulHeroBanner.edges.map(edge => {
        return (
          <div className={styles.heroWrapper}
        key={edge.node.id}>

        {edge.node.heroImage && (
        <Img
        className={styles.heroImage}
        fluid={edge.node.heroImage.fluid}
        alt={edge.node.title}
        />
        )}
        <div className={styles.heroMessage}>

        <h2 className={styles.heroText}>
        {edge.node.heroText.heroText}
        </h2>
        <Link className={styles.heroLink} to="/about/">Learn More</Link>
        </div>
          </div>
        )
        })}
      */}

      {/*******
        Info section with colored background
      *******/}

      <Info data={data} />

      {/*******
        News list section
      *******/}

      <Wrapper>
        <div className={styles.postListWrapper}>

          <ul className={styles.postList}>
            {data.allContentfulBlogPost.edges.map(edge => {
              return (
                <li className={styles.post} key={edge.node.id}>

                  {edge.node.featuredImage && (
                    <Img
                      className={styles.featured}
                      fluid={edge.node.featuredImage.fluid}
                      alt={edge.node.title}
                    />
                  )}
                  <Link to={`/news/${edge.node.slug}/`}>

                    <h2 className={styles.title}>
                      {edge.node.title}
                    </h2>

                    <div className={styles.meta}>
                      <span>Posted on {edge.node.publishedDate}</span>
                    </div>

                    <p className={styles.excerpt}>
                      {edge.node.excerpt.childMarkdownRemark.excerpt}
                    </p>

                  </Link>
                </li>
              )
            })}
          </ul>
          <Link className={styles.button} to="/news/">See All News</Link>
        </div>
      </Wrapper>


      {/*******
        Testimonial section with colored background
      *******/}

      <Testimonials data={data} />


    </Layout>
  )
}

          export default IndexPage
