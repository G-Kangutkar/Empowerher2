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


