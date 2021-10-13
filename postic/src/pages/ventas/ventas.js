import React from "react";
import AlertModal from "../../util/AlertModal";

//Bootstrap and jQuery libraries

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "../ventas/ventas.css";
import data from "./data";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";

import $ from "jquery";
class Ventas extends React.Component {
  render() {
    return (
      <div className="Ventas p-5" style={{ position: "relative" }}>
        <div className="d-flex flex-row justify-content-end ">
          <button
            className="btn btn-lg btn-success add"
            data-toggle="modal"
            data-target="#myModal"
          >
            Nueva Venta
          </button>
        </div>
        <table
          id="example"
          className="display table-responsive nowrap"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th>Id venta</th>
              <th>Valor total</th>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio de Productos</th>
              <th>Fecha de Venta</th>
              <th>ID cliente</th>
              <th>Nombre Cliente</th>
              <th>Nombre del Vendedor</th>
              <th>Estado de Venta</th>
              <th>Operacion</th>
            </tr>
          </thead>
          <tbody>
            {data.map((v) => {
              return (
                <tr key={v.id_venta}>
                  <td>{v.id_venta}</td>
                  <td>{v.Valor_total}</td>
                  <td>{v.Nombre_Productos}</td>
                  <td>{v.Cantidad_Productos}</td>
                  <td>{v.Precio_Productos}</td>
                  <td>{v.Fecha_Venta}</td>
                  <td>{v.identificacion_cliente}</td>
                  <td>{v.Nombre_Cliente}</td>
                  <td>{v.Nombre_Vendedor}</td>
                  <td>{v.Estado_Venta}</td>
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
              );
            })}
          </tbody>
        </table>

        <div id="myModal" className="caja">
          <div className="container">
            <button style={{ marginLeft: "680px" }} id="ocultar">
              cerrar
            </button>
            <form id="form">
              <div className="row">
                <div className="col-25">
                  <label htmlFor="fname">Id venta</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="id_venta"
                    name="firstname"
                    placeholder="Your name.."
                    readOnly="readonly"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="fname">valor total</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="valor_total"
                    name="firstname"
                    placeholder="Your name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">nombre del producto</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="nombre_producto"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">cantidad del producto</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="cantidad_producto"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">precio del producto</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="precio_producto"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">fecha de venta</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="fecha_venta"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">numero de identificacion</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="numero_identificacion"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">nombre del cliente</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="nombre_cliente"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">nombre del vendedor</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="nombre_vendedor"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label htmlFor="lname">estado de venta</label>
                </div>
                <div className="col-75">
                  <input
                    type="text"
                    id="estado_venta"
                    name="lastname"
                    placeholder="Your last name.."
                  />
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>

              <div className="row">
                <input type="submit" id="enviar" value="enviar" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    document
      .getElementById("form")
      .addEventListener("submit", validarFormulario);
    function validarFormulario(evento) {
      evento.preventDefault();
      ///validaciones

      AlertModal.mostrarMensajeExitoso("Venta", "Registrada correctamente");
      this.submit();
    }

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
      $(".add").on("click", function () {
        $("#id_venta").val("");
        $("#id_venta").attr("readonly", false);
        $("#valor_total").val("");
        $("#nombre_producto").val("");
        $("#cantidad_producto").val("");
        $("#precio_producto").val("");
        $("#fecha_venta").val("");
        $("#numero_identificacion").val("");
        $("#nombre_cliente").val("");
        $("#nombre_vendedor").val("");
        $("#estado_venta").val("");

        $("#myModal").css("display", "block");
        $("#ocultar").on("click", function () {
          $("#myModal").hide();
        });
      });
      ///////////
      $(".edit").on("click", function () {
        $("#myModal").css("display", "block");
        var currentRow = $(this).closest("tr");
        $("#id_venta").attr("readonly", true);
        $("#id_venta").val(currentRow.find("td:eq(0)").html());
        $("#valor_total").val(currentRow.find("td:eq(1)").html());
        $("#nombre_producto").val(currentRow.find("td:eq(2)").html());
        $("#cantidad_producto").val(currentRow.find("td:eq(3)").html());
        $("#precio_producto").val(currentRow.find("td:eq(4)").html());
        $("#fecha_venta").val(currentRow.find("td:eq(5)").html());
        $("#numero_identificacion").val(currentRow.find("td:eq(6)").html());
        $("#nombre_cliente").val(currentRow.find("td:eq(7)").html());
        $("#nombre_vendedor").val(currentRow.find("td:eq(8)").html());
        $("#estado_venta").val(currentRow.find("td:eq(9)").html());

        $("#ocultar").on("click", function () {
          $("#myModal").hide();
        });
      });
      $("#example").DataTable({
        scrollX: true,
        "dom": '<"top"f>rt<"bottom"ipl><"clear">'
      });
    });

    //var table = document.getElementById("#example");

    //var totalRowCount = table.rows.length; // 5
    //var tbodyRowCount = table.tBodies[0].rows.length;//3
  }
}
export default Ventas;
