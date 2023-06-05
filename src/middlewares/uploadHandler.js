const multer = require('multer');
const multerGoogleStorage = require('multer-cloud-storage');
const path = require('path');

const uploadHandler = multer ({
    storage: multerGoogleStorage.storageEngine({
        acl: 'publicRead',
        bucket: 'oase-bucket',
        projectId: 'gestari',
        keyFilename: path.join(__dirname, '../config/key.json'),
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname.replace(/\s/g, '')}`);
        }
    }),
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.jpg' && ext !== '.jpeg' && ext !== '.png') {
            return cb(new Error('Only images are allowed'));
        }
        cb(null, true);
    }
});

module.exports = uploadHandler;