import React from "react"
import PropTypes from "prop-types"

import Bleed from "./layouts/bleed"
import Header from "./layouts/header"

import "./layout.scss"

const left = {
    height: "100%",
    width: "20%",
    position: "absolute",
    left: "0"
}

const right = {
    height: "100%",
    width: "100%",
    position: "relative",
}

const mainStyle = {
    height: "100%",
    overflowY: "scroll"
}

const Layout = (props) => {
    let main = <main style={mainStyle}>{props.children}</main>

    return (
        <Bleed>
            <div style={left}>
                <Header/>
            </div>
            <div style={right}>
                {main}
            </div>
        </Bleed>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
 
export default Layout