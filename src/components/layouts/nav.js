import React from "react"
import * as styles from "./nav.module.scss"

const Navigation = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.rouge + " title"}>Rouge</div>
            </div>
        </div>
    )
}

export default Navigation
