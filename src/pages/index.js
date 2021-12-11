import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  return (
    <Layout noScroll="False">
        <SEO 
            title="L'Atelier Rouge"
            description="Marxist cultural study group based in Toronto"
            lang="zh-Hans"
        />
    </Layout>
  )
}

export default IndexPage
