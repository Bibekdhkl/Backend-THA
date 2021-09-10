const express = require('express');//Here we include express
const app = express();//then we called the function

//CRUD in rest api => POST GET PUT DELETE
const slash = (req,res) => {
      res.sendStatus(200);//successful response 
      //here since / is called so status is displayed so response message is not shown
      res.send("Hello Slash detected");
      //all the codes below res.send doesn't work
      //res.status(200).send("Hello Slash detected"); it is pipeline which acts as two line codes as above
};

/*    
In res.send we can send anything like files, arrays so it's too much general so we use res.json({a:1}); as it is specific
*/
app.get('/',slash);
// app.post('/',slash);
// app.put('/',slash);
// app.delete('/',slash); all 3 gives the same result

//For localhost:5000/products
app.get('/products',(req,res) => {
      // res.send("Products Displayed");
      res.send(req.query);
});
//localhost:/products?limit=50&q=something&y=10
//here limit,q,y are query params
/* here on URL: localhost:/products?limit=50&q='something&something'&y=10
here something&something is a string so to make it work we need to use encodeURIComponent("something&something") on js console then 
paste the output to that on URL whether it has special character or not like &  */

//This route path will match acd or abcd  
app.get('/ab?cd',(req,res) => {
      res.send('abcd');
})
//for /abbbbbbbbbbcd => ab+cd
//for /abRANDOMcd => ab*cd
//for /abcde where cd is optional => ab(cd)?e
//we also can write regex here instead of '/ab?cd' => /a/ which means it should start with a
// 5000/butterfly or 5000/dragonfly => /.*fly$/
//This stuffs are made simpler by express else we had to write too much on node

//for localhost:5000/user/1/books/2 => /user/:userId/books/:bookId for this dynamic url so we need req.params
app.get('/user/:userId/books/:bookId',(req,res) => {
      console.log(req.query);//it prints on backend console i.e. terminal
      res.send(req.params);//since there's userId variables so we use params which gives js objects
})


app.listen(5000);
//we need to use this to open the server
//we need to create ports as we can keep multiple program in same server so to differentiate between program we use ports
//after the server finds / in localhost:5000 where slash comes after that then the it reads / and calls slash arrow function
//the url in browser is get i.e. read only