import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDp11FAxsh_JtvCyzj8sf9OXbmBO4PGBt8",
  authDomain: "petconnect2-4be50.firebaseapp.com",
  projectId: "petconnect2-4be50",
  storageBucket: "petconnect2-4be50.appspot.com",
  messagingSenderId: "948988551923",
  appId: "1:948988551923:web:afd3d0cff1d450ae278d86",
  measurementId: "G-3JCCDR9K1G",
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Feed({ data }) {

  const [documentData, setDocumentData] = useState({
    fecha_hora: "2023-11-09T04:27:40.521",
    descripcion: "Perro Labrador en adopción, su nombre es Toby.",
    imagen: "https://firebasestorage.googleapis.com/v0/b/petconnect2-4be50.appspot.com/o/Fotos%20publicaciones%2Flabrador.jpeg?alt=media&token=d34db4ae-f04f-4d44-b81f-d44a0a4d072a"
  });

  const fetchDocumentData = async (documentId) => {
    console.log(documentId);
    try {
      const docRef = doc(db, "publicaciones", documentId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setDocumentData(docSnap.data());
        console.log(documentData);
      } else {
        console.log("El documento no existe");
      }
    } catch (e) {
      console.error("Error encontrando el documento: ", e);
    }
  };

  useEffect(() => {
    if (data) {
      fetchDocumentData(data);
    }
  }, [data]);

  return (
    <>
      <div className="card gedf-card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src="https://picsum.photos/50/50"
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">Tú</div>
                <div className="h7 text-muted">Tú</div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="gedf-drop1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-h"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="gedf-drop1"
                >
                  <div className="h6 dropdown-header">Configuration</div>
                  <a className="dropdown-item" href="#">
                    Save
                  </a>
                  <a className="dropdown-item" href="#">
                    Hide
                  </a>
                  <a className="dropdown-item" href="#">
                    Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            {" "}
            <i className="fa fa-clock-o"></i>{documentData.fecha_hora}
          </div>
          <a className="card-link" href="#">
            <h5 className="card-title">
              {documentData.descripcion}
            </h5>
          </a>
          <img src={documentData.imagen} alt="Imagen" />
        </div>
        <div className="card-footer">
          <a href="#" className="card-link">
            <i className="fa fa-gittip"></i> Like
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-comment"></i> Comment
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-mail-forward"></i> Share
          </a>
        </div>
      </div>

      <div className="card gedf-card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src="https://picsum.photos/50/50"
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">camilo33</div>
                <div className="h7 text-muted">Camilo</div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="gedf-drop1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-h"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="gedf-drop1"
                >
                  <div className="h6 dropdown-header">Configuration</div>
                  <a className="dropdown-item" href="#">
                    Save
                  </a>
                  <a className="dropdown-item" href="#">
                    Hide
                  </a>
                  <a className="dropdown-item" href="#">
                    Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            {" "}
            <i className="fa fa-clock-o"></i> 2023-11-09T06:14:37.099
          </div>
          <a className="card-link" href="#">
            <h5 className="card-title">
              {" "}
              Borcer Collie en adoción, nombre Pepe.
            </h5>
          </a>
          <img src="https://firebasestorage.googleapis.com/v0/b/petconnect2-4be50.appspot.com/o/Fotos%20publicaciones%2Fborder.jpeg?alt=media&token=c0b74a89-0cd7-4030-8392-a6f25b23eeca" alt="Imagen" />
          <div>
            <span className="badge badge-primary">JavaScript</span>
            <span className="badge badge-primary">Android</span>
            <span className="badge badge-primary">PHP</span>
            <span className="badge badge-primary">Node.js</span>
            <span className="badge badge-primary">Ruby</span>
            <span className="badge badge-primary">Paython</span>
          </div>
        </div>
        <div className="card-footer">
          <a href="#" className="card-link">
            <i className="fa fa-gittip"></i> Like
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-comment"></i> Comment
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-mail-forward"></i> Share
          </a>
        </div>
      </div>
      <div className="card gedf-card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src="https://picsum.photos/50/50"
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">garces23</div>
                <div className="h7 text-muted">Garces</div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="gedf-drop1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-h"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="gedf-drop1"
                >
                  <div className="h6 dropdown-header">Configuration</div>
                  <a className="dropdown-item" href="#">
                    Save
                  </a>
                  <a className="dropdown-item" href="#">
                    Hide
                  </a>
                  <a className="dropdown-item" href="#">
                    Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            {" "}
            <i className="fa fa-clock-o"></i> 2023-11-09T06:19:26.364
          </div>
          <a className="card-link" href="#">
            <h5 className="card-title">
              Gato Egipcio en adopción, 4 años.
            </h5>
          </a>
          <img src="https://firebasestorage.googleapis.com/v0/b/petconnect2-4be50.appspot.com/o/Fotos%20publicaciones%2Fgato_eg.jpeg?alt=media&token=bc428139-d1fe-4de0-a4e4-e66af1a59c84" alt="Imagen" />
        </div>
        <div className="card-footer">
          <a href="#" className="card-link">
            <i className="fa fa-gittip"></i> Like
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-comment"></i> Comment
          </a>
          <a href="#" className="card-link">
            <i className="fa fa-mail-forward"></i> Share
          </a>
        </div>
      </div>
    </>
  );
}
