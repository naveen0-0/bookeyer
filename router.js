const router = require('express').Router();
const multer = require('multer');
const path = require('path')
const fs = require('fs');
const crypto = require('crypto');


//* Storage Engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/")
    },
    filename: function (req, file, cb) {
        cb(null, crypto.randomBytes(64).toString('hex') + path.extname(file.originalname))
    }
})
const upload = multer({ storage })


//* Docx to Pdf
router.post('/docx-to-pdf', upload.single('file'), (req, res) => {
    console.log("File Uploaded");
})

module.exports = router;