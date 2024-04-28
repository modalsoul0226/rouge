import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Home from '../components/home/home'

const IndexPage = ({ data }) => {
    const { allMarkdownRemark } = data
    const entries = toc(allMarkdownRemark)
    return (
        <Layout>
            <SEO
                title="p0"
                description="index page for in(ter)vention"
                lang="zh-Hans"
            />
            <Home toc={entries} />
        </Layout>
    )
}

const toc = (allMd) =>
    allMd.edges
        .map(({ node }) => node.frontmatter)
        .sort((a, b) => new Date(a.date) - new Date(b.date))
        .reverse()

export const pageQuery = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        slug
                        title
                        titleOriginal
                        author
                        date
                        category
                        year
                    }
                }
            }
        }
    }
`

export default IndexPage
