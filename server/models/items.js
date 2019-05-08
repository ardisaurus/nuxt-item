const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Item = new Schema({ name: { type: String } }, { collection: "myItems" });
module.exports = mongoose.model("Item", Item);
