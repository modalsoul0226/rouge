import React from "react"
import PropTypes from "prop-types"

import * as styles from "./content.module.scss"

const Content = (props) => {
    return (
        <div className={"zh " + styles.container}>
            {props.children}
        </div>
    )
}

Content.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Content
