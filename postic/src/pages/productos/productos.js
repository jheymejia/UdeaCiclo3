///hooks
import React, { useState, useEffect } from "react";

///lib
import MaterialTable from "material-table";
import axios from "axios";
import { Modal, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//components
import BodyInsertar from "./components/BodyInsertar";
import BodyEditar from "./components/BodyEditar";
import AlertModal from "../../util/AlertModal";
///css
import "bootstrap/dist/css/bootstrap.css";
import "../ventas/ventas.css";
import "datatables.net-dt/css/jquery.dataTables.min.css";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

const columns = [
  { title: "Nombre del Producto", field: "nombreProducto" },
  { title: "Descripcion", field: "descripcionProducto" },
  { title: "Valor unitario)", field: "precioProducto", type: "numeric" },
  { title: "Estado del producto", field: "estadoProducto" },
];

function Productos() {
  const baseUrl = "http://localhost:3001/api/postic/product";
  const styles = useStyles();
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [productoSeleccionado, setproductoSeleccionado] = useState({
    _id: "",
    nombreProducto: "",
    descripcionProducto: "",
    precioProducto: "",
    estadoProducto: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setproductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get(baseUrl + "/list");
      setData(response.data);
    } catch (error) {
      AlertModal.mostrarMensajeFallido("Operación fallida", error);
    }
  };

  const newProduct = async () => {
    try {
      const response = await axios.post(baseUrl + "/new", productoSeleccionado);
      productoSeleccionado.estadoProducto = "Disponible";
      setData(data.concat(productoSeleccionado));
      AlertModal.mostrarMensajeExitoso("Operación exitosa", response.data);
      abrirCerrarModalInsertar();
    } catch (error) {
      AlertModal.mostrarMensajeFallido("Operación fallida", error);
    }
  };

  const updateProduct = async () => {
    try {
      await axios.put(
        baseUrl + "/update/" + productoSeleccionado._id,
        productoSeleccionado
      );
      var dataNueva = data;
      dataNueva.map((producto) => {
        if (producto._id === productoSeleccionado._id) {
          producto.nombreProducto = productoSeleccionado.nombreProducto;
          producto.descripcionProducto =
            productoSeleccionado.descripcionProducto;
          producto.precioProducto = productoSeleccionado.precioProducto;
          producto.estadoProducto = productoSeleccionado.estadoProducto;
        }
        return producto;
      });

      setData(dataNueva);
      AlertModal.mostrarMensajeExitoso(
        "Operación Exitosa",
        "Producto actualizado exitosamente."
      );
      abrirCerrarModalEditar();
    } catch (error) {
      AlertModal.mostrarMensajeFallido("Operación fallida", error.error);
    }
  };

  const deleteProduct = async (productData) => {
    try {
      await axios.delete(baseUrl + "/" + productData._id);
      setData(data.filter((producto) => producto._id !== productData._id));
      AlertModal.mostrarMensajeExitoso(
        "Proceso exitoso.",
        "El producto se eliminó."
      );
    } catch (error) {
      AlertModal.mostrarMensajeFallido("Proceso fallido.", error);
    }
  };
  const seleccionarproducto = (producto) => {
    setproductoSeleccionado(producto);
    abrirCerrarModalEditar();
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="Productos p-5">
      <br />
      <Button onClick={() => abrirCerrarModalInsertar()}>
        Insertar Producto
      </Button>
      <br />
      <br />
      <MaterialTable
        columns={columns}
        data={data}
        title="Productos"
        actions={[
          {
            icon: "edit",
            tooltip: "Editar producto",
            onClick: (event, rowData) => seleccionarproducto(rowData),
          },
          {
            icon: "delete",
            tooltip: "Eliminar producto",
            onClick: (event, rowData) => deleteProduct(rowData),
          },
        ]}
        options={{
          actionsColumnIndex: -1,
        }}
        localization={{
          header: {
            actions: "Acciones",
          },
        }}
      />
      <Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>
        {BodyInsertar(
          styles,
          handleChange,
          newProduct,
          abrirCerrarModalInsertar
        )}
      </Modal>

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {BodyEditar(
          styles,
          handleChange,
          updateProduct,
          abrirCerrarModalEditar,
          productoSeleccionado
        )}
      </Modal>
    </div>
  );
}
export default Productos;
/*

*/
