const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
// const mongoose = require("mongoose");
require("./db/database");
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/Uploads", express.static("Uploads"));
app.set("secretKey", "Mein Nai Bataon Ga");
var bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Server is Running");
});
const homeRoute = require("./Routes/HomeRouter");
app.use("/home", homeRoute);

const collectionRoute = require("./Routes/CollectionRouter");
app.use("/collection", collectionRoute);

const userRoute = require("./Routes/UserRouter");
app.use("/user", userRoute);

const orderRoute = require("./Routes/OrderRouter");
app.use("/order", orderRoute);

const productRoute = require("./Routes/ProductRouter");
app.use("/product", productRoute);
// database()
app.listen(8080, () => {
  console.log("your server is running on port 8080");
});
