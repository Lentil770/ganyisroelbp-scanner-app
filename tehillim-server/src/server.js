const mongoose = require("mongoose");

const app = require("./app");
const { PORT } = require("./config");
const Scan = require("../db/scans");
//connect to mongoDB
const { MongoClient } = require("mongodb");
const Student = require("../db/students");
const { currentMonthObj } = require("../functions/misc");
const uri =
  "mongodb+srv://app-user:V8ldG99SDfZU4qNp@ganyisroelbp.his3t.mongodb.net/scanner-site?retryWrites=true&w=majority";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("connected to mongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening at http://localhost:${PORT}.`);
    });
  })
  .catch((err) => console.log(err));

app.get("/scan/:name", (req, res) => {
  const scan = new Scan({
    value: req.params.name,
  });

  scan
    .save()
    .then((result) => {
      Student.updateOne({ studentID: req.params.name }, currentMonthObj, {
        upsert: true,
      })
        .then((result) => {
          console.log(
            result.matchedCount,
            result.modifiedCount,
            result.acknowledged
          );
          //check if new or old, return 200 if new (this month) 201 if not
          res.status(200).json({ message: "db successfully updated" });
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

app.get("/scan", (req, res) => {
  //needs to fetch current students and send.
  Student.find(currentMonthObj)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => console.log(err));
});
/*
//ENDPOINTS:

//submit new scan
accepts: scan value
saves new scan row to db.
finds month, sets user month true.
returns- success true/false, student id/value, list of all months students. 
*/
