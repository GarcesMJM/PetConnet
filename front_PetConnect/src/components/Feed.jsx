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
                <div className="h5 m-0">@LeeCross</div>
                <div className="h7 text-muted">Miracles Lee Cross</div>
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
                <div className="h5 m-0">@LeeCross</div>
                <div className="h7 text-muted">Miracles Lee Cross</div>
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
            <i className="fa fa-clock-o"></i> 10 min ago
          </div>
          <a className="card-link" href="#">
            <h5 className="card-title">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              consectetur deserunt illo esse distinctio.
            </h5>
          </a>

          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            omnis nihil, aliquam est, voluptates officiis iure soluta alias vel
            odit, placeat reiciendis ut libero! Quas aliquid natus cumque quae
            repellendus. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ipsa, excepturi. Doloremque, reprehenderit! Quos in maiores,
            soluta doloremque molestiae reiciendis libero expedita assumenda
            fuga quae. Consectetur id molestias itaque facere? Hic!
          </p>
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
                <div className="h5 m-0">@LeeCross</div>
                <div className="h7 text-muted">Miracles Lee Cross</div>
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
            <i className="fa fa-clock-o"></i> Hace 40 min
          </div>
          <a className="card-link" href="#">
            <h5 className="card-title">
              Totam non adipisci hic! Possimus ducimus amet, dolores illo ipsum
              quos cum.
            </h5>
          </a>

          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sunt
            fugit reprehenderit consectetur exercitationem odio, quam nobis?
            Officiis, similique, harum voluptate, facilis voluptas pariatur
            dolorum tempora sapiente eius maxime quaerat.
            <a
              href="https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU"
              target="_blank"
            >
              https://mega.nz/#!1J01nRIb!lMZ4B_DR2UWi9SRQK5TTzU1PmQpDtbZkMZjAIbv97hU
            </a>
          </p>
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
