const bodyParser = require("body-parser")
const fs = require("fs")

const app = require("express")();

const data = [];

app.use(bodyParser.json());

app.post("/post", (req, res) => {
  data.push(req.body.data);
  fs.writeFile("/app/data.json", JSON.stringify(data), err => err && console.log(err))
  res.send("ok");
})

app.get("/get", (req, res) => {
  let data = JSON.parse(fs.readFileSync("/app/data.json"))
  res.send(data);
})

app.listen(3000, (err) => {
  err && console.log("listening on port 3000")
});
