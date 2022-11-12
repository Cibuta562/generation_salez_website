import './navbar.css'
import React from 'react';
import {Link} from "react-router-dom";

function Navbar () {
    return(
        <div className="main-nav">
            <ul className="nav-list">
                <li className="nav-link">
                    <span className="link-icon">
                    <ion-icon name="home-outline"></ion-icon>
                    </span>
                    <span className="nav-text">Home</span>
                </li>
                <li className="nav-link">
                    <span className="link-icon">
                    <ion-icon name="bag-outline"></ion-icon>
                    </span>
                    <span className="nav-text">Services</span>
                </li>
                <li className="nav-link">
                    <span className="link-icon">
                    <ion-icon name="mail-outline"></ion-icon>
                    </span>
                    <span className="nav-text">Contact</span>
                </li>
                <li className="nav-link">
                    <span className="link-icon">
                    <ion-icon name="information-circle-outline"></ion-icon>
                    </span>
                    <span className="nav-text">About</span>
                </li>
            </ul>
        </div>
    )
}


export default Navbar