import React, { useState, useEffect } from "react";
import ActualizarUsuarios from "./components/actualizarUsuarios";
import "./usuarios.css";
import AlertModal from "../../util/AlertModal";
import axios from "axios";

export default function Usuarios() {
  const baseUrl = "http://localhost:3001/api/postic/user";
  const [isOpen, setIsOpen] = useState(false);
  const [newValue, setNewValue] = useState(0)
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    _id: "",
    nombresUsuario: "",
    apellidosUsuario: "",
    urlFotoUsuario: "",
    emailUsuario: "",
    rolUsuario: "",
    estadoUsuario: "",
  });

  const closeUpdateUser = () => setIsOpen(false);
  const openUpdateUser = () => setIsOpen(true);    

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchUsers = async () => {
    try {
      const result = await axios.get(`${baseUrl}/list`);
      setData(result.data);
    } catch (error) {
      AlertModal.mostrarMensajeFallido("Error", error);
    }
  };
  const updateUser = async() => {
    console.log("empezando a actualizar");
      try {
        await axios.put(`${baseUrl}/update/${user._id}`, user);
        console.log("se actualizo en bd")
      } catch (error) {
        AlertModal.mostrarMensajeFallido("Preceso fallido.", error);
      }
    const usersData = data;
    console.log("actualizando vista")
    usersData.map((user_) => {
      if (user_._id === user._id) {
        user_.rolUsuario = user.rolUsuario;
        user_.estadoUsuario = user.estadoUsuario;
      }
      return user_;
    });
    setData(usersData);
    AlertModal.mostrarMensajeExitoso(
      "Proceso exitoso.",
      "Se actualizo el usuario correctamente."
      );
      setNewValue(newValue+1);
      closeUpdateUser();
  };

  const selectUserEdit = user_=>{
    setUser({_id: user_._id,
    nombresUsuario: user_.nombresUsuario,
    apellidosUsuario: user_.apellidosUsuario,
    urlFotoUsuario: user_.urlFotoUsuario,
    emailUsuario: user_.emailUsuario,
    rolUsuario: user_.rolUsuario,
    estadoUsuario: user_.estadoUsuario});
    openUpdateUser();
  }

  useEffect(() => fetchUsers(), []);

  useEffect( () => fetchUsers(), [newValue]);

  return (
    <div className="container offset-3 col-6">
      <div className="header" align="center">
        <br />
        <h1 className="h2">Mantenimiento de Usuarios</h1>
        <br />
      </div> 
      <div className="container">
        <table className="table table-bordered table-responsive">
          <thead>
            <tr>
              <th scope="col">Correo Electronico</th>
              <th scope="col">Nombre Usuario</th>
              <th scope="col">Rol</th>
              <th scope="col">Estado</th>
              <th scope="col">Acción</th>
            </tr>
          </thead>

          <tbody>
            {data.map((dataUser) => (
              <tr key={dataUser._id}>
                <td>{dataUser.emailUsuario}</td>
                <td>{dataUser.nombresUsuario}</td>
                <td>{dataUser.rolUsuario}</td>
                <td>{dataUser.estadoUsuario}</td>
                <td>
                  <div className="d-flex flex-row justify-content-around">
                  <button
                    className="btn btn-sm btn-primary btn-edit"
                    onClick={() => selectUserEdit(dataUser)}
                  >
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-sm btn-danger btn-remove">
                    <i className="bi bi-trash" title="Borrar"></i>
                  </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ActualizarUsuarios
        isOpen={isOpen}
        close={closeUpdateUser}
        updateUser={updateUser}
        user={user}
        handleChange={handleChange}
      />
    </div>
  );
}
