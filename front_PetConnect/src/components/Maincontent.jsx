import React, { useState } from "react";
import Feed from "./Feed";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDp11FAxsh_JtvCyzj8sf9OXbmBO4PGBt8",
  authDomain: "petconnect2-4be50.firebaseapp.com",
  projectId: "petconnect2-4be50",
  storageBucket: "petconnect2-4be50.appspot.com",
  messagingSenderId: "948988551923",
  appId: "1:948988551923:web:afd3d0cff1d450ae278d86",
  measurementId: "G-3JCCDR9K1G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default function Maincontent() {

  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");
  const [data, setData] = useState("");

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleDescChange = (e) => {
    setDesc(e.target.value);
  };

  const sendPost = async (e) => {
    e.preventDefault();
    console.log(e);
    const path = ref(storage, `Fotos publicaciones/${file.name}`);
    await uploadBytes(path, file);
    console.log("Imagen subida");
    const urlImDesc = await getDownloadURL(path);
    const currentDate = new Date();
    try {
      const response = await fetch("http://localhost:5000/publicar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          desc: desc,
          post_img: urlImDesc,
          date: currentDate.toISOString()
        }),
      });

      const data = await response.text();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(
        "Error al enviar la publicación:",
        error.response.data
      );
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
                <form class="form-wrap" onSubmit={sendPost}>
                  <div class="row align-items-end">
                    <div class="col-md-10">
                      <div class="row">
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="button-addon2"
                          value={desc}
                          onChange={handleDescChange}
                        />
                        <input type="file" onChange={handleFileChange}/>
                      </div>
                    </div>
                    <div class="col-md-2 d-md-flex">
                      <button type="submit" class="btn btn-primary btn-icon ms-auto">
                        <img src="assets/images/send-fill.svg" alt="send"/>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="tab-pane fade" id="buy" role="tabpanel">
                <form class="form-wrap" onSubmit={sendPost}>
                  <div class="row align-items-end">
                    <div class="col-md-10">
                      <div class="row">
                        <input
                          type="text"
                          className="form-control"
                          aria-describedby="button-addon2"
                          value={desc}
                          onChange={handleDescChange}
                        />
                        <input type="file" onChange={handleFileChange}/>
                      </div>
                    </div>
                    <div class="col-md-2 d-md-flex">
                      <button type="submit" class="btn btn-primary btn-icon ms-auto">
                        <img src="assets/images/send-fill.svg" alt="send"/>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Feed data={data} />
      </div>
    </>
  );
}
