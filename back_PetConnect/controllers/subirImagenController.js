const { storage } = require("../firebase/config");
const { ref, uploadBytes } = require("firebase/storage");

function uploadImage(file) {
    const storageRef = ref(storage);
    uploadBytes(storageRef, file).then(snapshot => {
        console.log(snapshot);
    })
}

module.exports = uploadImage;