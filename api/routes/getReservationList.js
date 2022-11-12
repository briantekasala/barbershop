var express = require("express");
var router = express.Router();
const reservationData = require("../models/reservationModel").model;

router.get("/", function (req, res) {

  reservationData.find({}).then((data) => {
    res.status(200).send(data);
  });
 
});

module.exports = router;
