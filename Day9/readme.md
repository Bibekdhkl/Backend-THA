## Notes from the lecture

* console.log(__dirname) => It returns the path of the directory in which it is located

* sendFile() => sends files to frontend from server by automatically sending the content-type header file so that it can be rendered by the browser
* download() => downloads the file that is sent
- sendFile() and download() works in all types of static files

* render() => When we have to work on dynamic files which is sent to the site by rendering into html files
* _dirname => it returns the path of the folder in which it is located which is especially used during deployment
* path.join() => we use path module to concat two paths like as in string concatenation
* Headers in Network of inspect element is just like meta tag in HTML which provides information to the browser regarding the content 
 * jade is smaller type of HTML in which we have flexiblity in Variables like declaring and assigning.
      so to install
      ```
      npm i -s jade
      ```
      And then We can work with jade files as requirements. Jade convers into html after inserting values to the variables so that it can be rendered by the browser. Also similar task where we insert value can be done via eJS. 

* Cookies are used in frontend for authentication and authorization which also can be set via backend