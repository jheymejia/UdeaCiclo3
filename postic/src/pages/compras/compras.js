
import React, { useState } from "react";


//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import "slick-carousel/slick/slick-theme.css";
import '../compras/compras.css';
import 'jquery/dist/jquery.min.js';

//Datatable Modules

import $ from 'jquery';

class Compras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      sales: 80,
      price: 0,
      cantidadstock:100
    };
  }

  render() {
    return (

      <div className="Productos">
        <div class="row">
          <div class="wrapper col-3">
            <div class="product-list carousel-bazaar">
              <article class="box box-product">
                <div class="box-shadow">
                  <div class="box-shadow-inner">
                    <h1 class="box-heading">
                      <a href="#" title="">{this.state.sales + this.state.count} vendidos </a>
                    </h1>

                    <div class="_holder">
                      <div class="box-image">
                        <a href="#" class="_content" title="">
                          <img class="image-main-variant" src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                        </a>
                      </div>
                    </div>
                    <div class="box-caption text-center">
                      <div id="variants-gallery" class="variants-gallery-carousel">
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="box">
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">1 x 120 cm</a>
                          </div>
                        </div>
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">2 x 120 cm</a>
                          </div>
                        </div>
                      </div>

                      <form action="#" method="post" class="add-to-cart box-form">
                        <a href="#" onClick={() => this.setState({ count: this.state.count + 1 })} class="btn btn-danger">Agregar</a>
                      </form>
                    </div>
                  </div>
                </div>
                <h1 class="box-heading">
                  <a href="#" title="">papel higienico 1</a>
                </h1>
                <div class="_holder">
                  <div class="box-image">
                    <a href="#" class="_content" title="articulo de baño">
                      <img src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                    </a>
                  </div>
                </div>
                <div class="box-caption text-center">
                  <span class="availability in-stock">In stock</span>
                  <form action="#" method="post" class="add-to-cart box-form">
                    <div class="prices">
                      <div class="price price-discount"><span>1&nbsp;299&nbsp;Kc</span></div>
                    </div>
                    <button type="submit" class="btn btn-danger">Cancelar</button>
                  </form>
                </div>
              </article>
              <article class="box box-product">
                <div class="box-shadow">
                  <div class="box-shadow-inner">
                    <h1 class="box-heading">
                      <a href="#" title="">80 vendidos</a>
                    </h1>

                    <div class="_holder">
                      <div class="box-image">
                        <a href="#" class="_content" title="">
                          <img class="image-main-variant" src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                        </a>
                      </div>
                    </div>
                    <div class="box-caption text-center">
                      <div id="variants-gallery" class="variants-gallery-carousel">
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="box">
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">1 x 120 cm</a>
                          </div>
                        </div>
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">2 x 120 cm</a>
                          </div>
                        </div>
                      </div>

                      <form action="#" method="post" class="add-to-cart box-form">
                        <a href="#" onClick={() => this.setState({ count: this.state.count + 1 })} class="btn btn-danger">Agregar</a>
                      </form>
                    </div>
                  </div>
                </div>
                <h1 class="box-heading">
                  <a href="#" title="">papel higienico 2</a>
                </h1>
                <div class="_holder">
                  <div class="box-image">
                    <a href="#" class="_content" title="">
                      <img src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                    </a>
                  </div>
                </div>
                <div class="box-caption text-center">
                  <span class="availability in-stock">In stock</span>
                  <form action="#" method="post" class="add-to-cart box-form">
                    <div class="prices">
                      <div class="price price-discount"><span>1&nbsp;299&nbsp;Kc</span></div>
                    </div>
                    <button type="submit" class="btn btn-danger">Cancelar</button>
                  </form>
                </div>
              </article>
              <article class="box box-product">
                <div class="box-shadow">
                  <div class="box-shadow-inner">
                    <h1 class="box-heading">
                      <a href="#" title="">80 vendidos</a>
                    </h1>

                    <div class="_holder">
                      <div class="box-image">
                        <a href="#" class="_content" title="">
                          <img class="image-main-variant" src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                        </a>
                      </div>
                    </div>
                    <div class="box-caption text-center">
                      <div id="variants-gallery" class="variants-gallery-carousel">
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="box">
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">1 x 120 cm</a>
                          </div>
                        </div>
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">2 x 120 cm</a>
                          </div>
                        </div>
                      </div>

                      <form action="#" method="post" class="add-to-cart box-form">
                        <a href="#" onClick={() => this.setState({ count: this.state.count + 1 })} class="btn btn-danger">Agregar</a>
                      </form>
                    </div>
                  </div>
                </div>
                <h1 class="box-heading">
                  <a href="#" title="">papel higienico 3</a>
                </h1>
                <div class="_holder">
                  <div class="box-image">
                    <a href="#" class="_content" title="">
                      <img src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                    </a>
                  </div>
                </div>
                <div class="box-caption text-center">
                  <span class="availability in-stock">In stock</span>
                  <form action="#" method="post" class="add-to-cart box-form">
                    <div class="prices">
                      <div class="price price-discount"><span>1&nbsp;299&nbsp;Kc</span></div>
                    </div>
                    <button type="submit" class="btn btn-danger">Cancelar</button>
                  </form>
                </div>
              </article>
              <article class="box box-product">
                <div class="box-shadow">
                  <div class="box-shadow-inner">
                    <h1 class="box-heading">
                      <a href="#" title="">80 vendidos</a>
                    </h1>

                    <div class="_holder">
                      <div class="box-image">
                        <a href="#" class="_content" title="">
                          <img class="image-main-variant" src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                        </a>
                      </div>
                    </div>
                    <div class="box-caption text-center">
                      <div id="variants-gallery" class="variants-gallery-carousel">
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="box">
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">1 x 120 cm</a>
                          </div>
                        </div>
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">2 x 120 cm</a>
                          </div>
                        </div>
                      </div>

                      <form action="#" method="post" class="add-to-cart box-form">
                        <a href="#" onClick={() => this.setState({ count: this.state.count + 1 })} class="btn btn-danger">Agregar</a>
                      </form>
                    </div>
                  </div>
                </div>
                <h1 class="box-heading">
                  <a href="#" title="">papel higienico 4</a>
                </h1>
                <div class="_holder">
                  <div class="box-image">
                    <a href="#" class="_content" title="">
                      <img src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                    </a>
                  </div>
                </div>
                <div class="box-caption text-center">
                  <span class="availability in-stock">In stock</span>
                  <form action="#" method="post" class="add-to-cart box-form">
                    <div class="prices">
                      <div class="price price-discount"><span>1&nbsp;299&nbsp;Kc</span></div>
                    </div>
                    <button type="submit" class="btn btn-danger">Cancelar</button>
                  </form>
                </div>
              </article>
              <article class="box box-product">
                <div class="box-shadow">
                  <div class="box-shadow-inner">
                    <h1 class="box-heading">
                      <a href="#" title="">80 vendidos</a>
                    </h1>

                    <div class="_holder">
                      <div class="box-image">
                        <a href="#" class="_content" title="">
                          <img class="image-main-variant" src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                        </a>
                      </div>
                    </div>
                    <div class="box-caption text-center">
                      <div id="variants-gallery" class="variants-gallery-carousel">
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="box">
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">1 x 120 cm</a>
                          </div>
                        </div>
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">2 x 120 cm</a>
                          </div>
                        </div>
                      </div>

                      <form action="#" method="post" class="add-to-cart box-form">
                        <a href="#" onClick={() => this.setState({ count: this.state.count + 1 })} class="btn btn-danger">Agregar</a>
                      </form>
                    </div>
                  </div>
                </div>
                <h1 class="box-heading">
                  <a href="#" title="">papel higienico 5</a>
                </h1>
                <div class="_holder">
                  <div class="box-image">
                    <a href="#" class="_content" title="">
                      <img src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                    </a>
                  </div>
                </div>
                <div class="box-caption text-center">
                  <span class="availability in-stock">In stock</span>
                  <form action="#" method="post" class="add-to-cart box-form">
                    <div class="prices">
                      <div class="price price-discount"><span>1&nbsp;299&nbsp;Kc</span></div>
                    </div>
                    <button type="submit" class="btn btn-danger">Cancelar</button>
                  </form>
                </div>
              </article>
              <article class="box box-product">
                <div class="box-shadow">
                  <div class="box-shadow-inner">
                    <h1 class="box-heading">
                      <a href="#" title="">80 vendidos</a>
                    </h1>

                    <div class="_holder">
                      <div class="box-image">
                        <a href="#" class="_content" title="">
                          <img class="image-main-variant" src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                        </a>
                      </div>
                    </div>
                    <div class="box-caption text-center">
                      <div id="variants-gallery" class="variants-gallery-carousel">
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                        <div class="box box-variant-image">
                          <div class="_content">
                            <a href="#" rel="gallery">
                              <img src="https://picturesfeedo.com/slir/w64-h64/eshop-engine/data/poster/8001090234988.png" alt="" title="" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div class="box">
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">1 x 120 cm</a>
                          </div>
                        </div>
                        <div class="box box-sizes box-sizes-small">
                          <div class="box-inner">
                            <a href="#" title="">2 x 120 cm</a>
                          </div>
                        </div>
                      </div>

                      <form action="#" method="post" class="add-to-cart box-form">
                        <a href="#" onClick={() => this.setState({ count: this.state.count + 1 })} class="btn btn-danger">Agregar</a>
                      </form>
                    </div>
                  </div>
                </div>
                <h1 class="box-heading">
                  <a href="#" title="">papel higienico 6</a>
                </h1>
                <div class="_holder">
                  <div class="box-image">
                    <a href="#" class="_content" title="">
                      <img src="https://www.feedo.cz/assets/themes/feedo/images/content/ajax-loader-kolecko.gif" data-lazy="https://dummyimage.com/200x150/aba4ab/141414" alt="" title="" />
                    </a>
                  </div>
                </div>
                <div class="box-caption text-center">
                  <span class="availability in-stock">In stock</span>
                  <form action="#" method="post" class="add-to-cart box-form">
                    <div class="prices">
                      <div class="price price-discount"><span>1&nbsp;299&nbsp;Kc</span></div>
                    </div>
                    <button type="submit" class="btn btn-danger">Cancelar</button>
                  </form>
                </div>
              </article>
            </div>

          </div>
          <div class="col-3 wrapper">
            
            <span>en canasta {this.state.count}    en total 99999    dinero del cliente 5000</span>
            <p>Nombre del cliente: jihrman</p>
           <p>si le falta dinero recarga por nequi</p>
            <span><button>recargar dinero</button>   <button>Comprar seleccionados</button></span>
            <hr></hr>
            <p>vendedor: carlos</p>
            <p>cantidad en stock: {this.state.cantidadstock-this.state.count}</p>
            <p>nombre del producto : chocolate </p>
            <p>precio {5000} </p>
            <p>cantidad del producto {this.state.count} </p>
            <p>costo del producto {this.state.count * 5000} </p>
            <hr></hr>
            <p>vendedor: carlos</p>
            <p>cantidad en stock: {this.state.cantidadstock-this.state.count}</p>
            <p>nombre del producto : chocolate </p>
            <p>precio {5000} </p>
            <p>cantidad del producto {this.state.count} </p>
            <p>costo del producto {this.state.count * 5000} </p>
            <hr></hr>
            <p>vendedor: carlos</p>
            <p>cantidad en stock: {this.state.cantidadstock-this.state.count}</p>
            <p>nombre del producto : chocolate </p>
            <p>precio {5000} </p>
            <p>cantidad del producto {this.state.count} </p>
            <p>costo del producto {this.state.count * 5000} </p>
            <hr></hr>
            <p>vendedor: carlos</p>
            <p>cantidad en stock: {this.state.cantidadstock-this.state.count}</p>
            <p>nombre del producto : chocolate </p>
            <p>precio {5000} </p>
            <p>cantidad del producto {this.state.count} </p>
            <p>costo del producto {this.state.count * 5000} </p>
            <hr></hr>
            <p>vendedor: carlos</p>
            <p>cantidad en stock: {this.state.cantidadstock-this.state.count}</p>
            <p>nombre del producto : chocolate </p>
            <p>precio {5000} </p>
            <p>cantidad del producto {this.state.count} </p>
            <p>costo del producto {this.state.count * 5000} </p>
            

            
          </div>
        </div>


      </div>
    );
  }
  componentDidMount() {
    $(document).ready(function () {
      if ($(".carousel-bazaar").hasClass('is-on') == false) {
        $(".carousel-bazaar").slick({
          lazyLoad: "ondemand",
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
          prevArrow: '<i class="glyphicon glyphicon-chevron-left"><</i>',
          nextArrow: '<i class="glyphicon glyphicon-chevron-right">></i>'
        });
        $(".carousel-bazaar").addClass("is-on");
      }

      if ($(".variants-gallery-carousel").hasClass('is-on') == false) {
        $(".variants-gallery-carousel").slick({
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,

          prevArrow: '<i class="glyphicon glyphicon-chevron-left"><</i>',
          nextArrow: '<i class="glyphicon glyphicon-chevron-right">></i>'
        });
        $(".variants-gallery-carousel").addClass("is-on");
      }

      $(".box.box-product").hover(
        function () {
          var $variantBox = $(this).find('.box-shadow');
          if ($variantBox.length) {
            $variantBox.show();
            $variantBox.find('.variants-gallery-carousel').get(0).slick.setPosition();
          }
        },
        function () {
          var $variantBox = $(this).find('.box-shadow');
          if ($variantBox.length) {
            $variantBox.hide();
          }
        }
      );
    });


  }
}
export default Compras;
