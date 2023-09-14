import React from "react"
import Heading from "../components/heading"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
//import Img from "gatsby-image"


export default function PostBlockLarge(props) {
    return(
        <div className="div-large-post">
            <div className="div-img-large-post">
            <img src={props.img} loading="lazy" width="250" alt="" className="img-large-post"/>
            </div>
                <div className="div-large-post-content">
                <Heading color="color2">{props.title}</Heading> 
                    <div className="div-block-11">
                        <div className="categblock">
                            <div className="autdate">
                                <div className="autor">Fecha</div>
                                <div className="fecha">{props.date}</div>
                            </div>
                            <div className="div-tag">{props.categoria}</div>
                        </div>
                        <div>{props.nivel}</div>
                    </div>
                <div className="color2">{props.description}</div>
                </div>
            </div>
        
    ) 
}