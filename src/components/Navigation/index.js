import React from 'react';

import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut';
import * as ROUTES from '../../constants/routes';
import { NavLink, Link } from "react-router-dom";
//ROLES
import 'bootstrap/dist/css/bootstrap.min.css';
const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? (
        <NavigationAuth authUser={authUser} />
      ) : (
        <NavigationNonAuth />
      )
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
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
        tabIndex="-1"
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
              <NavLink className="nav-link" exact to="/account">
                <i className="bi bi-cart2"></i> Cuenta
              </NavLink>
            </li>
            

            <li className="nav-item mx-3">
              <SignOutButton/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
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
        tabIndex="-1"
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
              <NavLink className="nav-link" exact to="/landing">
                <i className="bi bi-cart2"></i> Landing
              </NavLink>
            </li>
  
            <li className="nav-item mx-3">
              <NavLink className="nav-link" exact to="/signin">
                <i className="bi bi-cart2"></i> Iniciar sesion
              </NavLink>
            </li>

           
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
