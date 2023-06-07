const path = require('path');
const { Storage } = require('@google-cloud/storage');
const multer = require('multer');

const storage = new Storage({
    projectId: 'gestari',
    keyFilename: path.join(__dirname, '../config/key.json')
});

const bucket = storage.bucket('oase-bucket');

const uploadHandler = multer({ storage: multer.memoryStorage() });

const uploadImage = (file) => new Promise((resolve, reject) => {
    if (!file) {
        reject('No image file');
    }

    const { originalname, buffer } = file;
    const blob = bucket.file(originalname.replace(/ /g, "_"));
    const blobStream = blob.createWriteStream({
        resumable: false,
    });

    blobStream.on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
        resolve(publicUrl);
    })
        .on('error', () => {
            reject('Unable to upload image, something went wrong');
        })
        .end(buffer);
});

module.exports = {
    uploadHandler,
    uploadImage,
};