const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reservationListSchema = new Schema({
  Name: { type: String, required: true },
  Phone: { type: String, required: true },
  Day: { type: String, required: true },
  Hour : {type: String , required : true},
  DisplacementAddress: { type: String, },

}, {
  timestamps: true,
});

const ReservationList = mongoose.model('reservationList', reservationListSchema);
module.exports.model = ReservationList;
module.exports.schema = reservationListSchema;