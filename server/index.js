const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
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
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  return res;
}
const userSchema = new mongoose.Schema({
  user: String,
  password: String,
  email: String
});
const Users = mongoose.model('user', userSchema);
app.post('/base/login',async function(req,res){
  const query = {
    user: req.body.user,
    password: req.body.password
  };
  const selectUser = await Users.find(query);
  if (selectUser.length) {
    addHeaders(res).status(201).json({
      status: 'success'
    }).end();
  } else {
    addHeaders(res).status(201).json({
      status: 'Not exist',
    }).end();
  }
  // var user_name=req.body.user;
  // var password=req.body.password; 
  // console.log("User name = "+user_name+", password is "+password);
  // res.end("yes");
});

app.post('/base/register',async  (req,res) => {
  const query = { user: req.body.user };
  const selectAllUsers = await Users.find(query);
  // console.log(selectAllUsers);
  if (!selectAllUsers.length) {
    const testUser = await Users.create(req.body);
    addHeaders(res).status(201).json({
      status: 'success',
      data: { user: testUser }
    }).end();
  } else {
    addHeaders(res).status(201).json({
      status: 'Exist'
    }).end();
  }
});

mongoose.connect('mongodb://192.168.1.24/chattyserver').then(() => {
  app.listen(3001,() => {
    console.log("Started on PORT 3000");
  })
});
