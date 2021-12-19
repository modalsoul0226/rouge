import * as React from "react"
import Layout from "../../../../components/layout"
import SEO from "../../../../components/seo"

import articles from "../../../../components/contents/articles"

const article = articles["2021"]["12"][0]

const UncleVanya = () => {
  return (
    <Layout>
        <SEO 
            title="p1"
            description="ending lines of Uncle Vanya by Checkhov"
            lang="zh-Hans"
        />
        {article.header}
        {article.content}
    </Layout>
  )
}

export default UncleVanya
