const escapeStringRegexp = require("escape-string-regexp")
const pagePath = `content`
const indexName = `Pages`
const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        title
        slug
        excerpt {
          childMarkdownRemark {
            excerpt(pruneLength: 150)
          }
        }
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, title, slug, excerpt } }) {
  return {
    objectID: id,
    ...title,
    ...slug,
    ...excerpt,
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
module.exports = queries
