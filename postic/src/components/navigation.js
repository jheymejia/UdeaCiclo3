import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css";

export default function Navigation() {
  return (
    <nav className="menu">
      <div className="menu-nombre">
        <Link to="/modulo-ventas">
          <span>Papeleria La casa de papel</span>
        </Link>
      </div>
      <ul className="menu-items">
        <li>
          <NavLink exact to="/modulo-usuarios" activeClassName="active">
            Usuarios
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/modulo-ventas" activeClassName="active">
            Ventas
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/modulo-productos" activeClassName="active">
            Productos
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/modulo-compras" activeClassName="active">
            Compras
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login" activeClassName="active">
            Iniciar Sesión
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}