import React from "react";
import { Button, TextField } from "@material-ui/core";

const BodyEditar = (
  styles,
  handleChange,
  peticionPut,
  cerrarModal,
  usuarioSeleccionado
) => { 
  return (
    <div className={styles.modal}>
      <h3>Editar Producto</h3>
      <TextField
        className={styles.inputMaterial}
        label="Nombres del usuario"
        name="nombresUsuario"
        onChange={handleChange}
        value={usuarioSeleccionado.nombresUsuario}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Apellidos del usuario"
        name="apellidosUsuario"
        onChange={handleChange}
        value={usuarioSeleccionado.apellidosUsuario}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Foto"
        name="urlFotoUsuario"
        onChange={handleChange}
        value={usuarioSeleccionado.urlFotoUsuario}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Email"
        name="emailUsuario"
        onChange={handleChange}
        value={usuarioSeleccionado.emailUsuario}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Rol"
        name="rolUsuario"
        onChange={handleChange}
        value={usuarioSeleccionado.rolUsuario}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Estado"
        name="estadoUsuario"
        onChange={handleChange}
        value={usuarioSeleccionado.estadoUsuario}
      />
      <br />
      <br />
      <div align="right">
        <Button variant="contained" color="primary" onClick={peticionPut}>
          Editar
        </Button>
        <Button variant="contained" color="secondary" onClick={cerrarModal}>Cancelar</Button>
      </div>
    </div>
  );
};

export default BodyEditar;
