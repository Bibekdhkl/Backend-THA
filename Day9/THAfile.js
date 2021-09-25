//------------------------------------THA9------------------------------
//-------------------------------Sending Static Files-------------------

const express = require('express');
const app = express();
const path = require('path');

//we can view images by
//http://localhost:2000/file/swan.jpeg
app.use('/file/:name',function(req,res,next){
      const imagename = req.params.name;
      res.sendFile(path.join(__dirname,"/public/images",imagename))
});     

app.listen(2000);