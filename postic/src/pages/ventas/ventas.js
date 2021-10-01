
import React from "react";


//Bootstrap and jQuery libraries

import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import '../ventas/ventas.css'



//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

import $ from 'jquery';
class Ventas extends React.Component {


    render() {

        let cont = 0;


        return (

            <div className="Ventas" style={{ position: "relative" }}>

                <table id="example" className="display nowrap" style={{width:"100%"}}  >
                    <thead>
                        <tr>
                            <th style={{ display: "none" }}>id venta</th>
                            <th>Valor total</th>
                            <th>Nombre Productos</th>
                            <th>Cantidad de Productos</th>
                            <th>Precio de Productos</th>
                            <th>Fecha de Venta</th>
                            <th>Numero de identficacion cliente</th>
                            <th>Nombre Completo Cliente</th>
                            <th>Nombre Completo del Vendedor</th>
                            <th>Estado de Venta</th>
                            <th>Operacion</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Michelle</td>
                            <td>House</td>
                            <td>Integration Specialist</td>
                            <td>Sydney</td>
                            <td>37</td>
                            <td>2011/06/02</td>
                            <td>$95,400</td>
                            <td>2769</td>
                            <td>m.house@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Suki</td>
                            <td>Burks</td>
                            <td>Developer</td>
                            <td>London</td>
                            <td>53</td>
                            <td>2009/10/22</td>
                            <td>$114,500</td>
                            <td>6832</td>
                            <td>s.burks@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Prescott</td>
                            <td>Bartlett</td>
                            <td>Technical Author</td>
                            <td>London</td>
                            <td>27</td>
                            <td>2011/05/07</td>
                            <td>$145,000</td>
                            <td>3606</td>
                            <td>p.bartlett@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Gavin</td>
                            <td>Cortez</td>
                            <td>Team Leader</td>
                            <td>San Francisco</td>
                            <td>22</td>
                            <td>2008/10/26</td>
                            <td>$235,500</td>
                            <td>2860</td>
                            <td>g.cortez@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Martena</td>
                            <td>Mccray</td>
                            <td>Post-Sales support</td>
                            <td>Edinburgh</td>
                            <td>46</td>
                            <td>2011/03/09</td>
                            <td>$324,050</td>
                            <td>8240</td>
                            <td>m.mccray@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Unity</td>
                            <td>Butler</td>
                            <td>Marketing Designer</td>
                            <td>San Francisco</td>
                            <td>47</td>
                            <td>2009/12/09</td>
                            <td>$85,675</td>
                            <td>5384</td>
                            <td>u.butler@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Howard</td>
                            <td>Hatfield</td>
                            <td>Office Manager</td>
                            <td>San Francisco</td>
                            <td>51</td>
                            <td>2008/12/16</td>
                            <td>$164,500</td>
                            <td>7031</td>
                            <td>h.hatfield@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Hope</td>
                            <td>Fuentes</td>
                            <td>Secretary</td>
                            <td>San Francisco</td>
                            <td>41</td>
                            <td>2010/02/12</td>
                            <td>$109,850</td>
                            <td>6318</td>
                            <td>h.fuentes@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Vivian</td>
                            <td>Harrell</td>
                            <td>Financial Controller</td>
                            <td>San Francisco</td>
                            <td>62</td>
                            <td>2009/02/14</td>
                            <td>$452,500</td>
                            <td>9422</td>
                            <td>v.harrell@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Timothy</td>
                            <td>Mooney</td>
                            <td>Office Manager</td>
                            <td>London</td>
                            <td>37</td>
                            <td>2008/12/11</td>
                            <td>$136,200</td>
                            <td>7580</td>
                            <td>t.mooney@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Jackson</td>
                            <td>Bradshaw</td>
                            <td>Director</td>
                            <td>New York</td>
                            <td>65</td>
                            <td>2008/09/26</td>
                            <td>$645,750</td>
                            <td>1042</td>
                            <td>j.bradshaw@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Olivia</td>
                            <td>Liang</td>
                            <td>Support Engineer</td>
                            <td>Singapore</td>
                            <td>64</td>
                            <td>2011/02/03</td>
                            <td>$234,500</td>
                            <td>2120</td>
                            <td>o.liang@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Bruno</td>
                            <td>Nash</td>
                            <td>Software Engineer</td>
                            <td>London</td>
                            <td>38</td>
                            <td>2011/05/03</td>
                            <td>$163,500</td>
                            <td>6222</td>
                            <td>b.nash@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Sakura</td>
                            <td>Yamamoto</td>
                            <td>Support Engineer</td>
                            <td>Tokyo</td>
                            <td>37</td>
                            <td>2009/08/19</td>
                            <td>$139,575</td>
                            <td>9383</td>
                            <td>s.yamamoto@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Thor</td>
                            <td>Walton</td>
                            <td>Developer</td>
                            <td>New York</td>
                            <td>61</td>
                            <td>2013/08/11</td>
                            <td>$98,540</td>
                            <td>8327</td>
                            <td>t.walton@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Finn</td>
                            <td>Camacho</td>
                            <td>Support Engineer</td>
                            <td>San Francisco</td>
                            <td>47</td>
                            <td>2009/07/07</td>
                            <td>$87,500</td>
                            <td>2927</td>
                            <td>f.camacho@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Serge</td>
                            <td>Baldwin</td>
                            <td>Data Coordinator</td>
                            <td>Singapore</td>
                            <td>64</td>
                            <td>2012/04/09</td>
                            <td>$138,575</td>
                            <td>8352</td>
                            <td>s.baldwin@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Zenaida</td>
                            <td>Frank</td>
                            <td>Software Engineer</td>
                            <td>New York</td>
                            <td>63</td>
                            <td>2010/01/04</td>
                            <td>$125,250</td>
                            <td>7439</td>
                            <td>z.frank@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Zorita</td>
                            <td>Serrano</td>
                            <td>Software Engineer</td>
                            <td>San Francisco</td>
                            <td>56</td>
                            <td>2012/06/01</td>
                            <td>$115,000</td>
                            <td>4389</td>
                            <td>z.serrano@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Jennifer</td>
                            <td>Acosta</td>
                            <td>Junior Javascript Developer</td>
                            <td>Edinburgh</td>
                            <td>43</td>
                            <td>2013/02/01</td>
                            <td>$75,650</td>
                            <td>3431</td>
                            <td>j.acosta@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Cara</td>
                            <td>Stevens</td>
                            <td>Sales Assistant</td>
                            <td>New York</td>
                            <td>46</td>
                            <td>2011/12/06</td>
                            <td>$145,600</td>
                            <td>3990</td>
                            <td>c.stevens@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Hermione</td>
                            <td>Butler</td>
                            <td>Regional Director</td>
                            <td>London</td>
                            <td>47</td>
                            <td>2011/03/21</td>
                            <td>$356,250</td>
                            <td>1016</td>
                            <td>h.butler@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Lael</td>
                            <td>Greer</td>
                            <td>Systems Administrator</td>
                            <td>London</td>
                            <td>21</td>
                            <td>2009/02/27</td>
                            <td>$103,500</td>
                            <td>6733</td>
                            <td>l.greer@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Jonas</td>
                            <td>Alexander</td>
                            <td>Developer</td>
                            <td>San Francisco</td>
                            <td>30</td>
                            <td>2010/07/14</td>
                            <td>$86,500</td>
                            <td>8196</td>
                            <td>j.alexander@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Shad</td>
                            <td>Decker</td>
                            <td>Regional Director</td>
                            <td>Edinburgh</td>
                            <td>51</td>
                            <td>2008/11/13</td>
                            <td>$183,000</td>
                            <td>6373</td>
                            <td>s.decker@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td>Michael</td>
                            <td>Bruce</td>
                            <td>Javascript Developer</td>
                            <td>Singapore</td>
                            <td>29</td>
                            <td>2011/06/27</td>
                            <td>$183,000</td>
                            <td>5384</td>
                            <td>m.bruce@datatables.net</td>
                            <td>
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ display: "none" }}>{cont = cont + 1}</td>
                            <td >Donna</td>
                            <td>Snider</td>
                            <td>Customer Support</td>
                            <td>New York</td>
                            <td>27</td>
                            <td>2011/01/25</td>
                            <td>$112,000</td>
                            <td>4226</td>
                            <td>d.snider@datatables.net</td>
                            <td >
                                <button class="btn btn-success edit" data-toggle="modal" data-target="#myModal">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div id="myModal" class="caja">
                    
