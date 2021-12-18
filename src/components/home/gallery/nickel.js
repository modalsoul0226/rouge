import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import * as styles from "../banner.module.scss"

const Nickel = () => {
    // query background image
    const data = useStaticQuery(graphql`
        query {
            src: file(relativePath: { eq: "nickel.jpeg" }) {
                childImageSharp {
                    fluid(quality: 90, maxWidth: 500) {
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
        <div className={styles.coverImage}>
            <Img fluid={sources}/>
        </div>
    )
}

export default Nickel
