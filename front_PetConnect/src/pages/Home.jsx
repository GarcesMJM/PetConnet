import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <div class="header-wrap">
                <header>
                    <div class="container">

                        <div class="logo">
                            <a href="#">
                            <h1>PetConnect</h1>
                            </a>
                        </div>

                        <button class="menu-toggle">
                            <i class="ri-menu-fill bar-icon"></i>
                            <i class="ri-close-fill close-icon"></i>
                        </button>
                        <div class="header-right">

                            <div class="menu">
                                <ul>
                                    <li><Link to="/profile" class="btn btn-outline-primary">Perfil</Link></li>
                                    <li><Link to="/posts" class="btn btn-outline-primary">Posts</Link></li>
                                    <li><Link to="/mascota" class="btn btn-outline-primary">Mascota</Link></li>
                                    <li><Link to="/login" class="btn btn-outline-primary">Iniciar Sesión</Link></li>
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
                                src="assets/images/banner-image.png"
                                width="1300"
                                height="634"
                                alt=""
                            />
                        </div>

                        <div class="banner-box__content">
                            <h1 class="banner-box__title h1">
                                La mejor forma de adoptar una mascota
                            </h1>
                            <div class="banner-box__txt text-ex-large">
                                PetConnect® es todo lo que necesitas para adoptar una mascota o ponerla en adopción.
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
                                <div class="tab-pane fade show active" id="rent" role="tabpanel">
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
                    <div
                        class="recently-added-wrap__title d-md-flex justify-content-between"
                    >
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
                                            <span>En Adopción</span><br/>
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
                                            <span>Perdido</span><br/>
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
                                        <img src="assets/images/golden.jpeg" alt="" />
                                    </div>
                                    <div class="property-box__right">
                                        <div class="property-box__title h3">
                                            <a href="#">Golden Retriever</a>
                                        </div>
                                        <div class="property-box__amenities">
                                            <span>En Adopción</span><br/>
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
                                        <img src="assets/images/golden.jpeg" alt="" />
                                    </div>
                                    <div class="property-box__right">
                                        <div class="property-box__title h3">
                                            <a href="#">Golden Retriever</a>
                                        </div>
                                        <div class="property-box__amenities">
                                            <span>En Adopción</span><br/>
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
                        </ul>
                    </div>
                </div>
            </div>

            <div class="banner-wrap">
                <div class="container">
                    <div class="banner-box">

                        <div class="banner-box__img">
                            <img
                                src="assets/images/banner-image-2.jpg"
                                width="1300"
                                height="482"
                                alt=""
                            />
                        </div>

                        <div class="banner-box__content">
                            <h1 class="banner-box__title h1">Find your best Real Estate</h1>
                            <div class="banner-box__txt text-ex-large">
                                We provide a complete service for the sale, purchase or rental of
                                real estate.
                            </div>
                            <div class="banner-box__cta">
                                <a href="#" class="btn btn-primary">Contact Us</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="footer-wrap">
                <footer>
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="col-lg-4 col-md-8">
                                <div class="f-info">
                                    <div class="f-logo pb-3">
                                        <img src="assets/images/logo.svg" alt="" />
                                    </div>
                                    <p class="text-small pb-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <div class="d-none d-lg-block">
                                        <div class="social-list pb-3">
                                            <ul>
                                                <li>
                                                    <a href="#" class="facebook" target="_blank"
                                                    ><i class="ri-facebook-circle-fill"></i
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a href="#" class="twitter" target="_blank"
                                                    ><i class="ri-twitter-fill"></i
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a href="#" class="instagram" target="_blank"
                                                    ><i class="ri-instagram-fill"></i
                                                    ></a>
                                                </li>
                                                <li>
                                                    <a href="#" class="linkedin" target="_blank"
                                                    ><i class="ri-linkedin-box-fill"></i
                                                    ></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <p class="text-small">© 2023 . All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-12">
                                <div class="row">
                                    <div class="col-md-3 col-sm-6 col-6 pb-4 pb-md-0">
                                        <h5 class="h4 pb-3">Take a tour</h5>
                                        <div class="quick-links">
                                            <ul>
                                                <li><a href="#">Features</a></li>
                                                <li><a href="#">Partners</a></li>
                                                <li><a href="#">Pricing</a></li>
                                                <li><a href="#">Product</a></li>
                                                <li><a href="#">Support</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-6 pb-4 pb-md-0">
                                        <h5 class="h4 pb-3">Our Company</h5>
                                        <div class="quick-links">
                                            <ul>
                                                <li><a href="#">About Us</a></li>
                                                <li><a href="#">Agents</a></li>
                                                <li><a href="#">Blog</a></li>
                                                <li><a href="#">Media</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <h5 class="h4 pb-3">Subscribe</h5>
                                        <div class="subscribe-form-wrap">
                                            <p class="text-small">
                                                Subscribe to get latest property, blog news from us
                                            </p>
                                            <form class="subscribe-form form-wrap">
                                                <div class="form-group">
                                                    <input
                                                        type="email"
                                                        class="form-control"
                                                        placeholder="Email Address"
                                                    />
                                                    <div class="cta">
                                                        <button
                                                            class="btn btn-primary btn-icon btn-sm btn-rounded"
                                                        >
                                                            <i class="ri-arrow-right-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-lg-none pt-4">
                            <div class="social-list pb-3">
                                <ul>
                                    <li>
                                        <a href="#" class="facebook" target="_blank"
                                        ><i class="ri-facebook-circle-fill"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#" class="twitter" target="_blank"
                                        ><i class="ri-twitter-fill"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#" class="instagram" target="_blank"
                                        ><i class="ri-instagram-fill"></i
                                        ></a>
                                    </li>
                                    <li>
                                        <a href="#" class="linkedin" target="_blank"
                                        ><i class="ri-linkedin-box-fill"></i
                                        ></a>
                                    </li>
                                </ul>
                            </div>
                            <p class="text-small">© 2023 . All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
export default Home;