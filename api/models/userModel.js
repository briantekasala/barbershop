const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Name: { type: String, require: true },
  Password: { type: String, require: true },
});

const userList = mongoose.model("user", userSchema);
module.exports.model = userList;
module.exports.schema = userSchema;
