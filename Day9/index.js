const express = require('express');
const app = express();
const path = require('path');
//this module provides absolute path

// it returns the path of the folder in which it is located which is especially used during deployment
console.log(__dirname);

app.use('/',(req,res) => {
      // res.sendFile('./public/hello.txt','test.txt')
      //Sends file names hello.txt in the form of test.txt to frontend
      //but it don't work since it needs absolute path

      // res.sendFile(path.join(__dirname,"/public/hello.txt"),"text.txt");
      //After this the browser renders the file while we can send by not sending the file name test.txt

      res.download(path.join(__dirname,"/public/file.json"),"downloadfile.json")
      //downloads the file that is sent

      
})

//listens at a port
app.listen(5000);