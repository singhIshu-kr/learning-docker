const bodyParser = require("body-parser")
const request = require("request");
const app = require("express")();

app.use(bodyParser.text());

const hostName = "db"

app.post("/post", (req, res) => {
  var postData = {
    data: req.body
  }
  var options = {
    method: 'post',
    body: postData,
    json: true,
    url: `http://${hostName}:3000/post`
  }
  request(options, function (err) {
    if (err) {
      console.error('error posting json: ', err)
      res.end();
      throw err
    }
    res.send("ok");
  })
})

app.get("/get", (req, res) => {
  request(`http://${hostName}:3000/get`, (err, r, body) => {
    console.log(body)
    res.send(body);
  })
})

app.listen(8000, (err) => {
  console.log("listening on port 8000");
  err && console.log("ERROR OCCURED",err);
});
