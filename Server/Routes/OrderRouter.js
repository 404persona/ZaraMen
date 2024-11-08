var express = require("express");
const router = express.Router();
var orderController = require("../Controller/OrderController");

router.post("/addOrder", orderController.create);
router.get("/orders", orderController.getAll);
router.get("/totalsales", orderController.getTotalSales);
router.delete("/delete/:id", orderController.delete);
router.put("/update/:id", orderController.update);

module.exports = router;
