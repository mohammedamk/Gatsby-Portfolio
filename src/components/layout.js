import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "../styles/global.css"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer/>
            <div className="footer">
                <p>Copyright © 2023 Vowel Web</p>
            </div>
        </div>
    )
}