                    <div class="container">
                    <button style={{ marginLeft: "680px" }} id="ocultar">cerrar</button>
                        <form action="/action_page.php">
                            <div class="row">
                                <div class="col-25">
                                    <label for="fname">First Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="valor_total" name="firstname" placeholder="Your name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="nombre_producto" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="cantidad_producto" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="precio_producto" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="fecha_venta" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="numero_identificacion" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="nombre_cliente" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="nombre_vendedor" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-25">
                                    <label for="lname">Last Name</label>
                                </div>
                                <div class="col-75">
                                    <input type="text" id="estado_venta" name="lastname" placeholder="Your last name.." />
                                </div>
                            </div>
                            <br></br>
                            <br></br>
                            <br></br>

                            <div class="row">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>




                </div>


            </div>



        );
    }
    componentDidMount() {

       
        var id_venta;

        $(document).ready(function () {
            $(window).resize(function () {

                // aquí le pasamos la clase o id de nuestro div a centrar (en este caso "caja")
                $('.caja').css({
                    position: 'absolute',
                    left: ($(window).width() - $('.caja').outerWidth()) / 2,
                    top: ($(window).height() - $('.caja').outerHeight()) / 2
                });

            });

            // Ejecutamos la función
            $(window).resize();


            var trs = $("#example tbody tr");
            $.each(trs, function (i, tr) {
                if (!$(tr).attr('id')) {
                    $(tr).attr('id', i + 1);
                }
            });
            ///////////
            $(".edit").on('click', function () {
                $("#myModal").css("display", "block");
                var currentRow = $(this).closest("tr");
                id_venta = currentRow.find("td:eq(0)").html();
                $("#valor_total").val(currentRow.find("td:eq(1)").html());
                $("#nombre_producto" ).val(currentRow.find("td:eq(2)").html());
                $("#cantidad_producto").val(currentRow.find("td:eq(3)").html());
                $("#precio_producto").val(currentRow.find("td:eq(4)").html());
                $("#fecha_venta" ).val(currentRow.find("td:eq(5)").html());
                $("#numero_identificacion").val(currentRow.find("td:eq(6)").html());
                $("#nombre_cliente" ).val(currentRow.find("td:eq(7)").html());
                $("#nombre_vendedor").val(currentRow.find("td:eq(8)").html());
                $("#estado_venta" ).val(currentRow.find("td:eq(9)").html());
                //data = col1 + "_" + col2 + "_" + col3 + "_" + col4 + "_" + col5 + "_" + col6 + "_" + col7 + "_" + col8 + "_" + col9 + "_" + col10;
              

                $("#ocultar").on("click", function () {
                    $('#myModal').hide();

                });
                


            });
            $('#example').DataTable(
                {
                    "scrollX": true
                }
            );
        });
        //var table = document.getElementById("#example");

        //var totalRowCount = table.rows.length; // 5
        //var tbodyRowCount = table.tBodies[0].rows.length;//3

    }
}
export default Ventas;
