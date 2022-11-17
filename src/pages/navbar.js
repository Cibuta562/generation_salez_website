import './navbar.css'
import React from 'react';
import {Link} from "react-router-dom";


const z = "Zero Risk"

function Navbar () {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="logo">
                    <a href="#" className="nav-link">
                        <span className="link-text logo-text">Salez</span>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                            <g className="fa-group">
                                <path
                                    fill="currentColor"
                                    d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                    className="fa-secondary"
                                ></path>
                                <path
                                    fill="currentColor"
                                    d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                    className="fa-primary"
                                ></path>
                            </g>
                        </svg>
                    </a>
                </li>

                <li className="nav-item">
                    <Link to="/s" className="nav-link">
                        <h1 className="link-icon">S</h1>
                        <span className="link-text">Services</span>
                    </Link>
                </li>

                <li className="nav-item">
                        <Link to="/a" href="#" className="nav-link">
                            <h1 className="link-icon">A</h1>
                            <span className="link-text">Clients</span>
                        </Link>
                </li>

                <li className="nav-item">
                        <a href="#" className="nav-link">
                            <h1 className="link-icon">L</h1>
                            <span className="link-text">Advantages</span>
                        </a>
                </li>


                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <h1 className="link-icon">E</h1>
                        <span className="link-text">Experience</span>
                    </a>
                </li>


                <li className="nav-item" style={{marginTop: "0px"}}>
                    <a href="#" className="nav-link">
                        <h1 className="link-icon">Z</h1>
                        <span className="link-text">Investments</span>
                    </a>
                </li>

                {/*<li className="nav-item" id="themeButton">*/}
                {/*    <a href="#" className="nav-link">*/}
                {/*        /!*<img className="contact-img" src={contact}/>*!/*/}
                {/*        <span className="link-text">Contact</span>*/}
                {/*    </a>*/}
                {/*</li>*/}
            </ul>
        </nav>
    )
}


export default Navbar