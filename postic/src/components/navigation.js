import { NavLink, Link } from 'react-router-dom'; 
import '../App.css';
import React from 'react';

export default function Navigation(){
    return(
        <nav className="menu">
            <div className="menu-nombre">
                <Link to="/modulo-ventas"> [Nombre de tienda] </Link>
            </div>
            <ul className="menu-items">
                <li>
                    <NavLink exact to="/modulo-usuarios" activeClassName="active">Usuarios</NavLink>
                </li>
                <li>
                    <NavLink exact to="/modulo-ventas" activeClassName="active">Ventas</NavLink>
                </li>
                <li>
                    <NavLink exact to="/login" activeClassName="active">Iniciar Sesión</NavLink>
                </li>
            </ul>
        </nav>
    );
}