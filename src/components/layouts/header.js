import React from "react"

const header = {
    width: "100%",
}

const headerTitle = {
    width: "100%",
    position: "sticky",
    top: "10vh",
    marginTop: "70vh",
    lineHeight: "0.4"
}

const em = {
    color: "rgba(195,20,20)"
}

const Header = () => {
    return (
        <div className="hidden md:block" style={header}>
            <div className="title" style={headerTitle}>
                in&nbsp;&nbsp;&nbsp;vention<br/>
                &nbsp;&nbsp;&nbsp;<span style={em}>(ter)</span>
            </div>
        </div>
    )
}

export default Header
