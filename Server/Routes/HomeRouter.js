var express = require("express");
const router = express.Router();
var homeController = require("../Controller/HomeController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "Uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/addImg", upload.array("imgs", 3), homeController.create);
router.get("/imgs", homeController.getAll);

module.exports = router;
