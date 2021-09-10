## Express and Design System

* express makes eveything simple but also we can do without express

* we can't use this command below as we need to include many of it's requirements 
```
node index.js
```

- so we use the packages provided by community i.e. exress so to install express
```
npm install --save express
```
but we also can't use this, as npm install works where the folder knows node is working there so for that we first need to make package.json file by:
```
npm init
```
this command creates package.json for us
so now we can use npm install
```
npm install --save express
```
if we want to see direct live changes on node then we need to use
```
npm install --save-dev nodemon
```
nodemon automatically updates when we write code so to make it active
```
nodemon index.js
```
In some System it might not work so for that
```
npx nodemon index.js
```
this watches index.js so if any changes happens then it updates automatically 

## Extra Notes:
* Let Version 4.1.0 be X.Y.Z where X is big change, Y is changed when features are added and Z for minor bug fixes
* --save-dev keeps the dependencies for development which is not necessary for production but --save keeps for both production and development.
* the url in browser is get i.e. read only
### we can understand more about the respond request by Postman software which is especially used for API testing

<!-- * the codes are -->
	 HTTP response status codes are as below
	> Informational responses ( 100 – 199 )
	> Successful responses ( 200 – 299 )
	> Redirects ( 300 – 399 )
	> Client errors ( 400 – 499 )
	> Server errors ( 500 – 599 )
More Examples:
- 201 updated successfully i.e. created
-  400,401,402 client side error eg. during client validation error i.e. bad request
- 500, 501, 502... Server side error i.e. Internal Server Error
	
* we can find which response status code to be send by if else condn

### In backend we need to be careful in each line for: Security, performance, edge cases...it has bottom to top approach that means each lines are perfec

