const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scanSchema = new Schema(
  {
    value: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Scan = mongoose.model("Scan", scanSchema);

module.exports = Scan;
