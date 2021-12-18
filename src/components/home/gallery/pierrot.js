import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as styles from "../banner.module.scss"

const Pierrot = () => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "pierrot.jpeg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 300) {
                        ...GatsbyImageSharpFluid_noBase64
                    }
                }
            }
        }
    `)
    
    const sources = [
        data.src.childImageSharp.fluid,
    ]

    return (
        <div className={styles.coverPierrot}>
            <Img fluid={sources}/>
        </div>
    )
}

export default Pierrot
