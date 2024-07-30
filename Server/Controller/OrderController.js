const orderModel = require("../Models/OrderModel");

module.exports = {
  create: function (req, res) {
    orderModel
      .create(req.body)
      .then(() => {
        res.send({ message: "Your order has been placed" });
      })
      .catch((err) => {
        res.send({ message: "Some Error Occurred" + err });
      });
  },
  getAll: function (req, res) {
    orderModel.find().then((results) => {
      res.send(results);
    });
  },
  delete: function (req, res) {
    orderModel
      .findByIdAndDelete(req.params.id)
      .then(() => {
        res.send({ message: "Order Deleted" });
      })
      .catch((err) => {
        res.send("Something went wrong!!!!" + err);
      });
  },
  update: function (req, res) {
    orderModel
      .findByIdAndUpdate(req.params.id, req.body)
      .then(() => {
        res.send({ message: "Order Updated" });
      })
      .catch((err) => {
        res.send("Something went wrong!!!!" + err);
      });
  },
};
