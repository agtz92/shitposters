import React from "react"
import Heading from "./heading"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
//import Img from "gatsby-image"



export default function InfoBlock(props) {
    return (
        <div className="div-large-post">
            <div className="div-img-large-post">
                <img src={props.img} loading="lazy" width="250" alt="" className="img-large-post" />
            </div>
            <div className="div-large-post-content">
                <Heading color="dark">{props.title}</Heading>
                <div>{props.description}</div>
                {props.tag1 && <div className="tags-div">
                    <div className="div-tag">{props.tag1}</div>
                    <div className="div-tag">{props.tag2}</div>
                    <div className="div-tag">{props.tag3}</div>
                </div>}
            </div>
        </div>

    )
}