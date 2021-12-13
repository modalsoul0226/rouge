import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Home from "../components/home/home"

const IndexPage = () => {
  return (
    <Layout>
        <SEO 
            title="p0"
            description="index page for in(ter)vention"
            lang="zh-Hans"
        />
        <Home/>
    </Layout>
  )
}

export default IndexPage
