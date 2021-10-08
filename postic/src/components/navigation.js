import "../App.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/modulo-ventas">
          Papelería La Casa de Papel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end bg-dark"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header text-light">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menú
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact
                  to="/modulo-ventas"
                >
                  <i className="bi bi-cash-coin"></i> Ventas
                </NavLink>
              </li>

              <li className="nav-item mx-3">
                <NavLink className="nav-link" exact to="/modulo-usuarios">
                  <i className="bi bi-person-circle"></i> Usuarios
                </NavLink>
              </li>

              <li className="nav-item mx-3">
                <NavLink className="nav-link" exact to="/modulo-productos">
                  <i className="bi bi-box-seam"></i> Productos
                </NavLink>
              </li>

              <li className="nav-item mx-3">
                <NavLink className="nav-link" exact to="/modulo-compras">
                  <i className="bi bi-cart2"></i> Compras
                </NavLink>
              </li>

              <li className="nav-item mx-3">
                <NavLink
                  className="nav-link"
                  exact
                  to="/login"
                  // onClick="close()"
                >
                  <i className="bi bi-box-arrow-in-right"></i> Iniciar Sesión
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
