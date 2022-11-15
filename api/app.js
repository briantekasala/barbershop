var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var app = express();
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://briantekasala:mongoDB@cluster0.xgdekoy.mongodb.net/test",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (!err) {
      console.log("connect to db");
    } else {
      console.log(err);
    }
  }
);
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/index"));
app.use("/reservationList", require("./routes/getReservationList"));
app.use("/makeReservation", require("./routes/makeReservation"));
app.use("/makeUser", require("./routes/makeUser"));
app.use("/getUser", require("./routes/getUser"));

module.exports = app;
