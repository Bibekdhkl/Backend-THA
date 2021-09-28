## Practice SQL and Foreign Keys

Open command prompt
```
> psql -h localhost -p 5432 -U postgres

> psql -u postgres
```

**Alwasys use ; for commands**


```
> DROP DATABASE IF EXISTS devs;

> CREATE DATABASE devs;

> GRANT ALL PRIVELEGES ON DATABASE devs TO devnest;

> \l ---> LOOK ALL DATABASES IN THE SYSTEM

> \c devs  ----> CONNECT TO OUR DATABASE devs
```

### Creating Company Database
```
> CREATE TABLE COMPANY(
	id INT PRIMARY KEY NOT NULL,
	NAME TEXT NOT NULL,
	AGE INT NOT NULL,
	ADDRESS CHAR[50],
	JOIN_DATE DATE,
	SALARY REAL);
```
```
> DROP TABLE COMPANY;

LOOK ALL THE TABLES
> \d

MORE INFO ABOUT TABLES 
> \d COMPANY
```
```
> CREATE TABLE DEPARTMENT(
	ID INT PRIMARY KEY NOT NULL,
	DEPT CHAR[50] NOT NULL,
	EMP_ID INT NOT NULL
);
```
### SIMILAR TO CREATING FOLDERS INSIDE OUR DISK DRIVES, WE USE SCHEMAS
```
> CREATE SCHEMA myschema;

To Create INSIDE SCHEMA
> CREATE TABLE myschema.company(          
	ID INT NOT NULL,
	NAME CHAR(20) NOT NULL,
	AGE INT NOT NULL,
	ADDRESS varCHAR[25],
	SALARY DECIMAL(18,2),

	PRIMARY KEY(ID),
	);

We canot delete all the data inside the table using
> DROP SCHEMA myschema;
So we need to use this to delete all the data
> DROP SCHEMA myschema CASCADE;

INSERTING DATA INTO TABLE company OUTSIDE SCHEMA
> \d myschema.company ;

> INSERT INTO company(ID,NAME,AGE,ADDRESS,SALARY) VALUES (1,'Paul',32,California, 2000.00,'2001-07-13');
```
### Also, to count data in the table:
```
> SELECT * AS "RECORDS" FROM COMPANY;
> SELECT * FROM COMPANY WHERE AGE>=25 AND SALARY>=65000;
> SELECT * FROM COMPANY;
```

### To Update data
```
> UPDATE COMPANY SET SALARY=15000 WHERE ID=3;
```

### To Delete data
```
> DELETE FROM COMPANY WHERE ID=2;
```