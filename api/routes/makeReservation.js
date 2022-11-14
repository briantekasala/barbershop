var express = require("express");
var router = express.Router();

const reservationData = require("../models/reservationModel").model;

router.post("/", async (req, res) => {
  console.log(req.body);

  const data = new reservationData ({
    name: req.body.name,
    phone: req.body.phone,
    date: req.body.date,
    hour : req.body.hour,
    displacement: req.body.displacement,
    displacementAddress: req.body.displacementAddress,
  });

  data.save((err) => {
    console.log(err);
    if (err) {
      res.status(400).send("error saving new data");
    } else {
      console.log("Created new data");
      res.status(200).send("Created new data");
    }
  });
});

module.exports = router;
