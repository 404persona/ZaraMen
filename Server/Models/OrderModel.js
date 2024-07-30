const mongoose = require("mongoose");

var Schema = mongoose.Schema;
var orderSchema = new Schema({
  fname: String,
  lname: String,
  email: String,
  no: Number,
  address: String,
  price: Number,
  created_at: Date,
  status: String,
  order: {
    type: Array,
    items: {
      name: String,
      size: String,
      qty: Number,
      price: Number,
      tprice: Number,
      img: String,
      id: String,
      item: String,
    },
  },
});

module.exports = mongoose.model("order", orderSchema);
