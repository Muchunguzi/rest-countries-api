import React from "react";
import {FaMoon} from "react-icons/fa"

const Header = () => {
    return (
        <div className="header">
            <p style={{fontWeight:"bold"}}>Where in the World?</p>
            <span className="space-between"></span>
             <button className="theme-changer"><FaMoon /> Dark Mode</button>
        </div>
    )
}

export {Header};