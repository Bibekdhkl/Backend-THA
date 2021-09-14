const express = require('express');
const app = express();
const body_parser = require("body-parser");

//we need body-parser because we can get data from forms by the use of req.body

//app.us e is used to include middleware so as to use on every POST
app.use(express.urlencoded());// This handles data from form tag of HTML
app.use(express.json({extended:true}));
//to handle normal json data

app.post('/',(req,res) => {
      console.log('req.body -> ',req.body);
      res.json({text: req.body})
})
//we get data from post on req.body

app.listen(8000);