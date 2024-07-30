const collectionModel = require("../Models/CollecionModel");

module.exports = {
  create: function (req, res) {
    collectionModel
      .create({
        img: req.file.path,
        category: req.body.category,
      })
      .then(() => {
        res.send({ message: "Item Inserted Successfully" });
      })
      .catch((err) => {
        res.send({ message: "Some Error Occurred" + err });
      });
  },
  getAll: function (req, res) {
    collectionModel.find().then((results) => {
      res.send(results);
    });
  },
};
