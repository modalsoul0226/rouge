import React from "react"
import PropTypes from "prop-types"

import * as styles from "./bleed.module.scss"

const bleed = {
    width: "94%",
    position: "relative",
    marginLeft: "3%",
    marginRight: "3%"
}

const Bleed = (props) => {
    return (
        <div style={bleed} className={styles.container}>
            {props.children}
        </div>
    )
}

Bleed.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Bleed
