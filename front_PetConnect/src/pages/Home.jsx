import React from "react";
import { Link } from "react-router-dom";
import "../css/home.css";

function Home() {
  return (
    <div className="Home">
      <div class="header-wrap">
        <header>
          <div class="container">
            <div class="logo">
            <Link to="/" type="button" class="petconnect"><h1>PetConnect</h1></Link>
            </div>

            <button class="menu-toggle">
              <i class="ri-menu-fill bar-icon"></i>
              <i class="ri-close-fill close-icon"></i>
            </button>
            <div class="header-right">
              <div class="menu">
                <ul>
                  <li>
                    <Link to="/login" class="btn btn-outline-primary">
                      Iniciar Sesión
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </header>
      </div>

      <div class="banner-wrap">
        <div class="container">
          <div class="banner-box">
            <div class="banner-box__img">
              <img
                src="assets/images/banner.jpeg"
                width="1300"
                height="634"
                alt=""
              />
            </div>

            <div class="banner-box__content" >
              <h1 class="banner-box__title h1">
                La mejor forma de adoptar una mascota
              </h1>
              <div class="banner-box__txt text-ex-large" id="textobanner">
                PetConnect® es todo lo que necesitas para adoptar una mascota o
                ponerla en adopción.
              </div>
            </div>

            <div class="banner-tab-wrap">
              <ul class="nav" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="tab-item active"
                    data-bs-toggle="pill"
                    data-bs-target="#rent"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    Adopta
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="tab-item"
                    data-bs-toggle="pill"
                    data-bs-target="#buy"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Ofrece
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="tab-item"
                    data-bs-toggle="pill"
                    data-bs-target="#sell"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    Reporta
                  </button>
                </li>
              </ul>

              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="rent"
                  role="tabpanel"
                >
                  <form class="form-wrap">
                    <div class="row align-items-end">
                      <div class="col-md-10">
                        <div class="row">
                          <div class="col-md-6 col-lg-4">
                            <div class="form-group mb-lg-0">
                              <label class="form-label">Ubicación</label>
                              <select class="form-control">
                                <option>Selecciona tu ciudad</option>
                                <option>Medellín</option>
                                <option>Cali</option>
                                <option>Bogotá</option>
                                <option>Cartagena</option>
                                <option>Bucaramanga</option>
                                <option>Santa Marta</option>
                                <option>Cúcuta</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6 col-lg-4">
                            <div class="form-group mb-lg-0">
                              <label class="form-label">Mascota</label>
                              <select class="form-control">
                                <option>Selecciona el tipo</option>
                                <option>Gatos</option>
                                <option>Perros</option>
                                <option>Hámsters</option>
                                <option>Caballos</option>
                                <option>Mini Pig</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2 d-md-flex">
                        <button class="btn btn-primary btn-icon ms-auto">
                          <i class="ri-search-2-line"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="tab-pane fade" id="buy" role="tabpanel">
                  <form class="form-wrap">
                    <div class="row align-items-end">
                      <div class="col-md-10">
                        <div class="row">
                          <div class="col-md-6 col-lg-4">
                            <div class="form-group mb-lg-0">
                              <label class="form-label">Ubicación</label>
                              <select class="form-control">
                                <option>Selecciona tu ciudad</option>
                                <option>Medellín</option>
                                <option>Cali</option>
                                <option>Bogotá</option>
                                <option>Cartagena</option>
                                <option>Bucaramanga</option>
                                <option>Santa Marta</option>
                                <option>Cúcuta</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6 col-lg-4">
                            <div class="form-group mb-lg-0">
                              <label class="form-label">Mascota</label>
                              <select class="form-control">
                                <option>Selecciona el tipo</option>
                                <option>Gatos</option>
                                <option>Perros</option>
                                <option>Hámsters</option>
                                <option>Caballos</option>
                                <option>Mini Pig</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2 d-md-flex">
                        <button class="btn btn-primary btn-icon ms-auto">
                          <i class="ri-search-2-line"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="tab-pane fade" id="sell" role="tabpanel">
                  <form class="form-wrap">
                    <div class="row align-items-end">
                      <div class="col-md-10">
                        <div class="row">
                          <div class="col-md-6 col-lg-4">
                            <div class="form-group mb-lg-0">
                              <label class="form-label">Ubicación</label>
                              <select class="form-control">
                                <option>Selecciona tu ciudad</option>
                                <option>Medellín</option>
                                <option>Cali</option>
                                <option>Bogotá</option>
                                <option>Cartagena</option>
                                <option>Bucaramanga</option>
                                <option>Santa Marta</option>
                                <option>Cúcuta</option>
                              </select>
                            </div>
                          </div>
                          <div class="col-md-6 col-lg-4">
                            <div class="form-group mb-lg-0">
                              <label class="form-label">Mascota</label>
                              <select class="form-control">
                                <option>Selecciona el tipo</option>
                                <option>Gatos</option>
                                <option>Perros</option>
                                <option>Hámsters</option>
                                <option>Caballos</option>
                                <option>Mini Pig</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-2 d-md-flex">
                        <button class="btn btn-primary btn-icon ms-auto">
                          <i class="ri-search-2-line"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="recently-added-wrap">
        <div class="container">
          <div class="recently-added-wrap__title d-md-flex justify-content-between">
            <h2 class="h2">Añadidos recientemente</h2>
          </div>

          <div class="property-list">
            <ul class="row">
              <li class="col-md-6">
                <div class="property-box">
                  <div class="property-box__left">
                    <img src="assets/images/golden.jpeg" alt="" />
                  </div>
                  <div class="property-box__right">
                    <div class="property-box__title h3">
                      <a href="#">Golden Retriever</a>
                    </div>
                    <div class="property-box__amenities">
                      <span>En Adopción</span>
                      <br />
                      <span>5 años</span>
                    </div>
                    <div class="property-box__post-price">
                      <div class="property-box__post-by">
                        Subido por: <a href="#">Jaime</a>
                      </div>
                      <div class="property-box__price">
                        <span class="badge">Me Interesa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="col-md-6">
                <div class="property-box">
                  <div class="property-box__left">
                    <img src="assets/images/gato-blanco.png" alt="" />
                  </div>
                  <div class="property-box__right">
                    <div class="property-box__title h3">
                      <a href="#">Nievecita</a>
                    </div>
                    <div class="property-box__amenities">
                      <span>Perdido</span>
                      <br />
                      <span>2 años</span>
                    </div>
                    <div class="property-box__post-price">
                      <div class="property-box__post-by">
                        Subido por: <a href="#">Amanda</a>
                      </div>
                      <div class="property-box__price">
                        <span class="badge">Es mío</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="col-md-6">
                <div class="property-box">
                  <div class="property-box__left">
                    <img src="assets/images/labrador.jpeg" alt="" />
                  </div>
                  <div class="property-box__right">
                    <div class="property-box__title h3">
                      <a href="#">Labrador</a>
                    </div>
                    <div class="property-box__amenities">
                      <span>En Adopción</span>
                      <br />
                      <span>4 años</span>
                    </div>
                    <div class="property-box__post-price">
                      <div class="property-box__post-by">
                        Subido por: <a href="#">Jorge</a>
                      </div>
                      <div class="property-box__price">
                        <span class="badge">Me Interesa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li class="col-md-6">
                <div class="property-box">
                  <div class="property-box__left">
                    <img src="assets/images/caballo.jpeg" alt="" />
                  </div>
                  <div class="property-box__right">
                    <div class="property-box__title h3">
                      <a href="#">Caballo Pura Raza</a>
                    </div>
                    <div class="property-box__amenities">
                      <span>En Apareamiento</span>
                      <br />
                      <span>14 años</span>
                    </div>
                    <div class="property-box__post-price">
                      <div class="property-box__post-by">
                        Subido por: <a href="#">Capo</a>
                      </div>
                      <div class="property-box__price">
                        <span class="badge">Me Interesa</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
