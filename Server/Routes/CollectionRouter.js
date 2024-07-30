var express = require("express");
const router = express.Router();
var collectionController = require("../Controller/CollectionController");
const multer = require("multer");
// // const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const  cloudinary=require('cloudinary').v2;
          
// cloudinary.config({ 
//   cloud_name: 'dp91kpijz', 
//   api_key: '834391595539845', 
//   api_secret: 'i62fqf9bcj6x7qmdfH87T2zHKVA' 
// });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/addCollection",
  upload.single("img"),
  collectionController.create
);
router.get("/collection", collectionController.getAll);

module.exports = router;
