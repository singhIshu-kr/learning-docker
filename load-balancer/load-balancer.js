const bodyParser = require("body-parser")
const request = require("request");
const app = require("express")();
const httpProxy = require('http-proxy');
const hostName = ["app1", "app2", "app3"];

app.use(bodyParser.text());

app.use((req, res) => {
  let proxyServer = httpProxy.createProxyServer({ target: `http://${hostName[0]}:8000/` });
  proxyServer.on('error',() => res.end());
  console.log('connecting to ',hostName[0]);
  proxyServer.proxyRequest(req, res);
})

// app.post("/post", (req, res) => {
//   var postData = {
//     data: req.body
//   }
//   var options = {
//     method: 'post',
//     body: postData,
//     json: true,
//     url: `http://${hostName[0]}:8000/post`
//   }
//   request(options, function (err) {
//     if (err) {
//       console.error('error posting json: ', err)
//       res.end();
//       throw
//     }
//     res.send("ok");
//   })
// })

// app.get("/get", (req, res) => {
//   res.send(body);
// })

app.get("/hello", (req, res) => {
  console.log("hello yoo");
  res.send("hello");
})

app.listen(9000, (err) => {
  console.log("listening on port 9000")
  err && console.log("ERRORRRR", err);
});
