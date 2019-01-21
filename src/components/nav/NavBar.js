import React, { Component } from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"


class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light flex-md-nowrap p-0 shadow bg-dark">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/planets">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-light" to="/stars">Stars</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default NavBar