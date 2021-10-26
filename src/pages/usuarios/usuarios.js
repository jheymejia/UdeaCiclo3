///hooks
import React, { useState, useEffect } from "react";

///lib
import MaterialTable from "material-table";
import axios from "axios";
import { Modal} from "@material-ui/core";

///util
import tableIcons from "../../util/TableIcons";
import StyleModal from "../../util/StyleModal";


//components
//import BodyInsertar from "./components/BodyInsertar";
import BodyEditar from "./components/BodyEditar";
import AlertModal from "../../util/AlertModal";


const columns = [
  { title: "nombreCompleto", field: "nombreCompleto" },
  { title: "Foto", field: "urlFotoUsuario" },
  { title: "Email", field: "emailUsuario" },
  { title: "Email verificado", field: "emailVerificadoUsuario" },
  { title: "Rol", field: "rolUsuario" },
  { title: "Estado", field: "estadoUsuario" },
];


function usuarios() {
  const baseUrl = "http://localhost:3001/api/postic/user";
  const styles = StyleModal();
  const [data, setData] = useState([]);
  //const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [usuarioSeleccionado, setusuarioSeleccionado] = useState({
    idUser: "",
    nombreCompleto: "",
    urlFotoUsuario: "",
    rolUsuario: "",
    estadoUsuario: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setusuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(baseUrl + "/list");
      setData(response.data);
    } catch (error) {
      //AlertModal.mostrarMensajeFallido("Operación fallida", error);
    }
  };

  const updateUser= async () => {

    try {
      await axios.put(
        baseUrl + "/update/" + usuarioSeleccionado.idUser,
        usuarioSeleccionado
      );
      var dataNueva = data;
      dataNueva.map((usuario) => {
        if (usuario.idUser === usuarioSeleccionado.idUser) {
          usuario.nombreCompleto = usuarioSeleccionado.nombreCompleto;
          usuario.urlFotoUsuario =usuarioSeleccionado.urlFotoUsuario;
          usuario.rolUsuario = usuarioSeleccionado.rolUsuario;
          usuario.estadoUsuario = usuarioSeleccionado.estadoUsuario;
        }
        return usuario;
      });

      setData(dataNueva);
      /*AlertModal.mostrarMensajeExitoso(
        "Operación Exitosa",
        "Usuario actualizado exitosamente."
      );*/
      abrirCerrarModalEditar();
    } catch (error) {
      /*AlertModal.mostrarMensajeFallido("Operación fallida", error.error);*/
    }
  };

  const deleteUser = async (userData) => {
    try {
      await axios.delete(baseUrl + "/" + userData._id);
      setData(data.filter((user) => user._id !== userData._id));
      AlertModal.mostrarMensajeExitoso(
        "Proceso exitoso.",
        "El usuario se eliminó."
      );
    } catch (error) {
      AlertModal.mostrarMensajeFallido("Proceso fallido.", error);
    }
  };
  const seleccionarusuario = (user) => {
    setusuarioSeleccionado(user);
    abrirCerrarModalEditar();
  };


  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="Usuarios p-5">
      <br />
      <br />
      <br />
      <MaterialTable
            icons={{
              ...tableIcons        
            }}
        columns={columns}
        data={data}
        title="Usuarios"
        actions={[
          {
            icon:tableIcons.Edit,
            tooltip: "Editar",
            onClick: (event, rowData) => seleccionarusuario(rowData),
          },
          
          {
            icon:tableIcons.Delete,
            tooltip: "Eliminar producto",
            onClick: (event, rowData) => deleteUser(rowData),
          },
          
        ]}
        options={{
          actionsColumnIndex: -1,
          filtering: true
        }}
        localization={{
          header: {
            actions: "Acciones",
          },
        }}
      />

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {BodyEditar(
          styles,
          handleChange,
          updateUser,
          abrirCerrarModalEditar,
          usuarioSeleccionado
        )}
      </Modal>
    </div>
  );
}
export default usuarios;