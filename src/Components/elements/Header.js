import React from "react";
import { useHistory } from "react-router-dom";

function Header() {


    return (
        <div className="Header-wrapper">
            <img
                className="home-image"
                src="./images/dough.png"
                alt="Hello Header"
            />
         
        </div>
    );
}

export default Header