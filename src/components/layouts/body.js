import React from "react"
import PropTypes from "prop-types"

import * as bodyStyles from "./body.module.scss"

const Body = (props) => {
    return (
        <div className={bodyStyles.container}>
            {props.children}
        </div>
    )
}

Body.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Body
