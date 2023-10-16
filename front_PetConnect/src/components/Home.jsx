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
                                <img src="assets/images/logo.svg" alt="Real Estate" />
                            </a>
                        </div>

                        <button class="menu-toggle">
                            <i class="ri-menu-fill bar-icon"></i>
                            <i class="ri-close-fill close-icon"></i>
                        </button>
                        <div class="header-right">

                            <div class="menu">
                                <ul>
                                    <li><Link to="/profile" class="btn btn-outline-primary">Profile</Link></li>
                                    <li><Link to="/contact" class="btn btn-outline-primary">Contact</Link></li>
                                </ul>
                            </div>

                            <div class="cta">
                            <Link to="/login" class="btn btn-outline-primary">Log in</Link>
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
                                src="assets/images/banner-image.jpg"
                                width="1300"
                                height="634"
                                alt=""
                            />
                        </div>

                        <div class="banner-box__content">
                            <h1 class="banner-box__title h1">
                                Easy way to find a perfect property
                            </h1>
                            <div class="banner-box__txt text-ex-large">
                                We provide a complete service for the sale, purchase or rental of
                                real estate.
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
                                        Rent
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
                                        Buy
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
                                        Sell
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
                                                            <label class="form-label">Location</label>
                                                            <select class="form-control">
                                                                <option>Select Your City</option>
                                                                <option>Amsterdam</option>
                                                                <option>Barcelona</option>
                                                                <option>Beijing</option>
                                                                <option>Beirut</option>
                                                                <option>Bergen</option>
                                                                <option>Copenhagen</option>
                                                                <option>Doha</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div class="form-group mb-lg-0">
                                                            <label class="form-label">Property Type</label>
                                                            <select class="form-control">
                                                                <option>Choose Property Type</option>
                                                                <option>Residential Apartment</option>
                                                                <option>Independent/Builder Floor</option>
                                                                <option>Independent House/Villa</option>
                                                                <option>Residential Land</option>
                                                                <option>1 RK/ Studio Apartment</option>
                                                                <option>Farm House</option>
                                                                <option>Serviced Apartments</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div class="form-group mb-md-0">
                                                            <label class="form-label">Price Range</label>
                                                            <select class="form-control">
                                                                <option>Choose Price Range</option>
                                                                <option>$0-1000</option>
                                                                <option>$1000-$2000</option>
                                                                <option>$2000-$3000</option>
                                                                <option>$3000-$4000</option>
                                                                <option>$4000-$5000</option>
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
                                                            <label class="form-label">Location</label>
                                                            <select class="form-control">
                                                                <option>Select Your City</option>
                                                                <option>Amsterdam</option>
                                                                <option>Barcelona</option>
                                                                <option>Beijing</option>
                                                                <option>Beirut</option>
                                                                <option>Bergen</option>
                                                                <option>Copenhagen</option>
                                                                <option>Doha</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div class="form-group mb-lg-0">
                                                            <label class="form-label">Property Type</label>
                                                            <select class="form-control">
                                                                <option>Choose Property Type</option>
                                                                <option>Residential Apartment</option>
                                                                <option>Independent/Builder Floor</option>
                                                                <option>Independent House/Villa</option>
                                                                <option>Residential Land</option>
                                                                <option>1 RK/ Studio Apartment</option>
                                                                <option>Farm House</option>
                                                                <option>Serviced Apartments</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div class="form-group mb-md-0">
                                                            <label class="form-label">Price Range</label>
                                                            <select class="form-control">
                                                                <option>Choose Price Range</option>
                                                                <option>$0-1000</option>
                                                                <option>$1000-$2000</option>
                                                                <option>$2000-$3000</option>
                                                                <option>$3000-$4000</option>
                                                                <option>$4000-$5000</option>
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
                                                            <label class="form-label">Location</label>
                                                            <select class="form-control">
                                                                <option>Select Your City</option>
                                                                <option>Amsterdam</option>
                                                                <option>Barcelona</option>
                                                                <option>Beijing</option>
                                                                <option>Beirut</option>
                                                                <option>Bergen</option>
                                                                <option>Copenhagen</option>
                                                                <option>Doha</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div class="form-group mb-lg-0">
                                                            <label class="form-label">Property Type</label>
                                                            <select class="form-control">
                                                                <option>Choose Property Type</option>
                                                                <option>Residential Apartment</option>
                                                                <option>Independent/Builder Floor</option>
                                                                <option>Independent House/Villa</option>
                                                                <option>Residential Land</option>
                                                                <option>1 RK/ Studio Apartment</option>
                                                                <option>Farm House</option>
                                                                <option>Serviced Apartments</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-6 col-lg-4">
                                                        <div class="form-group mb-md-0">
                                                            <label class="form-label">Price Range</label>
                                                            <select class="form-control">
                                                                <option>Choose Price Range</option>
                                                                <option>$0-1000</option>
                                                                <option>$1000-$2000</option>
                                                                <option>$2000-$3000</option>
                                                                <option>$3000-$4000</option>
                                                                <option>$4000-$5000</option>
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

            <div class="countries-wrap">

                <div class="container">
                    <div class="countries-wrap__title">
                        <div class="row justify-content-center">
                            <div class="col-xl-5 col-lg-7 col-md-10">
                                <h2 class="h2 text-center">
                                    We are available in many well-known countries
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="countries-list">

                        <ul class="row">
                            <li class="col-lg-3 col-md-6 col-sm-6">
                                <div class="countries-box">
                                    <div class="countries-box__title">America</div>
                                    <div class="countries-box__img">
                                        <img src="assets/images/countrie-img-1.jpg" alt="" />
                                    </div>
                                </div>
                            </li>
                            <li class="col-lg-3 col-md-6 col-sm-6">
                                <div class="countries-box">
                                    <div class="countries-box__title">Spain</div>
                                    <div class="countries-box__img">
                                        <img src="assets/images/countrie-img-2.jpg" alt="" />
                                    </div>
                                </div>
                            </li>
                            <li class="col-lg-3 col-md-6 col-sm-6">
                                <div class="countries-box">
                                    <div class="countries-box__title">London</div>
                                    <div class="countries-box__img">
                                        <img src="assets/images/countrie-img-3.jpg" alt="" />
                                    </div>
                                </div>
                            </li>
                            <li class="col-lg-3 col-md-6 col-sm-6">
                                <div class="countries-box">
                                    <div class="countries-box__title">France</div>
                                    <div class="countries-box__img">
                                        <img src="assets/images/countrie-img-4.jpg" alt="" />
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>


            <div class="recently-added-wrap">
                <div class="container">
                    <div
                        class="recently-added-wrap__title d-md-flex justify-content-between"
                    >
                        <h2 class="h2">Recently Added</h2>
                        <div class="cta">
                            <a href="#" class="btn btn-link">See all</a>
                        </div>
                    </div>

                    <div class="property-list">
                        <ul class="row">
                            <li class="col-md-6">
                                <div class="property-box">
                                    <div class="property-box__left">
                                        <img src="https://picsum.photos/id/163/158/200" alt="" />
                                    </div>
                                    <div class="property-box__right">
                                        <div class="property-box__title h3">
                                            <a href="#">103/143 West Street, Crows Nest</a>
                                        </div>
                                        <div class="property-box__amenities">
                                            <span>10 Bedroom</span>
                                            <span>150 M</span>
                                            <span>2 Garage</span>
                                        </div>
                                        <div class="property-box__post-price">
                                            <div class="property-box__post-by">
                                                Posted by <a href="#">X Builder</a>
                                            </div>
                                            <div class="property-box__price">
                                                <span class="badge">$45,545</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="col-md-6">
                                <div class="property-box">
                                    <div class="property-box__left">
                                        <img src="https://picsum.photos/id/174/158/200" alt="" />
                                    </div>
                                    <div class="property-box__right">
                                        <div class="property-box__title h3">
                                            <a href="#">103/143 West Street, India</a>
                                        </div>
                                        <div class="property-box__amenities">
                                            <span>10 Bedroom</span>
                                            <span>150 M</span>
                                            <span>2 Garage</span>
                                        </div>
                                        <div class="property-box__post-price">
                                            <div class="property-box__post-by">
                                                Posted by <a href="#">X Builder</a>
                                            </div>
                                            <div class="property-box__price">
                                                <span class="badge">$45,545</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="col-md-6">
                                <div class="property-box">
                                    <div class="property-box__left">
                                        <img src="https://picsum.photos/id/164/158/200" alt="" />
                                    </div>
                                    <div class="property-box__right">
                                        <div class="property-box__title h3">
                                            <a href="#">103/143 West Street, Crows Nest</a>
                                        </div>
                                        <div class="property-box__amenities">
                                            <span>10 Bedroom</span>
                                            <span>150 M</span>
                                            <span>2 Garage</span>
                                        </div>
                                        <div class="property-box__post-price">
                                            <div class="property-box__post-by">
                                                Posted by <a href="#">X Builder</a>
                                            </div>
                                            <div class="property-box__price">
                                                <span class="badge">$45,545</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="col-md-6">
                                <div class="property-box">
                                    <div class="property-box__left">
                                        <img src="https://picsum.photos/id/220/158/200" alt="" />
                                    </div>
                                    <div class="property-box__right">
                                        <div class="property-box__title h3">
                                            <a href="#">103/143 West Street, Crows Nest</a>
                                        </div>
                                        <div class="property-box__amenities">
                                            <span>10 Bedroom</span>
                                            <span>150 M</span>
                                            <span>2 Garage</span>
                                        </div>
                                        <div class="property-box__post-price">
                                            <div class="property-box__post-by">
                                                Posted by <a href="#">X Builder</a>
                                            </div>
                                            <div class="property-box__price">
                                                <span class="badge">$45,545</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="col-md-6">
                                <div class="property-box">
                                    <div class="property-box__left">
                                        <img src="https://picsum.photos/id/232/158/200" alt="" />
                                    </div>
                                    <div class="property-box__right">
                                        <div class="property-box__title h3">
                                            <a href="#">103/143 West Street, Crows Nest</a>
                                        </div>
                                        <div class="property-box__amenities">
                                            <span>10 Bedroom</span>
                                            <span>150 M</span>
                                            <span>2 Garage</span>
                                        </div>
                                        <div class="property-box__post-price">
                                            <div class="property-box__post-by">
                                                Posted by <a href="#">X Builder</a>
                                            </div>
                                            <div class="property-box__price">
                                                <span class="badge">$45,545</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="col-md-6">
                                <div class="property-box">
                                    <div class="property-box__left">
                                        <img src="https://picsum.photos/id/270/158/200" alt="" />
                                    </div>
                                    <div class="property-box__right">
                                        <div class="property-box__title h3">
                                            <a href="#">103/143 West Street, Crows Nest</a>
                                        </div>
                                        <div class="property-box__amenities">
                                            <span>10 Bedroom</span>
                                            <span>150 M</span>
                                            <span>2 Garage</span>
                                        </div>
                                        <div class="property-box__post-price">
                                            <div class="property-box__post-by">
                                                Posted by <a href="#">X Builder</a>
                                            </div>
                                            <div class="property-box__price">
                                                <span class="badge">$45,545</span>
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