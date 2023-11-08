const { storage } = require("../firebase/config");
const { ref, uploadBytes } = require("firebase/storage");

async function uploadImage(req, res) {
    console.log(req.body);
    const storageRef = ref(storage);
    // uploadBytes(storageRef, file).then(snapshot => {
    //     console.log(snapshot);
    // })
}

module.exports = uploadImage;