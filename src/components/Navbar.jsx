import React from 'react';
import {NavLink} from "react-router-dom";

export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <NavLink className="navbar-brand" to="/lists">React version</NavLink>
            
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/lists">Lists</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add">Add</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                </li>
            </ul>
        
        </nav>
    );
};