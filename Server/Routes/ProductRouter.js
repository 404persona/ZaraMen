var express = require("express");
const router = express.Router();
var productController = require("../Controller/ProductController");
// const multer = require("multer");
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "Uploads");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// const upload = multer({ storage: storage });
const multer = require("multer");
const path = require("path");

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads");  // Set the upload directory
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);  // Get file extension
    cb(null, uniqueSuffix + extension);  // Save with unique name and original extension
  },
});

const upload = multer({ storage: storage });

router.post("/addProduct", upload.array("imgs", 4), productController.create);
router.get("/products", productController.getAll);
router.delete("/delete/:id", productController.delete);
router.put("/update/:id", upload.array("imgs", 4), productController.update);
module.exports = router;
