import React from "react";
import Navbar from "./navbar";
import "../styles/global.css"

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <div className="footer">
                <p>Copyright © 2022 Vowel Web</p>
            </div>
        </div>
    )
}