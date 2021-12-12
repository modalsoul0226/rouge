import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../components/home/home"

const IndexPage = () => {
  return (
    <Layout>
        <SEO 
            title="L'Atelier Rouge"
            description="Marxist cultural study group based in Toronto"
            lang="zh-Hans"
        />
        <Home/>
    </Layout>
  )
}

export default IndexPage
