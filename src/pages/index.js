import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./index.module.css"
import Wrapper from "../components/wrapper.js"
import Layout from "../components/layout"
import SEO from "../components/seo"


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
        allContentfulHeroBanner {
          edges {
            node {
              title
              id
              slug
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
        allContentfulHomePageInfo {
          edges {
            node {
              title
              id
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
            }
          }
        }
        allContentfulTestimonial(limit: 2) {
          edges {
            node {
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
        Herosection
      *******/}

      {data.allContentfulHeroBanner.edges.map(edge => {
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

      {/*******
        Info section with colored background
      *******/}

      <div className={styles.background}>

        {data.allContentfulHomePageInfo.edges.map(edge => {
          return (

            <div className={styles.info}
              key={edge.node.id}>

              {edge.node.photo && (

                <Img
                  className={styles.photo}
                  fluid={edge.node.photo.fluid}
                  alt={edge.node.title}
                />
              )}
              <div className={styles.infoChunk}>

                <h2 className={styles.infoTitle}>
                  {edge.node.title}
                </h2>
                <p className={styles.infoText}>
                  {edge.node.infoText.infoText}
                </p>

              </div>
            </div>
          )
        })}

      </div>

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

      <div className={styles.background}>
        <ul className={styles.testimonialWrapper}>

          {data.allContentfulTestimonial.edges.map(edge => {
            return (

              <li className={styles.testimonialChunk}
                key={edge.node.id}>
                <h2 className={styles.testimonial}>
                  {edge.node.testimonial.testimonial}
                </h2>
                <p className={styles.clientName}>
                  {edge.node.clientName}
                </p>
              </li>


            )
          })}

        </ul>
      </div>
    </Layout>
          )
          }

          export default IndexPage
