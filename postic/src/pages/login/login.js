//import "./App.css";
import "./login.css";
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";
import Profile from "../../util/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';
import logo from '../../assets/images/logo.png';


function Login() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Cargando...</h1>
  }

  return (
    

    
    <div className="Login">

      <div class="container-fluid my-1">       
       
          <div class="col-md-6 mx-auto text-center">
          <img src={logo} class="img-fluid" alt="Logo" />

            <form class="text-start"> 
              <div class="mb-3">
                <label for="correo" class="form-label m-0">Correo Electrónico</label>               
                <div class="input-group">
                   <div class="input-group-text"><i class="bi bi-person"></i></div>
                     <input type="text" class="form-control" id="correo" placeholder="Ingrese su correo" />
                </div>               
              </div>
              <div class="mb-3">
                <label for="contrasena" class="form-label m-0">Contraseña</label>
                <div class="input-group">
                   <div class="input-group-text"><i class="bi bi-key"></i></div>
                     <input type="text" class="form-control" id="contrasena" placeholder="***" />
                </div>   
              </div> 

              <button type="submit" class="btn btn-primary mt-3 w-100">Ingresar</button>

              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
              <Profile />

            </form>

            <p class="text-muted"><i class="bi bi-exclamation-circle mx-2"></i><a href="#" data-bs-toggle="modal" data-bs-target="#modalRecuperarClave">Olvidé mi contraseña</a></p>

          </div>
      
      </div>

     
<div class="modal fade" id="modalRecuperarClave" tabindex="-1" aria-labelledby="modalRecuperarClave" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalRecuperarClave">Recuperar Contraseña</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <div class="input-group">
            <div class="input-group-text"><i class="bi bi-envelope"></i></div>
              <input type="mail" class="form-control" id="recuperarClave" placeholder="Ingrese el correo con el que se registró en el sistema" />
          </div>     
      </div>
      <div class="modal-footer"> 
        <button type="button" class="btn btn-primary w-100">Enviar</button>
      </div>
    </div>
  </div>
</div>

     
    </div>
  );
}

export default Login;