const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// make schema

const userPlanningSchema = new Schema({
  day: { type: String, require },
  hours: [ { type: String , require }],
});


const userPlanning = mongoose.model("userPlanning", userPlanningSchema);
module.exports.model = userPlanning;
module.exports.schema = userPlanningSchema;