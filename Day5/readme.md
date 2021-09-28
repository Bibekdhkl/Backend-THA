## NodeJS

* Browser can't interact with the system so node was build differently to make it able to access everything on the system.

### CRUD operations using fs module;
fs is a package of node js among many other packages.

First we need to import the fs module using require:
```
var fs = require("fs");
```

creating a new directory using fs
```
fs.mkdirSync("dir_name");
```

to create a file inside a directory:
```
fs.writeFileSync("dir_name/file_name.txt" , "hello world" , (err)=> {
       if(err)
            {
             console.log(err);
       }
    }
 );
 ```

to update a file:
```
fs.appendFileSync("dir_name/file_name.txt" , " Appended");
```

Reading a file:
```
fs.readFileSync("dir_name/file_name.txt");
 ```

This will give a buffer so to improve the performance the systems reads file not as a whole chunk but in various parts; But is we want to read the full file we can do so by:
```
fs.readFileSync("dir_name/file_name.txt", "utf-8"); 
```

to rename the file:
```
fs.renameSync("dir_name/file_name.txt" , "dir_name/file_name2.txt");
```

to write the file and replace prev data with new one:
```
fs.writeFileSync("dir_name/file_name2.txt" , "Namaste Duniya");
```

to delete a file:
```
fs.unlinkSync("dir_name/file_name.txt");
```

to delete a directory:
```
fs.rmdirSync("dir_name");
```

## Example of using reqire on our program
 Let's make 2 files for this and name one index.js and other as req_index.js.

 Now for index.js use following code:

 ```   
var Test = require("./req_test");
var obj = new Test();
console.log(obj.print());
```

 For req_index.js:
```
class Test {
    print() {
        console.log("inside req_index");
    }
}

class Test2 {
    print() {
        console.log(">>>>>>>>>>>>");
    }
}

module.exports = Test;
```
 on execution on index.js this will give us output as:
 ```
  inside req_index
  ```
 since the exported module is class test, it has a method print which is being logged 
 this way require is similar like importing