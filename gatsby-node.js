/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

/************
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulHeroBanner {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  response.data.allContentfulBlogPost.edges.forEach(post => {
    createPage({
      path: `/news/${post.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: post.node.slug,
      },
    })
  })
  response.data.allContentfulHeroBanner.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: path.resolve("./src/templates/hero-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
  return
}
************/



const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const heroPage = path.resolve('./src/templates/hero-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulHeroBanner {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/news/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })
        const pages = result.data.allContentfulHeroBanner.edges
        pages.forEach((page, index) => {
          createPage({
            path: `/${page.node.slug}/`,
            component: heroPage,
            context: {
              slug: page.node.slug
            },
          })
        })

      })
    )
  })
}
