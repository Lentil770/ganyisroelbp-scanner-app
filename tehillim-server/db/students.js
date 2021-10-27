const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StudentSchema = new Schema(
  {
    studentID: {
      type: String,
      required: true,
    },
    tishrei: { type: Number },
    cheshvan: { type: Number },
    kislev: { type: Number },
    teves: { type: Number },
    shvat: { type: Number },
    adar: { type: Number },
    nissan: { type: Number },
    iyar: { type: Number },
    sivan: { type: Number },
    tammuz: { type: Number },
    av: { type: Number },
    elul: { type: Number },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
