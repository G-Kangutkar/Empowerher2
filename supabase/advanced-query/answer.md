# Database Relationships

Storing eveything in one table leads to duplicate data, more null values, difficult in update, poor performances. Hence
we need multiple tables to make the updation easy, scale up the performance, no duplication of data. 

The multiple table should be connected to each other so that can you use it, Hence it requires some relationships with each other. 

## There are three types of relationships

### One to One:
- In one to one (1:1) relationship the only one row of table-A is connected to only one row of table-B.
- One record in table is related to one record in other table.

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
- 