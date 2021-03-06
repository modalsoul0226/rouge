import React from "react"

import Body from "../layouts/body"
import Banner from "./banner/banner"
import Content from "../layouts/content"
import Entry from "../layouts/table/entry"
import Table from "../layouts/table/table"

import articles from "../contents/articles"


const Home = () => {
    return (
        <Body>
            <Banner/>
            <hr/>
            <Content>
                <Entry>
                    <p>t</p>
                    <p>T</p>
                    <p></p>
                    <p></p>
                    <p>Y</p>
                </Entry>
                <Table articles={articles}/>
            </Content>
        </Body>
    )
}

export default Home
