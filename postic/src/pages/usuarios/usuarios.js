import React, { useState } from "react";
import ActualizarUsuarios from "./actualizarUsuarios";
import "./usuarios.css";

export default function Usuarios() {
  const [isOpen, setIsOpen] = useState(false);
  const [rol, setRol] = useState("cliente");
  const [state, setState] = useState("activo");

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const handleRolSelected = (e) => setRol(e.target.value);
  const handleStateSelected = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="container">
      <div className="header" align="center">
        <br />
        <h1 className="h2">Mantenimiento de Usuarios</h1>
      </div>
      <div className="header">
        <br />
        <div className="d-flex flex-row justify-content-between my-3 me-3">
          <form className="container">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="busqueda"
                placeholder="Buscar Usuario"
              />
            </div>
          </form>
          {/* <button className="btn btn-md btn-success">Nuevo Usuario</button> */}
        </div>
      </div>
      <div className="container">
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col">Acción</th>
              <th scope="col">Nombre Usuario</th>
              <th scope="col">Rol</th>
              <th scope="col">Cambiar Contraseña</th>
              <th scope="col">Estado</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <button
                  className="btn btn-sm btn-primary btn-edit"
                  onClick={open}
                >
                  <i className="bi bi-pencil"></i>
                </button>
                <i className="bi bi-trash" title="Borrar"></i>
              </td>
              <td>Nombre Uno</td>
              <td>Admin</td>
              <td>
                <i className="bi bi-key" title="Cambiar Contraseña"></i>
              </td>
              <td>Activo</td>
            </tr>

            <tr>
              <td>
                <button
                  className="btn btn-sm btn-primary btn-edit"
                  onClick={open}
                >
                  <i className="bi bi-pencil"></i>
                </button>
                <i className="bi bi-trash" title="Borrar"></i>
              </td>
              <td>Nombre Dos</td>
              <td>Vendedor</td>
              <td>
                <i className="bi bi-key" title="Cambiar Contraseña"></i>
              </td>
              <td>Activo</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ActualizarUsuarios
        isOpen={isOpen}
        close={close}
        setRolSelected={handleRolSelected}
        setStateSelected={handleStateSelected}
        rolSelected={rol}
        stateSelect={state}
      />
      <div> {`el rol es ${rol} y el estado es ${state}`}</div>
    </div>
  );
}
