import React from "react";
import Feed from "./Feed";

export default function Maincontent() {

  const sendDataToBackend = async (e) => {
    try {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      const response = await fetch('http://localhost:5000/subirimagen', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.message === true) {
        window.alert('Imagen subida exitosamente');
      } else {
        window.alert('Error al subir la imagen');
      }
    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
    }
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
                        <input type="file" onChange={e => sendDataToBackend(e)} />
                      </div>
                    </div>
                    <div class="col-md-2 d-md-flex">
                      <button class="btn btn-primary btn-icon ms-auto">
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
                          <input type="file" onChange={e => sendDataToBackend(e)} />
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
