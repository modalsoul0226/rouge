import React from 'react'
import Entry from './entry'

const getTitles = (articles) =>
    articles.map((article) => (
        <Entry key={article.titleOriginal} article={article} />
    ))

const Table = (props) => {
    return <>{getTitles(props.articles)}</>
}

export default Table
