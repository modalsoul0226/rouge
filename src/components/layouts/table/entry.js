import * as React from "react"
import PropTypes from "prop-types"

import * as styles from "./entry.module.scss"

const Entry = (props) => {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

Entry.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Entry
