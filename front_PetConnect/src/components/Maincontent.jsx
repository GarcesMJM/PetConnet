import React from "react";
import Feed from "./Feed";

export default function Maincontent() {

  const createReqBody = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    console.log("Form = " + formData);
    await sendDataToBackend(formData);
  }

  const sendDataToBackend = async (formData) => {
    console.log(formData);
    fetch('http://localhost:8080/subirimagen', {
      method: 'POST',
      body: formData,
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(`Hubo un error: ${err}`))
  };
  
  return (
    <>
      <div className="col-md-6 gedf-main">
        <div className="card gedf-card">
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
                  Adopción
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
                  Pérdida
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
                        <input type="file" onChange={e => createReqBody(e)}/>
                      </div>
                    </div>
                    <div class="col-md-2 d-md-flex">
                      <button type="submit" class="btn btn-primary btn-icon ms-auto">
                        POST
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
                          <input type="file"/>
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
        <Feed />
      </div>
    </>
  );
}
