import * as React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

import * as styles from './entry.module.scss'

const Entry = (props) => {
    let children = props.children

    // fill in the title information if an article object is specified
    const article = props.article

    if (!article) {
        return <div className={styles.container}>{children}</div>
    }

    // title cell
    const cell = (
        <p>
            {article.title}
            <br />
            {article.titleOriginal}
        </p>
    )

    children = (
        <>
            <p>{article.month}</p>
            <p>{article.author}</p>
            {article.category === 0 ? cell : <p></p>}
            {article.category === 1 ? cell : <p></p>}
            <p>{article.year}</p>
        </>
    )

    return (
        <Link to={'articles' + article.slug} className={styles.container}>
            {children}
        </Link>
    )
}

export default Entry
