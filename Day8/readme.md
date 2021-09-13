## Express Middleware

- Middlewares are those functions which gets executed before the main function is executed which checks whether it is okay to run next function or not

*  We can call multiple functions at a time by using next on (req,res,next) and then calling next() from first function as:
      ```
      pp.get('/mult',(req,res,next) => {
            console.log("first response");
            next();//calling next function
      },(req,res) => {
            console.log("second response")
            res.json(req.query)
      })
      ```
- It is used especially in permission system, authorization like logged in or not.
- Middleware checks if their is authorization call or not then only it will give permission to give API calls also it can check the key on redis or database then can give further access for calls.
- if we don't write res.status(401) explicitly then under fetch module :
      fetch('/').then().catch() then it goes to .then() even it has error but if we give error using res.status(401) then it goes to .catch() here for success we use .then() and for failure we use .catch() which depends upon status code.<br>so status code is used for fetch or axios so to go to .catch and .then
* app.use runs before every api calls so that middleware can be implemented via this and the sequence of use of app.use matters here as it should be called at first if we want to use before all function call but the middleware gets executed after the execution of the main function.

**Why app.get changes it's reponse status after every page refresh?**<br>
*Ans*: Because when the browser finds the same URL then browser caches all the get calls for performance and send the status that is catched in it such that the server doesn't gets the load. 

*  When we send password on URL then password are also catched which creates security issues thus we need to use POST calls in two ways like form-data or raw data in json format

