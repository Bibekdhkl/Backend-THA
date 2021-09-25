## Deployment and CI/CD

* We setup Servers via AWS in this lecture
* Cloud computing is where we make our server in our desired virtual machine just like dual booting windows and linux where both the OS don't have any types of connection with eachother. Same goes to setting up servers via AWS in which we need to setup servers on our desired OS.

### Notes on Setting up Server on Virtual Machine
* In Configuring Security Group we need to add Custom TCP in our Port like 3000,2000,etc which is used to differentiate between multiple API layers so that we can access the port from anywhere
* After setting up a instance, it's like we have got a new laptop
* SSH(Secure Shell) client is like connecting two laptops via teamviewer where internally SSH has been set up so SSH is used to connect two device.
* We need to setup npm and nvm on the the server by connecting with the server IP Address via terminal by following the guides after setting up the VM
* To see all nvm installed
```
nvm ls
```
* To choose the versions of our choice
```
nvm use v15 (installs version 15)
nvm use v12 (installs version 12)
```
The different versions of nvm is to be used on the type of projects we're using.
* To run port as per our wish we need to use command
```
PORT=8080 npm start
```
After this command the server gets running on 8080 port

* To run NodeJS server in background
> we need to use **forever** npm package or pm2 which can be installed by
``` 
npm install forever -g 
```
> To start the server 
 ```
 forever start .bin/www
 ```
we can know which file runs when the server starts by going to package.json and then looking for scripts{start: .....}
But we need to assign a port for this too
```
forever start PORT=8080 .bin/www
```
If it doesn't works then we need to edit www file on which we need to edit as normalizePort('8080')
we can know which is running in background by:
```
forever list
```
