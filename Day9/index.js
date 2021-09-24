const express = require('express');
const app = express();
const path = require('path');
//this module provides absolute path

// it returns the path of the folder in which it is located which is especially used during deployment
// console.log(__dirname);

//to tell express we have used JADE
//we have folder path via middleware
app.set("views",path.join(__dirname,"views"));
app.set("view engine","jade");

app.use('/',(req,res) => {
      // res.sendFile('./public/hello.txt','test.txt')
      //we can send html file via this too
      //Sends file names hello.txt in the form of test.txt to frontend
      //but it don't work since it needs absolute path

      // res.sendFile(path.join(__dirname,"/public/file.json"));
      // res.sendFile(path.join(__dirname,"/public/hello.txt"),"text.txt");
      //After this the browser renders the file while we can send by not sending the file name test.txt

      // res.download(path.join(__dirname,"/public/file.json"),"downloadfile.json")
      //downloads the file that is sent

      res.render('index',{title: "Assign_values_to_variables"})
      //It assigns the values to variables inside jade files for dynamic files
      //Unlike sendFile and download we need to specify the path of the file we are going to use

      res
      .status(201)
      .cookie("test-cookie","test")
      .cookie("test2","test",{
            expire: new Date(Date.now() + 8 * 3600000)
      })
      .redirect(301,"/admin") 
      //It has multiple pipelines
})

//listens at a port
app.listen(5000);