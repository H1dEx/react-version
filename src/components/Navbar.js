import React from 'react';
import {NavLink} from "react-router-dom";


export default function Navbar(props) {
    const links = [
        {
            label: 'List',
            address: '/',
        },
        {
            label: 'Add',
            address: '/add',
        },
        {
            label: 'Logout',
            address: '/logout',
        },
    ]
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="#">React version</NavLink>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navb">
            </button>
            <ul className="navbar-nav ml-auto">
                {links.map(link => (
                    <li className="nav-item" key={link.label}>
                        <NavLink className="nav-link" to={link.address} exact>
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};