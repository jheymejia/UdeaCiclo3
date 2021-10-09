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
import "./usuarios";

function ActualizarUsuarios({
  isOpen,
  close,
  rolSelected,
  stateSelect,
  setRolSelected,
  setStateSelected,
}) {
  return (
    <Modal isOpen={isOpen}>
      <ModalHeader>
        <div className="d-flex text-center">
          <h2>Actualizar Usuario</h2>
        </div>
      </ModalHeader>
      <ModalBody>
        <Form className="offset-2 col-8">
          <FormGroup>
            <Label htmlFor="selectRol">Rol</Label>
            <Input
              type="select"
              className="custom-select"
              name="selectRol"
              id="selectRol"
              value={rolSelected}
              onChange={setRolSelected}
            >
              <option value="administrador">Admin</option>
              <option value="vendedor">Vendedor</option>
              <option value="comprador">Comprador</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="selectState">Estado</Label>
            <Input
              type="select"
              className="custom-select"
              name="selectState"
              id="selectState"
              value={stateSelect}
              onChange={setStateSelected}
            >
              <option value="activo">Activo</option>
              <option value="inactivo">Inactivo</option>
            </Input>
          </FormGroup>
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

export default ActualizarUsuarios;
