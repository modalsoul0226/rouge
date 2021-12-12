import React from "react"

const header = {
    width: "100%",
    height: "100%",
    position: "relative",
    zIndex: "0"
}

const headerTitle = {
    position: "fixed",
    bottom: "25%"
}

const Header = () => {
    return (
        <div style={header}>
            <div className="title" style={headerTitle}>L'Atelier</div>
        </div>
    )
}

export default Header
