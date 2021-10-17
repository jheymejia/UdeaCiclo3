import React from "react";
import { Button, TextField } from "@material-ui/core";

const BodyEditar = (
  styles,
  handleChange,
  peticionPut,
  cerrarModal,
  productoSeleccionado
) => { 
  return (
    <div className={styles.modal}>
      <h3>Editar Producto</h3>
      <TextField
        className={styles.inputMaterial}
        label="Producto"
        name="nombreProducto"
        onChange={handleChange}
        value={productoSeleccionado.nombreProducto}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Descripcion"
        name="descripcionProducto"
        onChange={handleChange}
        value={productoSeleccionado.descripcionProducto}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Valor"
        name="precioProducto"
        onChange={handleChange}
        value={productoSeleccionado.precioProducto}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Estado"
        name="estadoProducto"
        onChange={handleChange}
        value={productoSeleccionado.estadoProducto}
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
