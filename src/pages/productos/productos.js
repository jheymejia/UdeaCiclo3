///hooks
import React, { useState, useEffect } from "react";

///lib
import MaterialTable from "material-table";
import axios from "axios";
import { Modal, Button } from "@material-ui/core";

///util
import tableIcons from "../../util/TableIcons";
import StyleModal from "../../util/StyleModal";


//components
import BodyInsertar from "./components/BodyInsertar";
import BodyEditar from "./components/BodyEditar";
import AlertModal from "../../util/AlertModal";


const columns = [
  { title: "Nombre del Producto", field: "nombreProducto" },
  { title: "Descripcion", field: "descripcionProducto" },
  { title: "Valor unitario)", field: "precioProducto", type: "numeric" },
  { title: "Estado del producto", field: "estadoProducto" },
];

function Productos() {
  const baseUrl = "http://localhost:3001/api/postic/product";
  const styles = StyleModal();
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
      <Button variant="contained" color="primary" onClick={() => abrirCerrarModalInsertar()}>
        Insertar Producto
      </Button>
      <br />
      <br />
      <MaterialTable
            icons={{
              ...tableIcons        
            }}
        columns={columns}
        data={data}
        title="Productos"
        actions={[
          {
            icon:tableIcons.Edit,
            tooltip: "Editar",
            onClick: (event, rowData) => seleccionarproducto(rowData),
          },
          {
            icon:tableIcons.Delete,
            tooltip: "Eliminar producto",
            onClick: (event, rowData) => deleteProduct(rowData),
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
