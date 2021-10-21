import React from "react";
import { Button, TextField } from "@material-ui/core";
const BodyInsertar = (styles, handleChange, peticionPost, cerrarModal) => (
  <div className={styles.modal}>
    <h3>Agregar Nuevo Producto</h3>
    <TextField
      className={styles.inputMaterial}
      label="Producto"
      name="nombreProducto"
      onChange={handleChange}
    />
    <br />
    <TextField
      className={styles.inputMaterial}
      label="Descripcion"
      name="descripcionProducto"
      onChange={handleChange}
    />
    <br />
    <TextField
      className={styles.inputMaterial}
      label="Valor"
      name="precioProducto"
      onChange={handleChange}
    />
    <br />
    <br />
   
    <div align="right">
      <Button variant="contained" color="primary" onClick={peticionPost}>
        Insertar
      </Button>
      <Button variant="contained" color="secondary" onClick={cerrarModal}>Cancelar</Button>
    </div>
  </div>
);

export default BodyInsertar;
