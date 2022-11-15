var express = require("express");
var router = express.Router();

const userData = require("../models/userModel").model;
//async (req, res)
router.post("/", async (req, res) => {
  const data = new userData({
    Name: req.body.Name,
    Password: req.body.Password,
  });

  data.save((err) => {
    console.log(err);
    if (err) {
      res.status(400).send("error saving new user");
    } else {
      console.log("Created new data");
      res.status(200).send("Created new user");
    }
  });
});

module.exports = router;