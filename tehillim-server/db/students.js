const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchemaFields = {
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
};

const StudentSchema = new Schema(studentSchemaFields, { timestamps: true });
// const StudentCopySchema = new Schema(studentSchemaFields, { timestamps: true });

const Student = mongoose.model("Student", StudentSchema);
const StudentCopy = mongoose.model("StudentCopy", StudentSchema);

module.exports = { Student, StudentCopy };
