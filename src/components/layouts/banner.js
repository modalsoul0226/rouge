import * as React from "react"

const container = {
    width: "100%",
    overflow: "hidden"
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
                    <h1 className={"zh"}>{props.title}</h1>
                    <h1 className={"en"}>{props.originalTitle}</h1>
                </div>
                <div style={author}>
                    <h1 className={"en"}>
                        {props.author}<br/>
                        {props.year}
                    </h1>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Banner
