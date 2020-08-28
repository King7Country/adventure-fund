import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { useDarkBackground } from "../hooks"

import styled from "@emotion/styled"
import styles from "./index.module.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Wrapper = styled.div `
  margin-top:    5rem;
  margin-bottom: 4rem;
`

const NewsPage = ({ location }) => {

  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: {fields: publishedDate, order: DESC}) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "DD MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750, maxHeight: 300, resizingBehavior: SCALE) {
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
      }
    `
  )

  useDarkBackground()

  return (

    <Layout>
      <SEO title="News" />
      <Wrapper>
        <h1 style={{
          marginLeft: `5%`,
          paddingTop: `2.5rem`
        }}>News</h1>

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

      </Wrapper>


    </Layout>
  )
}

export default NewsPage
