const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const router = express.Router();
const app = express();


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// router.get('/',(req, res) => {
//   res.sendfile("index.html");
// });

const addHeaders = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  return res;
}
app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});

app.post('/register', function (req,res) {
  // console.log(req);
  var user_name = req.body.user;
  var password = req.body.password;
  var email = req.body.email;
  console.log(user_name, password, email);
  addHeaders(res).end("registered");
});

app.listen(3001,() => {
  console.log("Started on PORT 3001");
})

