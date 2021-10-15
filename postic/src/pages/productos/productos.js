
///hooks
import React, { useState, useEffect } from "react";

///lib
import MaterialTable from "material-table";
import axios from 'axios';
import {Modal, TextField, Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

///css
import "bootstrap/dist/css/bootstrap.css";
import "../ventas/ventas.css";
import "datatables.net-dt/css/jquery.dataTables.min.css";

//component http://localhost:3001/api/postic/product/list
/*
const [product,SetProduct] = useState(initialProduct);
 in body component 
   const open = () => setisOpen(true);
  const close = () => setisOpen(false);

  table id =example

return 
      <div className="Productos p-5">
     
      <div className="d-flex flex-row justify-content-end">
        <button className="btn btn-lg btn-success" onClick={open}>
          Nuevo producto
        </button>
      </div>
   
      <ProductoNuevo isOpen={isOpen} close={close} />

    </div>
    import ProductoNuevo from "./nuevoProducto";
*/ 

const columns= [
  { title: 'Nombre del Producto', field: 'nombreProducto' },
  { title: 'Descripcion', field: 'descripcionProducto' },
  { title: 'Valor unitario)', field: 'precioProducto', type: 'numeric' },
  { title: 'Estado del producto', field: 'state'}
];
const baseUrl="http://localhost:3001/api/postic/product";


const useStyles = makeStyles((theme) => ({
  modal: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  iconos:{
    cursor: 'pointer'
  }, 
  inputMaterial:{
    width: '100%'
  }
}));


function Productos() {
  const styles= useStyles();
  const [data, setData]= useState([]);
  const [modalInsertar, setModalInsertar]= useState(false);
  const [modalEditar, setModalEditar]= useState(false);
  const [modalEliminar, setModalEliminar]= useState(false);
  const [productoSeleccionado, setproductoSeleccionado]=useState({
    _id: "",
    nombreProducto: "",
    descripcionProducto: "",
    precioProducto: "",
    state: ""
  })
  const handleChange=e=>{
    const {name, value}=e.target;
    setproductoSeleccionado(prevState=>({
      ...prevState,
      [name]: value
    }));
  }

  const peticionGet=async()=>{
    await axios.get(baseUrl+"/list")
    .then(response=>{
     setData(response.data);
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPost=async()=>{
    await axios.post(baseUrl+"/new", productoSeleccionado)
    .then(response=>{
      setData(data.concat(response.data));
      abrirCerrarModalInsertar();
    }).catch(error=>{
      console.log(error);
    })
  }

  const peticionPut=async()=>{
   
    await axios.put(baseUrl+"/update/"+productoSeleccionado._id, productoSeleccionado)
    .then(response=>{
      var dataNueva= data;
      
      dataNueva.map(producto=>{
        if(producto._id===productoSeleccionado._id){
          producto.nombreProducto=productoSeleccionado.nombreProducto;
          producto.descripcionProducto=productoSeleccionado.descripcionProducto;
          producto.precioProducto=productoSeleccionado.precioProducto;
          producto.state=productoSeleccionado.state;
        }
      });
      
      setData(dataNueva);
      abrirCerrarModalEditar();
    }).catch(error=>{
      console.log(error);
    })
  }

  /*const peticionDelete=async()=>{
    await axios.delete(baseUrl+"/"+productoSeleccionado.id)
    .then(response=>{
      setData(data.filter(producto=>producto.id!==productoSeleccionado.id));
      abrirCerrarModalEliminar();
    }).catch(error=>{
      console.log(error);
    })
  }*/

  const seleccionarproducto=(producto, caso)=>{
    setproductoSeleccionado(producto);
    (caso==="Editar")?abrirCerrarModalEditar()
    :
    abrirCerrarModalEliminar()
  }

  const abrirCerrarModalInsertar=()=>{
    setModalInsertar(!modalInsertar);
  }

  
  const abrirCerrarModalEditar=()=>{
    setModalEditar(!modalEditar);
  }

  const abrirCerrarModalEliminar=()=>{
    setModalEliminar(!modalEliminar);
  }

  useEffect(()=>{
    peticionGet();
  }, [])

  const bodyInsertar=(
    <div className={styles.modal}>
      <h3>Agregar Nuevo Producto</h3>
      <TextField className={styles.inputMaterial} label="Producto" name="nombreProducto" onChange={handleChange}/>
      <br />
      <TextField className={styles.inputMaterial} label="Descripcion" name="descripcionProducto" onChange={handleChange}/>          
<br />
<TextField className={styles.inputMaterial} label="Valor" name="precioProducto" onChange={handleChange}/>
      <br />
<TextField className={styles.inputMaterial} label="Estado" name="state" onChange={handleChange}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPost()}>Insertar</Button>
        <Button onClick={()=>abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  )

  const bodyEditar=(
    <div className={styles.modal}>
      <h3>Editar Producto</h3>
      <TextField className={styles.inputMaterial} label="Producto" name="nombreProducto" onChange={handleChange} value={productoSeleccionado&&productoSeleccionado.producto}/>
      <br />
      <TextField className={styles.inputMaterial} label="Descripcion" name="descripcionProducto" onChange={handleChange} value={productoSeleccionado&&productoSeleccionado.descripcion}/>          
<br />
<TextField className={styles.inputMaterial} label="Valor" name="precioProducto" onChange={handleChange} value={productoSeleccionado&&productoSeleccionado.valor}/>
      <br />
<TextField className={styles.inputMaterial} label="Estado" name="state" onChange={handleChange} value={productoSeleccionado&&productoSeleccionado.estado}/>
      <br /><br />
      <div align="right">
        <Button color="primary" onClick={()=>peticionPut()}>Editar</Button>
        <Button onClick={()=>abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  )

  /*const bodyEliminar=(
    <div className={styles.modal}>
      <p>Estás seguro que deseas eliminar el producto <b>{productoSeleccionado && productoSeleccionado.producto}</b>? </p>
      <div align="right">
        <Button color="secondary" onClick={()=>peticionDelete()}>Sí</Button>
        <Button onClick={()=>abrirCerrarModalEliminar()}>No</Button>

      </div>

    </div>
  )
*/





  return (
    <div className="Productos p-5">
      <br />
      <Button onClick={()=>abrirCerrarModalInsertar()}>Insertar Producto</Button>
      <br /><br />
     <MaterialTable
          columns={columns}
          data={data}
          title="Productos"  
          actions={[
            {
              icon: 'edit',
              tooltip: 'Editar producto',
              onClick: (event, rowData) => seleccionarproducto(rowData, "Editar")
            }
          ]}
          options={{
            actionsColumnIndex: -1,
          }}
          localization={{
            header:{
              actions: "Acciones"
            }
          }}
        />


        <Modal
        open={modalInsertar}
        onClose={abrirCerrarModalInsertar}>
          {bodyInsertar}
        </Modal>

        
        <Modal
        open={modalEditar}
        onClose={abrirCerrarModalEditar}>
          {bodyEditar}
        </Modal>

    </div>
  );

}
export default Productos;
/*

*/