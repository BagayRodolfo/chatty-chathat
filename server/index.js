const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();

app.listen(3000,() => {
  console.log("Started on PORT 3000");
})

router.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  console.log("User name = "+user_name+", password is "+password);
  res.end("yes");
});