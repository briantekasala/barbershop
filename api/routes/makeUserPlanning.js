var express = require("express");
var router = express.Router();

const userPlanningData = require("../models/userPlanning").model;

router.post("/", async (req, res) => {
  console.log(req.body);

  const data = new userPlanningData({
    day: req.body.day,
    hours: req.body.hours,
  });

  data.save((err) => {
    console.log(err);
    if (err) {
      res.status(400).send("error saving new data");
    } else {
      res.status(200).send("added new planning");
    }
  });
});

module.exports = router;
