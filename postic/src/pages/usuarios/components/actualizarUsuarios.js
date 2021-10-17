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
import "../usuarios";

function ActualizarUsuarios({
  isOpen,
  close,
  handleChange,
  updateUser,
  user
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
            <Label htmlFor="rolUsuario">Rol</Label>
            <Input
              type="select"
              className="custom-select"
              name="rolUsuario"
              id="selectRol"
              value={user.rolUsuario}
              onChange={handleChange}
            >
              <option value="Administrador">Admininstrador</option>
              <option value="Vendedor">Vendedor</option>
              <option value="Cliente">Cliente</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="estadoUsuario">Estado</Label>
            <Input
              type="select"
              className="custom-select"
              name="estadoUsuario"
              id="selectState"
              value={user.estadoUsuario}
               onChange={handleChange}
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </Input>
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button className="btn-danger" onClick={close}>
          <i className="bi bi-x-circle"> Cancelar</i>
        </Button>
        <Button className="btn-success" onClick={updateUser}>
          <i className="bi bi-save"> Guardar Cambios</i>
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ActualizarUsuarios;
