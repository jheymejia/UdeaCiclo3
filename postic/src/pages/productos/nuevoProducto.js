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

function ProductoNuevo({ isOpen, close }) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div className="d-flex text-center">
          <h2>Producto Nuevo</h2>
        </div>
      </ModalHeader>
      <ModalBody>
        <Form className="form-control-sm">
          <FormGroup>
            <Label htmlFor="nombreProducto">Nombre De Producto</Label>
            <Input type="text" name="nombreProducto" id="nombreProducto" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="descripcion">Descripcion</Label>
            <Input type="text" name="descripcion" id="descripcion" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="valorUnitario">Valor Unitario </Label>
            <Input type="text" name="valorUnitario" id="valorUnitario" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="estadoProducto">Estado</Label>
            <Input type="text" name="estadoProducto" id="estadoProducto" />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button className="btn-danger" onClick={close}>
          <i className="bi bi-x-circle"> Cancelar</i>
        </Button>
        <Button className="btn-success" onClick={close}>
          <i clButtonassName="bi bi-save"> Guardar Cambios</i>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ProductoNuevo;
