const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({ storage });

router.post('/pdf-to-docx', upload.single('file'), (req, res, next) => {
  console.log("File Uploaed");
})


module.exports = router;