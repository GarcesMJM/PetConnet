const { db } = require("../firebase/config");
const { collection, addDoc } = require("firebase/firestore");

async function uploadPost(req, res) {
    console.log(req.body);
    const { desc, post_img, date } = req.body;
    const docRef = await addDoc(collection(db, "publicaciones"), {
        descripcion: desc,
        imagen: post_img,
        fecha_hora: date
    });
    const id = docRef.id;
    console.log("Publicación creada con ID: ", id);
    res.send(id);
    res.end();
}

module.exports = uploadPost;