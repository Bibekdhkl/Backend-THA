## Authentication

**Notes Regarding the code structure**
Here, I have just used express-generator to import the boilerplates.
Then added folders like controllers, middlewares to divide the task into organized form so that it won't create hassle in understanding the flow of program

Things we keep in mind for 'register' POST request:
```
* @requires{ email, firstName, lastName, password, confirmPassword} -> we get it in 'req.body'
* Keep in mind the concern of Security, Performance and Edge cases.
* email Validation -> must be a proper email; We use regex to check the validity of the email.
* Password Validation -> Min 6, one uppercase, one lowercase, etc.; we use regex to check the validity of the password.
* Check if there is a JS/ SQL Injection.(String JavaScript ya SQL Commands ki tarah na ho) -> THA
* Check if email already exists.
* Hash Password
* Convert email in lowercase.
* Save
```




* Important functions are written on utils dir
* All the necessary actual logics that involes connection with db are written inside controllers dir
* Tables are created on model dir
* **Sequelize** is an important concepts which is used as it reduces complexity while working on different types of database like redis, postgres or mysql which can be installed by:
```
npm install --save sequelize
```

* Three things that should be remembered while working with backend:
```
      1) Security
      2) Performance
      3) Edge Cases
```

### THA
https://portswigger.net/web-security/learning-path

