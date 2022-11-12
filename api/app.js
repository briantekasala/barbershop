var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



var app = express();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://briantekasala:mongoDB@cluster0.xgdekoy.mongodb.net/test",{
    useNewUrlParser:true,
    useUnifiedTopology:true
} , (err)=>{
    if(!err){
        console.log("connect to db")
    } else {
        console.log(err);
    }
})
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require("./routes/index"));
app.use('/reservationList', require('./routes/getReservationList'));
app.use("/makeReservation" , require('./routes/makeReservation'))


module.exports = app;
