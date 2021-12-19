import * as React from "react"
import PropTypes from "prop-types"

import * as styles from "./entry.module.scss"

const months = ["null", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

const Entry = (props) => {
    let children = props.children

    // fill in the title information if an article object is specified
    const article = props.article
    if (article) {
        // title cell
        const cell = <p>{article.meta.title}<br/>{article.meta.originalTitle}</p>
        children = <>
            <p>{parseInt(props.mid) === 0 ? months[props.month] : undefined}</p>
            {article.meta.category === 0 ? cell : <p></p>}
            {article.meta.category === 1 ? cell : <p></p>}
            {article.meta.category === 2 ? cell : <p></p>}
            <p>{article.meta.year}</p>
        </>
    }

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}

Entry.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Entry
