import React from "react"

const header = {
    width: "100%",
    height: "100%",
    position: "fixed",
    zIndex: "0"
}

const headerTitle = {
    position: "absolute",
    bottom: "25%"
}

const Header = () => {
    return (
        <div style={header}>
            <div className="title" style={headerTitle}>in&nbsp;&nbsp;&nbsp;vention</div>
        </div>
    )
}

export default Header
