const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationListSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: Date, required: true },
  hour : {type: String , required : true},
  displacement: { type: Boolean, required: true },
  displacementAddress: { type: String, },

}, {
  timestamps: true,
});

const ReservationList = mongoose.model('reservationList', reservationListSchema);
module.exports.model = ReservationList;
module.exports.schema = reservationListSchema;