var express = require("express");
var router = express.Router();

// define de dataSchema that you are going to use
const userData = require("../models/userModel").model;

// router

router.get("/", async (req, res) => {
  let username = req.query.Name

  await userData.find({ Name: username }).then((data) => {
    if (data.length == 0) {
      res.status(200).send("Wrong User Name");
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
