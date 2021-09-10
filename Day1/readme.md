## Redis Installation

### 1) For Windows
- Enable WSL from "Turn Windows features on or off settings"
- Restart the machine
- Install Ubuntu20.04 from Windows Store
- Open Ubuntu and setup name and password
	- Run the following commands:
		```
		sudo apt-get update
		sudo apt-get upgrade
		sudo apt-get install redis-server
		sudo service redis-server restart
		redis-cli
		```
	Redis-cli starts redis client where we can run any command as it connects the local server

### 2) For Linux
Run the commands:

		sudo apt-get install redis-server
		sudo service redis-server restart
		redis-cli

-----------------------------------------------------------------------

After running redis-cli we see
127.0.0.1:6379> here, 127.0.0.1 is the IP address of your machine and 6379 is the port on which linux server is running
so, when you type PING it gives PONG which shows redis is successfully installed on your machine

-----------------------------------------------------------------------

## Command USAGE

Here, Commands are not case sensitive which means SET = set, GET = get and so on...

- SET key value = to set the value in key
- GET key = to display the value of the key
- ttl key = ttl(time to live) this means the total time left for expiry of the key
- KEYS * = to display all the keys
- DEL key = to delete the key 
- FLUSHALL = to delete all keys
- EXISTS key = to check whether the key exists or not
- expire key time = it sets the expiry time for the key in second
- setex key time value = we can keep the expiry time of a key during the time of it's creation in seconds
	
-----------------------------------------------------------------------

### For Arrays

- LPUSH array value = lpush is left push which means pushing a value to the array from left side
- RPUSH array value = right push adds value in an array from right
- LRANGE array start stop = it's like for loop where start is 0 and stop is -1(last element) for printing all the elements in array
- LPOP array = removing a element in array from left
- RPOP array = removing an element in array from right

-----------------------------------------------------------------------


### For Sets

It is an array but we can't add the same value again in sets so it prevents from repetition of a value

- SADD myset value = sadd creates a new set if the set doesn't exist and add teh value into the set
- SMEMBERS myset = it displays all the values stored at the key

while we can clear keys and value using flushall

-----------------------------------------------------------------------

### For Object/Hash

In redis, objects are called hash

key{
	field:value
	field:value
}

- HSET key field value = it initializes the object if it is not created and assigns the value associated with the object
- HGET key field = it displays the value in the field
- HGETALL key = it displays all the field and values simulaneously
- HDEL key field = it deletes specific field along with its value
- HEXISTS key field = it tells whether the field exists or not by returning the integer 1 for exists and 0 for doesn't exist

-----------------------------------------------------------------------

## Postgres Notes

- Install Postgres from their website as per the machine

### Running Postgres
	sudo su - postgres = on terminal type this to enter postgres with username postgres
	psql = after this you are able to enter postgres command
	\conninfo =  to see whether connection successful or
