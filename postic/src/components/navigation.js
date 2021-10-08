import "../App.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";


export default function Navigation() {
  return (

<nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
  <div class="container-fluid">
  <Link className="navbar-brand" to="/modulo-ventas">
    Papelería La Casa de Papel
  </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header text-light">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menú</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">

        <li class="nav-item mx-3">
          <NavLink className="nav-link" aria-current="page"  exact to="/modulo-ventas">
            <i class="bi bi-cash-coin"></i> Ventas
          </NavLink>
        </li>

        <li class="nav-item mx-3">
          <NavLink className="nav-link" exact to="/modulo-usuarios">
            <i class="bi bi-person-circle"></i> Usuarios
          </NavLink>
        </li>    

        <li class="nav-item mx-3">
          <NavLink className="nav-link" exact to="/modulo-productos">
            <i class="bi bi-box-seam"></i> Productos
          </NavLink>
        </li>   

        <li class="nav-item mx-3">
          <NavLink className="nav-link" exact to="/modulo-compras">
            <i class="bi bi-cart2"></i> Compras
          </NavLink>
        </li>  

        <li class="nav-item mx-3">
          <NavLink className="nav-link" exact to="/login" onClick="close()">
            <i class="bi bi-box-arrow-in-right"></i> Iniciar Sesión
          </NavLink>
        </li>    

        </ul>
       
      </div>
    </div>
  </div>
</nav>


  );
}