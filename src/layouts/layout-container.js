import React from "react"
import NavBar from "../components/navbar"
import Footer from "../components/footer";


export default function LayoutContainer({ children }) {
  return (
      <React.Fragment>
          <div className="layout-holder">
            <NavBar/>
                <div className="layout-container">
                    {children}
                </div>
            <Footer/>
        </div>
      </React.Fragment>
    
  )
}