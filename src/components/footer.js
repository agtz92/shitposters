import React from "react"
import { Link } from "gatsby"
import '../styles/normalize.css'
import "../styles/webflow.css"
import "../styles/soynuevo.webflow.css"
import logoChico from "../images/logo_small.png"

export default function Footer() {
    
    return(
        <footer id="footer" className="footer" >
            <div className="container w-container">
                <div className="footer-flex-container">
                <Link to="/"><img
                    loading="lazy"
                    style={{width:"70px", height:"70px", paddingTop:"5px"}}
                    srcSet={logoChico}
                    alt="soynuevologo"
                    className="image"
                />
                </Link>
                    <div>
                    <h2 className="footer-heading">Categorías</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li ><Link  to="/categorias/celebridades/"  className="footer-link">Celebridades</Link></li>
                        <li ><Link  to="/categorias/cine/"  className="footer-link">Cine</Link></li>
                        <li ><Link  to="/categorias/deportes/"  className="footer-link">Deportes</Link></li>
                        <li ><Link  to="/categorias/historia/"  className="footer-link">Historia</Link></li>
                        <li ><Link  to="/categorias/musica/"  className="footer-link">Música</Link></li>
                        <li ><Link  to="/categorias/naturaleza/"  className="footer-link">Naturaleza</Link></li>
                        <li ><Link  to="/categorias/random/"  className="footer-link">Random</Link></li>
                        <li ><Link  to="/categorias/television/"  className="footer-link">TV</Link></li>
                    </ul>
                    </div>
                    <div>
                    <h2 className="footer-heading">Información</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li ><Link  to="/privacidad/"  className="footer-link">Política de Privacidad</Link></li>
                    </ul>
                    </div>
                    <div>
                    <h2 className="footer-heading">Partners</h2>
                    <ul  className="list-footer w-list-unstyled">
                        <li><a className="footer-link" href="https://www.antesdelexamen.com"  rel="noopener">Bancos de preguntas UNAM</a></li>
                        <li><a className="footer-link" href="https://www.3minread.com"  rel="noopener">Latest trends and news under 3 min!</a></li>
                    </ul>
                    </div>
                </div>
                <div className="text-bottom-footer">Copyright © 2021 10datos.com . Todos los derechos reservados.</div>
                <div className="text-bottom-footer">En este sitio se recolectan cookies utilizados para Google Analytics</div>
                </div>
        </footer>
    );
    
    }

