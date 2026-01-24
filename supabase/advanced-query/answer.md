# Database Relationships

Database Relationship defines how data in one table is connected to data in other table.

Why it is needed:
Storing eveything in one table leads to duplicate data, more null values, difficult in update, poor performances. Hence
we need multiple tables to make the updation easy, scale up the performance, no duplication of data. 


The multiple table should be connected to each other so that can you use it, Hence it requires some relationships with each other. 


## There are three types of relationships

### One to One:
- In one to one (1:1) relationship the only one row of table-A is connected to only one row of table-B.
- One record in table is related to one record in other table.

![Project Logo](https://www.beekeeperstudio.io/assets/img/database-relationships/one-to-one-59751b752058a5d378adc3a9a5ab4f1a7c0b7f2a1bede234aa9a8c2bfb91ee41f7c6c06208d7ae7a00257965313f9a0031578bb8e46bc5d5cbbcded30d5fc454.svg)


#### Example:
- Instagram user has only one user_profile. So In database the users_profile table is only connected to users table.

### One to Many:
- In one to many (1:M) or(1:N) relationship the one row of table-A is connected to many rows of tables-B.
- One record in table-A is related to many records of table-B.

#### Example:
- The book management system has author table and books table.
- In here one author can have many books.
- One author is related to many books from books table.

### Many to Many:
- In one to many (M:M) or(N:M) relationship the many row of table-A is connected to many rows of tables-B.
- Many record in table-A is related to many records of table-B.

![Project Logo](https://599cd.com/tips/access/130514-many-to-many-relationships/defaul8.jpg)


#### Example:
- In E-commerce products can have many categories and category can have many products.
- Students can be enrolled in many courses and course can have many students.