import * as React from 'react'
import { graphql } from 'gatsby'

import Banner from '@layouts/banner'
import Layout from '@components/layout'
import Seo from '@components/seo'

export default function BlogPostTemplate({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
            <Seo
                title="First We Take Columbia"
                description="Lessons from the April 1968 occupations movement"
                lang="zh-Hans"
            />
            <Banner
                title={frontmatter.title}
                originalTitle={frontmatter.titleOriginal}
                author={frontmatter.author}
                year={frontmatter.year}
            />
            <br/>
            <h2 className="zh [&_.highlight]:hover:text-black">
                <div dangerouslySetInnerHTML={{ __html: html }} />
            </h2>
        </Layout>
    )
}

export const pageQuery = graphql`
    query ($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                slug
                title
                titleOriginal
                author
                date
            }
        }
    }
`
