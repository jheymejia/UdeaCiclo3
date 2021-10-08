import React from "react";

import data from "./data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick-theme.css";
import "../compras/compras.css";
import "jquery/dist/jquery.min.js";

//Datatable Modules

import $ from "jquery";

class Compras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
    };
  }
  render() {
    return (
      <div className="Compras">
        <div className="row">
          <div className="wrapper col-6">
            <div className="product-list carousel-bazaar">
              {data.map((person) => {
                return (
                  <article className="box box-product">
                    <div className="box-shadow">
                      <div className="box-shadow-inner">
                        <h1 className="box-heading">
                          <a title="">80 vendidos </a>
                        </h1>
                        <div className="_holder">
                          <div className="box-image">
                            <a className="_content" title="">
                              <img
                                id="imagen"
                                className="image-main-variant"
                                alt=""
                                title=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="box-caption text-center">
                          <div
                            id="variants-gallery"
                            className="variants-gallery-carousel"
                          >
                            <div className="box box-variant-image">
                              <div className="_content">
                                <a rel="gallery">
                                  <img
                                    src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png"
                                    alt=""
                                    title=""
                                  />
                                </a>
                              </div>
                            </div>
                            <div className="box box-variant-image">
                              <div className="_content">
                                <a rel="gallery">
                                  <img
                                    src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png"
                                    alt=""
                                    title=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>

                          <form
                            action="#"
                            method="post"
                            className="add-to-cart box-form"
                          >
                            <a id="agregar" className="btn btn-danger">
                              Agregar
                            </a>
                          </form>
                        </div>
                      </div>
                    </div>
                    <h1 className="box-heading">
                      <p id="titulo"></p>
                    </h1>
                    <div className="_holder">
                      <div className="box-image">
                        <a className="_content" title="articulo de baño">
                          <img
                            id="imagen2"
                            className="image-main-variant"
                            alt=""
                            title=""
                          />
                        </a>
                      </div>
                    </div>
                    <div className="box-caption text-center">
                      <span className="availability in-stock">Disponible</span>

                      <div className="price price-discount">
                        <span id="precio"></span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
          <div className="wrapper col-5">
            <ul
              id="carrito"
              className="list-group"
              style={{ overflowY: "scroll", height: "300px" }}
            ></ul>
            <hr></hr>

            <p className="text-right">
              Total: <span id="total"></span>
            </p>
            <p className="text-right">
              Cantidad Total: <span id="cantidadtotal"></span>
            </p>
            <button id="boton-vaciar" className="btn btn-danger">
              Vaciar
            </button>
            <hr></hr>
            <table>
              <tr>
                <th width="30%">Nombre del cliente</th>
                <td width="2%">:</td>
                <td>125</td>
              </tr>
              <tr>
                <th width="30%">Saldo</th>
                <td width="2%">:</td>
                <td>2020</td>
              </tr>
              <tr>
                <th width="30%">Recargar Saldo</th>
                <td width="2%">:</td>
                <td>
                  <a className="btn btn-primary">Recargar</a>
                </td>
              </tr>
              <tr>
                <th width="30%">Proceso</th>
                <td width="2%">:</td>
                <td>
                  <a className="btn btn-success">Realizar Compra</a>
                </td>
              </tr>
            </table>
            <hr></hr>
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    $(document).ready(function () {
      if ($(".carousel-bazaar").hasClass("is-on") === false) {
        $(".carousel-bazaar").slick({
          lazyLoad: "ondemand",
          slidesToShow:
            data.length % 2 === 0 && data.length > 1
              ? data.length / 2
              : Math.trunc(data.length / 3),
          slidesToScroll: 2,
          dots: true,
          prevArrow: '<i className="glyphicon glyphicon-chevron-left"><</i>',
          nextArrow: '<i className="glyphicon glyphicon-chevron-right">></i>',
        });
        $(".carousel-bazaar").addClass("is-on");
      }
      if ($(".variants-gallery-carousel").hasClass("is-on") === false) {
        $(".variants-gallery-carousel").slick({
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: false,
          prevArrow: '<i className="glyphicon glyphicon-chevron-left"><</i>',
          nextArrow: '<i className="glyphicon glyphicon-chevron-right">></i>',
        });
        $(".variants-gallery-carousel").addClass("is-on");
      }
      $(".box.box-product").hover(
        function () {
          var $variantBox = $(this).find(".box-shadow");
          if ($variantBox.length) {
            $variantBox.show();
            $variantBox
              .find(".variants-gallery-carousel")
              .get(0)
              .slick.setPosition();
          }
        },
        function () {
          var $variantBox = $(this).find(".box-shadow");
          if ($variantBox.length) {
            $variantBox.hide();
          }
        }
      );
    });

    // Variables
    let baseDeDatos = data;

    let carrito = [];
    let total = 0;
    //const DOMitems = document.querySelector('#items');

    const DOMcarrito = document.querySelector("#carrito");
    const DOMtotal = document.querySelector("#total");
    const DOMbotonVaciar = document.querySelector("#boton-vaciar");

    // Funciones

    /**
     * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
     */
    function renderizarProductos() {
      baseDeDatos.forEach((info, index) => {
        // Estructura
        //const miNodo = document.createElement('div');
        //miNodo.classList.add('card', 'col-sm-4');
        // Body
        const titulo = document.querySelectorAll("#titulo")[index];
        titulo.textContent = info.nombre;
        // Titulo

        const imagen = document.querySelectorAll("#imagen")[index];
        imagen.classList.add("img-fluid");
        imagen.setAttribute("src", info.imagen);
        const imagen2 = document.querySelectorAll("#imagen2")[index];
        imagen2.classList.add("img-fluid");
        imagen2.setAttribute("src", info.imagen);

        // Imagen
        const precio = document.querySelectorAll("#precio")[index];
        precio.textContent = info.precio + "$";

        // Boton
        const agregar = document.querySelectorAll("#agregar")[index];
        agregar.setAttribute("marcador", info.id);
        agregar.addEventListener("click", anyadirProductoAlCarrito);
      });
    }

    /**
     * Evento para añadir un producto al carrito de la compra
     */
    function anyadirProductoAlCarrito(evento) {
      // Anyadimos el Nodo a nuestro carrito
      carrito.push(evento.target.getAttribute("marcador"));
      // Calculo el total
      calcularTotal();
      // Actualizamos el carrito
      renderizarCarrito();
      contar();
    }

    /**
     * Dibuja todos los productos guardados en el carrito
     */

    function renderizarCarrito() {
      // Vaciamos todo el html
      DOMcarrito.textContent = "";
      // Quitamos los duplicados
      const carritoSinDuplicados = [...new Set(carrito)];
      // Generamos los Nodos a partir de carrito
      carritoSinDuplicados.forEach((item) => {
        // Obtenemos el item que necesitamos de la variable base de datos
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
          // ¿Coincide las id? Solo puede existir un caso
          return itemBaseDatos.id === Number(item);
        });
        // Cuenta el número de veces que se repite el producto
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
          // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
          return itemId === item ? (total += 1) : total;
        }, 0);

        // Creamos el nodo del item del carrito
        const miNodo = document.createElement("li");
        miNodo.classList.add("list-group-item", "text-right", "mx-2");
        miNodo.textContent = `${miItem[0].nombre} - ${miItem[0].precio}$`;
        const miNodo2 = document.createElement("p");
        miNodo2.textContent = numeroUnidadesItem;

        // Boton de borrar
        const miBoton = document.createElement("button");
        miBoton.classList.add("btn", "btn-danger");
        miBoton.textContent = "X";
        miBoton.style.marginLeft = "1rem";
        miBoton.style.float = "right";
        miBoton.dataset.item = item;
        miBoton.addEventListener("click", borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miNodo2);
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
      });
    }

    /**
     * Evento para borrar un elemento del carrito
     */
    function borrarItemCarrito(evento) {
      // Obtenemos el producto ID que hay en el boton pulsado
      const id = evento.target.dataset.item;
      // Borramos todos los productos
      carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
      });
      // volvemos a renderizar
      renderizarCarrito();
      // Calculamos de nuevo el precio
      calcularTotal();
      contar();
    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
      // Limpiamos precio anterior
      total = 0;
      // Recorremos el array del carrito
      carrito.forEach((item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === Number(item);
        });
        total = total + miItem[0].precio;
      });
      // Renderizamos el precio en el HTML
      DOMtotal.textContent = total.toFixed(2);
    }

    /**
     * Varia el carrito y vuelve a dibujarlo
     */
    function vaciarCarrito() {
      // Limpiamos los productos guardados
      carrito = [];
      // Renderizamos los cambios
      renderizarCarrito();
      calcularTotal();
      document.querySelector("#cantidadtotal").textContent = "0";
    }

    // Eventos
    DOMbotonVaciar.addEventListener("click", vaciarCarrito);

    // Inicio
    renderizarProductos();
    function contar() {
      var matches = document.querySelectorAll(".list-group-item > p");
      let acum = 0;
      for (let i = 0; i < matches.length; i++) {
        acum += Number(matches[i].textContent);
        document.querySelector("#cantidadtotal").textContent = acum;
      }
      if (0 === matches.length) {
        document.querySelector("#cantidadtotal").textContent = 0;
      }
    }
  }
}

export default Compras;
