import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
    return (

        
        <nav>
            <h2>Vowel Web</h2>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/project">Project Portfolio</Link>
            </div>
        </nav>
    )
}