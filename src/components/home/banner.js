import * as React from "react"

import Entry from "../layouts/table/entry"

import * as styles from "./banner.module.scss"

const Banner = () => {
    return (
        <div className={styles.container + " paragraph"}>
            <div className={styles.cover}></div>
            <div className={styles.intro}>
                <div>
                    <p className="h2-en">Marxist cultural study group based in Toronto.</p>
                    <p className="h2-zh">多伦多马克思主义文化学习小组</p>
                </div>
                <p className="h2-zh">将意识与社会整体联系起来，就能认识人们在特定生活状况中，可能具有的那些思想、感情等等；如果对这种状况以及丛中产生的各种利益能够联系到它们对直接行动以及整个社会结构的影响予以完全把握，就能认识与客观状况相符的思想与感情等等。</p>
                <p className="h2-zh">——格奥尔格·卢卡奇<br/><cite>历史与阶级意识</cite></p>
            </div>
        </div>
    )
}

export default Banner
