import React from "react"
import { graphql, Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import styles from "./news-article.module.css"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 1150) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        json
      }
    }
  }
`

const NewsArticle = props => {

  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost.title} />


      {props.data.contentfulBlogPost.featuredImage && (

        <Img
          className={styles.featured}
          fluid={props.data.contentfulBlogPost.featuredImage.fluid}
          alt={props.data.contentfulBlogPost.title}
        />

      )}
      <div className={styles.featuredWrapper}>
      </div>

      <div className={styles.content}>
        <h2>{props.data.contentfulBlogPost.title}</h2>
        <span className={styles.meta}>
          Posted on {props.data.contentfulBlogPost.publishedDate}
        </span>




        {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}


        <Link className={styles.return} to="/news/">Return to News</Link>
      </div>
    </Layout>
  )
}

export default NewsArticle
