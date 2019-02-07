const bodyParser = require("body-parser")
const request = require("request");
const app = require("express")();

app.use(bodyParser.text(),(req, res, next)=>{
  console.log(req.url)
  next();
});

const hostName = ["app1","app2","app3"];

app.post("/post", (req, res) => {
  var postData = {
    data: req.body
  }
  var options = {
    method: 'post',
    body: postData,
    json: true,
    url: `http://${hostName[0]}:8000/post`
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

app.get("*", (req, res) => {
  request(`http://app1:8000/get`, (err, r, body) => {
    res.send(body);
  })
})

app.get("/hello",(req, res)=>{
  console.log("hello yoo");
  res.send("hello");
})

app.listen(9000, (err) => {
  console.log("listening on port 9000")
  err && console.log("ERRORRRR",err);
});
