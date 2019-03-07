const bodyParser = require("body-parser")
const fs = require("fs")

const app = require("express")();

const data = [];

app.use(bodyParser.json());

app.post("/post", (req, res) => {
  console.log(req.body,";dfnssad'kgnlfads")
  let data = JSON.parse(fs.readFileSync("/app/data.json"))
  data.push(req.body.data)
  fs.writeFile("/app/data.json", JSON.stringify(data), err => err && console.log(err))
  res.send("ok");
})

app.get("/get", (req, res) => {
  console.log(JSON.parse(fs.readFileSync("/app/data.json")),"gettttt")
  let data = JSON.parse(fs.readFileSync("/app/data.json"))
  res.send(data);
})

app.listen(3000, (err) => {
  console.log("listening on port 3000");
  err && console.log(err,"error.");
});
