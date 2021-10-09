import React, { useState } from "react";

//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "../ventas/ventas.css";

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import $ from "jquery";
import ProductoNuevo from "./nuevoProducto";
class Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  render() {
    let cont = 0;
    const open = () => this.setState({ isOpen: true });
    const close = () => this.setState({ isOpen: false });
    return (
      <div className="Productos" style={{ position: "relative" }}>
        <ProductoNuevo isOpen={this.state.isOpen} close={close} />
        <button className="btn btn-sm btn-success" onClick={open}>
          Nuevo producto
        </button>
        <table
          id="example"
          className="display nowrap"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th style={{ display: "none" }}>id venta</th>
              <th>Nombre del Producto</th>
              <th>Descripcion</th>
              <th>Valor Unitario</th>
              <th>Estado de prducto</th>
              <th>Operacion</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ display: "none" }}>{(cont = cont + 1)}</td>
              <td>leche</td>
              <td>leche descremada</td>
              <td>2769</td>
              <td>disponible</td>
              <td>
                <button
                  className="btn btn-success edit"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ display: "none" }}>{(cont = cont + 1)}</td>
              <td>leche</td>
              <td>leche descremada</td>
              <td>2769</td>
              <td>disponible</td>
              <td>
                <button
                  className="btn btn-success edit"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ display: "none" }}>{(cont = cont + 1)}</td>
              <td>leche</td>
              <td>leche descremada</td>
              <td>2769</td>
              <td>disponible</td>
              <td>
                <button
                  className="btn btn-success edit"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ display: "none" }}>{(cont = cont + 1)}</td>
              <td>leche</td>
              <td>leche descremada</td>
              <td>2769</td>
              <td>disponible</td>
              <td>
                <button
                  className="btn btn-success edit"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <td style={{ display: "none" }}>{(cont = cont + 1)}</td>
              <td>leche</td>
              <td>leche descremada</td>
              <td>2769</td>
              <td>disponible</td>
              <td>
                <button
                  className="btn btn-success edit"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        <div id="myModal" className="caja">
          <div className="container">
            <button style={{ marginLeft: "680px" }} id="ocultar">
              cerrar
            </button>
            <form action="/action_page.php">
              <div className="row">
                <div className="col-25">
                  <label htmlFor="fname">First Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="nombre_producto"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">Last Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="descripcion"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">Last Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="valor_unitario"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">Last Name</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="estado"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>

              <div className="row">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    //var id_producto;

    $(document).ready(function () {
      $(window).resize(function () {
        // aquí le pasamos la clase o id de nuestro div a centrar (en este caso "caja")
        $(".caja").css({
          position: "absolute",
          left: ($(window).width() - $(".caja").outerWidth()) / 2,
          top: ($(window).height() - $(".caja").outerHeight()) / 2,
        });
      });

      // Ejecutamos la función
      $(window).resize();

      var trs = $("#example tbody tr");
      $.each(trs, function (i, tr) {
        if (!$(tr).attr("id")) {
          $(tr).attr("id", i + 1);
        }
      });
      ///////////
      $(".edit").on("click", function () {
        $("#myModal").css("display", "block");
        var currentRow = $(this).closest("tr");
        //id_producto = currentRow.find("td:eq(0)").html();
        $("#nombre_producto").val(currentRow.find("td:eq(1)").html());
        $("#descripcion").val(currentRow.find("td:eq(2)").html());
        $("#valor_unitario").val(currentRow.find("td:eq(3)").html());
        $("#estado").val(currentRow.find("td:eq(4)").html());

        //data = col1 + "_" + col2 + "_" + col3 + "_" + col4 + "_" + col5 + "_" + col6 + "_" + col7 + "_" + col8 + "_" + col9 + "_" + col10;

        $("#ocultar").on("click", function () {
          $("#myModal").hide();
        });
      });
      $("#example").DataTable({
        scrollX: true,
      });
    });
    //var table = document.getElementById("#example");

    //var totalRowCount = table.rows.length; // 5
    //var tbodyRowCount = table.tBodies[0].rows.length;//3
  }
}
export default Productos;
