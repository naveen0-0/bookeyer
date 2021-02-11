//! Importing Packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const cookieParser = require('cookie-parser');
const ConversionRoutes = require('./router');

//! Initialising App
const app = express();

//! Middleware
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json())
dotenv.config();
app.use(cookieParser())
app.use(ConversionRoutes);
app.use(express.static(__dirname + "/uploads"))

//! Database Connection
const conn = mongoose.createConnection("mongodb://localhost/books", { useUnifiedTopology: true, useNewUrlParser: true });

mongoose.connect("mongodb://localhost/books", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
  .then(() => console.log("Mongo Success"))
  .catch(() => console.log("Mongo Failure"))

//! Init gfs
let gfs;
conn.once('open', () => {
  gfs = Grid(conn.db, mongoose.mongo)
  gfs.collection('uploads');
})


//! Creating a Storage Engine
const storage = new GridFsStorage({
  url: "mongodb://localhost/books",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      const filename = file.originalname;
      const fileInfo = {
        filename: filename,
        bucketName: 'uploads'
      };
      resolve(fileInfo);
    });
  }
});

const upload = multer({ storage });



//! Uploading a file to database
app.post('/upload', upload.single('file'), (req, res) => {
  res.send({ uploaded: true })
})


//! Getting alll the files
app.get('/books', (req, res) => {
  gfs.files.find().toArray((err, files) => {
    if (!files || files.length === 0) {
      return res.status(404).json({
        err: "No files exiist"
      })
    }
    return res.json(files)
  })
})


//! Getting a Single File
app.get('/books/:filename', (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists"
      })
    }
    const read = gfs.createReadStream(file.filename);
    read.pipe(res)
  })
})


//! Production Build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}


//! Listening PORT
app.listen(process.env.PORT, () => {
  console.log(`Server running on http://localhost:${process.env.PORT}`);
})