app.get("/allscans", (req, res) => {
  Scan.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});
app.get("/allsstudents", (req, res) => {
  Student.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});
