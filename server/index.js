const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// router.get('/',(req, res) => {
//   res.sendfile("index.html");
// });

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
  res.end("registered");
});

app.listen(3001,() => {
  console.log("Started on PORT 3001");
})

