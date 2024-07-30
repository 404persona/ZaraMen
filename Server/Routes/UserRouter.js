var express = require("express");
const router = express.Router();
var userController = require("../Controller/UserController");

router.post("/signup", userController.create);
router.post("/login", userController.authenticate);
router.get("/users", userController.getAll);
router.delete("/delete/:id", userController.delete);
router.put("/update/:id", userController.update);

module.exports = router;
