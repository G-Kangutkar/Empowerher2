# Schema Design Fundamentals – Theory

## What schema design is and what a database schema represents:

- Schema design is a blueprint of the project database.
- Schema design shows how data is going to be stored in database.
- database schema represent logical organization of data. 
- Database schema includes tables, its fields, relationships, constraints. 


## Why schema design is required before writing backend code:

- Schema tells us that how data going to be stored.
- Developer should known which kind of data their are going to deal with before writing the code, Hence we need to define the schema first.
- It help developer to write code accordingly so that there will be no mismatch. 
- It helps developer to not write unnecessary code or it reduces the validation coding.

For example:

Take schema as architecture plan of house, you cannot add wiring or plumbing without blueprint. same in application you cannot add or access the data without knowing which table is storing.

## How poor schema design impacts data consistency, maintenance, and scalability:

### Data consistency:

- Poorly defined data type or not defining any constraints cause inconsistence values. 

example, allowing text in numeric field cause you didn't define the field.

- Missing foreign key can cause orphaned records.

example, orders exists without any users.

### Maintenance:

- Poorly define schema makes debugging hard cause you define or not defined the structure that your code needs.

- If your backend logic doesn't matching with schema then you need to refactore it again and again.

### Scalability:

- Poor indexing leads to slow performace.

example, table has millions of records but not proper indexing seraching through it will be so difficult.


## What validations are in schema design and why databases enforce validations (for example: NOT NULL, UNIQUE, DEFAULT, PRIMARY KEY):

- The validations in schema design are a rules and constraints that ensures data stored in database is accurate and reliable. 
- They act as guard so that backend code did not need to handle evey type of error.
- It enforeces the validation to prevent the invalid, incompleted data from being stored in database.
- Schema rules ensures all the services follows the same rules.
- It helps developer so that they did not need to re-check every input data.

example, name cannot be null or email should be unique.

## The difference between a database schema and a database table:

### Database schema :


- It is a blueprint of database.
- It is a entire database structure, more than one entity.
- It containts tables,relationships,constraints, indexes.
- It is as a architecture plan.

### Database table:


- It is container of data.
- It is one entity's data.
- It contains rows and columns.
- It is as a single room in building.

## Why a table should represent only one entity:

- Separate tables for evey entity makes storing, retriving, updating and deleting data easy.
- It gives clarity and consistency about the database.
- If you combine two tables with each other it will cause duplication data, hard to update single data

for example, If students and courses tables combine with each other it will havw multiple duplicate data cause any stuents can have multiple courses or vice versa.

If you want to update any course data you have to change multiple rows also.


## Why redundant or derived data should be avoided in table design:

- Avoiding redundant or derived data keeps your system clean and reliable.
- If data is duplicated in multiple places then updation of that data may or maynot be done in all places.
- Redundant data consumes unnecessary space.
- With no redundant data the maintenace of database becomes easy.


## The importance of choosing correct data types while designing tables:

- We should choose correct datatype before designing the tables,because It provides clean and correct structure for project.
- It will store only correct and valid data.

for example, When you want only boolean value we can define data type as boolean rather than text so it will only store true or false value.


- By defining correct data type can saves disk space.

for example, smaller value like name required small space hence we should use varchar(50) instead of giving text as data type.

- Choosing types accordingly its growth can avoid redesign the data structure in later. 
 
for example, using bigint for ids which going to be grow in millions records, rather than using only int. 