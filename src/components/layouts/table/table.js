import React from "react"
import Entry from "./entry"

const getTitles = (articles) => {
    const titles = []
    for (const [year, yList] of Object.entries(articles)) {
        for (const [month, mList] of Object.entries(yList)) {
            for (const [mid, article] of Object.entries(mList)) {
                titles.push(<Entry article={article} year={year} month={month} mid={mid}/>)
            }
        }
    }

    return titles
}

const Table = (props) => {
    return (
        <>
            {getTitles(props.articles)}
        </>
    )
}

export default Table
