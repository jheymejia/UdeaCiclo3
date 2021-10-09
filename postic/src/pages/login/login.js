//import "./App.css";
import "./login.css";
import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";
import Profile from "../../util/Profile";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import logo from "../../assets/images/logo.png";

function Login() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="Login">
      <div className="container-fluid my-1">
        <div className="col-md-6 mx-auto text-center">
          <img src={logo} className="img-fluid" alt="Logo" />

          <form className="text-start">
            <div className="mb-3">
              <label htmlFor="correo" className="form-label m-0">
                Correo Electrónico
              </label>
              <div className="input-group">
                <div className="input-group-text">
                  <i className="bi bi-person"></i>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="correo"
                  placeholder="Ingrese su correo"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="contrasena" className="form-label m-0">
                Contraseña
              </label>
              <div className="input-group">
                <div className="input-group-text">
                  <i className="bi bi-key"></i>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="contrasena"
                  placeholder="***"
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3 w-100">
              Ingresar
            </button>

            {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            <Profile />
          </form>

          <p className="text-muted ">
            <i className="bi bi-exclamation-circle mx-2"></i>
            <a data-bs-toggle="modal" data-bs-target="#modalRecuperarClave">
              Olvidé mi contraseña
            </a>
          </p>
        </div>
      </div>

      <div
        className="modal fade"
        id="modalRecuperarClave"
        tabIndex="-1"
        aria-labelledby="modalRecuperarClave"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalRecuperarClave">
                Recuperar Contraseña
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <div className="input-group-text">
                  <i className="bi bi-envelope"></i>
                </div>
                <input
                  type="mail"
                  className="form-control"
                  id="recuperarClave"
                  placeholder="Ingrese el correo con el que se registró en el sistema"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary w-100">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
