# Database Fundamentals – Conceptual Understanding (Theory)


## Why is db.json not suitable as a database for real projects?

- db.json is file based storage that needs to be read all data before doing any operations on it.
- There is no way that gives only needed data without reading enitre database.

### Performance Issue:

- As your data grows it is become lengthy/ time consuming process to read data.
- db.json uses file lock system, that is when one user try to write any data in db.json this file gets lock till that user completes its work.
- Hence other user needs to wait till first users work gets done.

### Scalability Problem:

- Single file approch is critical for big applications.
- your data from db.json lives in single machine.
- single file database cannot handles multiple requests at a time, so it can't handle real-time applications.

### Reliability:

- If your file crashes during writting operations you could lose all the data. 
- you cannot authorize the data writter as it don't have any authentication feature.


## What are the ideal characteristics of a database system (apart from just storage)?

### Performance:
- You can quickly add, update,delete read data.
- production database handles thousands of queries per sec.

### Concurrency:

- Ability to handle multiple operations at a same time without corrupting database.
- It allows readers and writters to work simultaneously without blocking each other.

### Reliability:

- Ensures that database works correctly and dosen't lose data even things go wrong.
- Onces data is saved it stays saved even if system crashes immediately after.
- It provides automatic backup systems.

### Data Integrity:

- It confirms that data stays accurate and valid according to defined rules.
- If you try to insert invalid data database rejects it.

### Scalability:

- It is ability to handle growth in data and traffic without slowing performance.
- It has two types: 
- Vertical scalling: add more CPU, RAM. it related to hardware.
- Horizontal scalling: adding more severs like mordern db(MONGO DB, PostgreSQL). can be grow infinity.

### Fault Tolerance:

- Ability to operate correctly even when components fails.
- Data exists on multiple server so that one database craches still your data is safe.


## How many types of databases are there? What are their use cases or applications?

Two types of database:

### Relational Database:

- Realtional database is a database that orgnize its data into table with rows and columns format. tables and linked together through keys.
- Table are predefined with fixed numbers of columns with their speific data type.
- Schema is defined before inserting any data.
- It provides ACID properties, 

Atomicity: Transcation either complete fully or not at all.

Consistency: data follows all defined rules and constraints.

Isolation: Concurrent transcaton don't interfere.

Durability: Saved data is persists even after it crashes.

#### Popular database:
PostgreSQL, MySQL, Oracle, SQLite.

#### Example:
- E-commerce platform Amazon:
We use relational database because it has complex relationship between users, products,orders,payments,shippments.

Imagine you have a huge toy shop that runs by one strict superhero having some powers. It need to be strict so that your order toy will not taken by other kid. 

when you buy one toy for example you buy remote control car, that strict superhero check in entire shop for your toy lable it as your name. so that if any other kid buys same car your car is safe for you. Superhero acts as your bodyguard so no one takes your toy while you doing other things. it calls Isolation power.

It will give you your car and take the money from you only if you make your payment successfully other wise it erase all things like it never happened. so if payment fails you don't have to worry about that your money will get deducted. It is called Atomicity power.

If there is only one toy, and both person try to buy at same time the strict superhero only gives that to one kid and tells other kid that it is sold so he can buy other toy and not wait for the same toy which he will not recieved at all. It calls Consistency power that follows all rules like can't sale more than stock.

Durability power it remembers your order even when system crashed.

### Non-Relational Database:

- NoSQL don't use tables with fixed schemas. They are designed for flexibility so that it will handle any data structure.
- Types of NoSQL: 

Document database: stores JSON-like documents. no predefine schema.

Key-value stores: data stores in key-value pairs.

Column-family stores: data orgnaized by columns rather than row.

Graph database: stores relationship as first-class entities.

- You can add new fields without altering entire database.
- can add servers to handle more load.
- data often duplicated across documents so it reduce needs for joins.

#### Popular database:
MongoDB, Redis, Cassandra, DynamoDB.

#### Example

- Social Media Platform Instagram:

We use non-relational database because the data structure is not fixed. 

In social media platform the data can be any format picture, videos, text, picture with text, polls. so we need database which is not having fixed structure.

If we use relational database more rows may left null because the data is changing and db has it's fixed size of table, so it is not good option.

Instagram uses three types of database to process hence it runs smoothly even it has millions of users. 
All databases are NoSQL type.

In this typpe of database we can add new features without re-writting whole database.





