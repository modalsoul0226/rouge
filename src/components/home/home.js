import React from 'react'

import Body from '../layouts/body'
import Banner from './banner/banner'
import Content from '../layouts/content'
import Entry from '../layouts/table/entry'
import Table from '../layouts/table/table'

const Home = (props) => {
    return (
        <Body>
            <Banner />
            <br />
            <hr />
            <br />
            <Content>
                <Entry>
                    <p>m</p>
                    <p>A</p>
                    <p>T</p>
                    <p></p>
                    <p>y</p>
                </Entry>
                <Table articles={props.toc} />
            </Content>
        </Body>
    )
}

export default Home
