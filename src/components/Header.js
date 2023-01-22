import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    const [header, setHeader] = useState(false);

    const scrollHeader = () => {
        if (window.scrollY >= 40) {
            setHeader(true)
        } else {
            setHeader(false)
        }
    }
    window.addEventListener("scroll",scrollHeader)
    return (
        <>
            <section className='Port_Custom_Nav'>
                <div className={header?'nav_active':'navbar-dark'}>
                    <nav className="navbar navbar-expand-lg fixed-top">
                        <div className="container">
                            <NavLink className="navbar-brand" to={"/"}>Portfolio</NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-2 mb-2 mb-lg-0 mx-auto">
                                    <li className="nav-item me-2">
                                        <a className="nav-link" aria-current="page" href="#hero">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#about">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#services">Services</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Drop
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Project Details</a></li>
                                            <li><a className="dropdown-item" href="#">Terms Conditions</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Privacy Policy</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#contact">Contact</a>
                                    </li>

                                </ul>
                                {/* <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
        </>
    )
}

export default Header