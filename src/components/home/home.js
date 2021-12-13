import React from "react"

import Body from "../layouts/body"
import Navigation from "../layouts/nav"
import Banner from "./banner"
import Content from "../layouts/content"
import Entry from "../layouts/table/entry"

const Home = () => {
    return (
        <Body>
            <Navigation/>
            <Banner/>
            <hr/>
            <Content>
                <div className="h2-zh">
                    <Entry>
                        <p>t</p>
                        <p>T</p>
                        <p>Y</p>
                    </Entry>
                    <Entry>
                        <p>Dec</p>
                        <p>
                            为什么是政治，为什么是马克思<br/>
                            <span className="h2-en">Why politics, Why Marx</span>
                        </p>
                        <p>2021</p>
                    </Entry>
                    <Entry>
                        <p>Jan</p>
                        <p>
                            阿尔杜塞词典<br/>
                            Althusser Glossary
                        </p>
                        <p>1969</p>
                    </Entry>
                    <Entry>
                        <p>Feb</p>
                        <p>
                            电影/意识形态/批评<br/>
                            Cinema / Ideology / Criticism
                        </p>
                        <p>1969</p>
                    </Entry>
                </div>
            </Content>
        </Body>
    )
}

export default Home
