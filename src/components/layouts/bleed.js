import React from "react"
import PropTypes from "prop-types"

const bleed = {
    width: "94%",
    height: "100%",
    position: "relative",
    marginLeft: "3%",
    marginRight: "3%",
    overflow: "hidden"
}

const Bleed = (props) => {
    return (
        <div style={bleed}>
            {props.children}
        </div>
    )
}

Bleed.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Bleed
