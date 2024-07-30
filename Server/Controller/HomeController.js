const homeModel = require("../Models/HomeModel");

module.exports = {
  create: function (req, res) {
    homeModel
      .create({
        imgs: req.files.map((r) => r.path),
        name: req.body.name,
        category: req.body.category,
      })
      .then(() => {
        res.send({ message: "Img Inserted Successfully" });
      })
      .catch((err) => {
        res.send({ message: "Some Error Occurred" + err });
      });
  },
  getAll: function (req, res) {
    homeModel.find().then((results) => {
      res.send(results);
    });
  },
};
