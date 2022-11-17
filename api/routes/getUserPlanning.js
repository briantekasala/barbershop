var express = require("express");
var router = express.Router();
const userPlanning = require("../models/userPlanning").model;

router.get("/", function (req, res) {
  userPlanning.find({}).then((data) => {
    res.status(200).send(data);
  });
 
});

module.exports = router;
