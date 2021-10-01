import React  from 'react';

export default function Usuarios() {
    return ( 
        <div class="container">

        <div class="header" align="center">
          <br/>
          <h1 class="h2">Mantenimiento de Usuarios</h1>
          </div>
          <div class="header">
            <br />
          <form class="row">
              <div class="row">
              <input type="text" class="form-control" id="busqueda" placeholder="Buscar Usuario" value="" />
              </div>
              <div class="col">
                <br/>
              <button class="btn-success">Nuevo Usuario</button>
              </div>
  
          </form>
          <br />
        </div>
  
        <div class="body">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Acción</th>
                <th scope="col">Nombre Usuario</th>
                <th scope="col">Rol</th>
                <th scope="col">Cambiar Contraseña</th>
                <th scope="col">Estado</th>
              </tr>
            </thead>
  
            <tr>
              <td>
                <i class="bi bi-pencil" title="Editar"></i>
                <i class="bi bi-trash" title="Borrar"></i>
              </td>
              <td>Nombre Uno</td>
              <td>Admin</td>
              <td>
              <i class="bi bi-key" title="Cambiar Contraseña"></i>
              </td>
              <td>Activo</td>
            </tr>
  
  
            <tr>
              <td>
                <i class="bi bi-pencil" title="Editar"></i>
                <i class="bi bi-trash" title="Borrar"></i>
              </td>
              <td>Nombre Dos</td>
              <td>Usuario</td>
              <td>
              <i class="bi bi-key" title="Cambiar Contraseña"></i>
              </td>
              <td>Activo</td>
            </tr>
  
          </table>
        </div>
      </div>
    );
  }