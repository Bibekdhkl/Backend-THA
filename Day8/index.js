const express = require('express');
const app = express();

//http://localhost:8000/?q=bibek%26dhakal where we got %26 from encodeURIComponent('')
app.get('/',(req,res) => {
      res.status(800);//if send status is used then it returns to response
      res.send("Hello World");
});
//to call this we need to only change the url to localhost:8000.mult
app.get('/mult',(req,res,next) => {
      console.log("first response");
      next();
},(req,res) => {
      console.log("second response")
      res.json(req.query)
})

//to give permission to admin only
//http://localhost:8000/admin?admin=true 
const checkAdmin = (req,res,next) => {
      if(req.query.admin == 'true'){
            next();
      }else{
            res.status(400).send('Only Admins are allowed to view the page');
      }
}
//we can use his checkAdmin to the places we want to check whether user has admin access or not simply by calling checkAdmin function

//app.use doesn't work for the functions calls above 
app.use(checkAdmin);//This middleware is that which runs before every functions 

app.get('/ab+cd',(req,res) => {
      res.send(req.query);
})//here wehavn't called checkAdmin but by the use of app.use it is executed before every url call

const sendRes = (req,res) => {
      res.status(200)
      console.log("Permission Accessed")
      res.send(req.query);
}

app.get('/admin',checkAdmin,sendRes)

//http://localhost:8000/abcd?admin=true&value=true
app.get('/ab?cd', checkAdmin,(req,res) => {
      res.send(req.query);
})

app.listen(8000);