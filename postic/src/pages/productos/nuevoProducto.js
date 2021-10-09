import React from "react";
import {
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";


function ProductoNuevo({
  isOpen,
  close
  
  
}) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div className="d-flex text-center">
          <h2>Producto Nuevo</h2>
        </div>
      </ModalHeader>
      <ModalBody>
        <Form className="offset-2 col-8">
        <h1>Contenido Nuevo Producto</h1> 
         <h1>Contenido Nuevo Producto</h1>
         <h1>Contenido Nuevo Producto</h1>
         <h1>Contenido Nuevo Producto</h1>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button className="btn-danger" onClick={close}>
          <i className="bi bi-x-circle"> Cancelar</i>
        </Button>
        <Button className="btn-success" onClick={close}>
          <i className="bi bi-save"> Guardar Cambios</i>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ProductoNuevo;
