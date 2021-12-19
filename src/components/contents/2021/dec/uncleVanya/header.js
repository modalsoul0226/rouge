import * as React from "react"

import Banner from "../../../../layouts/banner"
import meta from "./meta"

const Header = () => {
    return (
        <Banner
            title={meta.title}
            originalTitle={meta.originalTitle}
            author={meta.author}
            year={meta.year}
        />
    )
}

export default Header
