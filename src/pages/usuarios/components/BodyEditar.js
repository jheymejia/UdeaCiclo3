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
      <h3>Editar Usuario</h3>
      <TextField
        className={styles.inputMaterial}
        label="Nombre Completo"
        name="nombreCompleto"
        onChange={handleChange}
        value={usuarioSeleccionado.nombreCompleto}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="url de la foto"
        name="urlFotoUsuario"
        onChange={handleChange}
        value={usuarioSeleccionado.urlFotoUsuario}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="rol del usuario"
        name="rolUsuario"
        onChange={handleChange}
        value={usuarioSeleccionado.rolUsuario}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="estado del usuario"
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
