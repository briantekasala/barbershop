var express = require("express");
var router = express.Router();

const reservationData = require("../models/reservationModel").model;

router.post("/", async (req, res) => {
  console.log(req.body);

  const data = new reservationData ({
    Name: req.body.Name,
    Phone: req.body.Phone,
    Date: req.body.Date,
    Hour : req.body.Hour,
    DisplacementAddress: req.body.DisplacementAddress,
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
