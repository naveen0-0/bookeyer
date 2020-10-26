//! Importing Packages
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
// const ApiRoutes = require('./routes/api');

//! Initialising App
const app = express();

//! Middleware
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.json())
dotenv.config();



//! Database Connection

const conn = mongoose.createConnection("mongodb://localhost/books",{ useUnifiedTopology:true,useNewUrlParser:true });

//Init gfs
let gfs;
conn.once('open',() => {
   gfs = Grid(conn.db,mongoose.mongo)
   gfs.collection('uploads');
})

//* Creating a Storage Engine

const storage = new GridFsStorage({
  url: "mongodb://localhost/books",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

//! Routes
// app.use(ApiRoutes);


//! Uploading a file to database
app.post('/upload',upload.single('file'),(req,res)=>{
   res.send(true)
})

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