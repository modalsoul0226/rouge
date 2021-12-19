import * as React from "react"

const container = {
    width: "100%"
}

const title = {
    width: "60%"
}

const author = {
    width: "50%",
    marginLeft: "50%",
    // textAlign: "right"
}

const Banner = (props) => {
    return (
        <>
            <div style={container}>
                {props.children}
                <div style={title}>
                    <div className={"h1-zh"}>{props.title}</div>
                    <div className={"h1-en"}>{props.originalTitle}</div>
                </div>
                <div style={author}>
                    <div className={"h1-en"}>
                        {props.author}<br/>
                        {props.year}
                    </div>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Banner
