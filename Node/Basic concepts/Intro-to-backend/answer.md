# Node Js

Basic Concepts.


## Role of Frontend

frontend is a part of application that users directly interacts with . It is eveything that you see on website.  
for example: 
buttons, forms, colors

### key responsibilities of frontend are:
User Interface:UI is how website looks. It is a representation of website. i.e colors, design, fonts.

User Experience: UX is a way that user interacts with applications. it can be clicking buttons, filling forms.

Client side logic handling: It handles some logics that doesn't require servers requests. like form validations, displaying dynamic data, btton clicks.

communication with backend: It sends user requests to server and displays server response to user.

### Example

Myntra website :
Frontend is the way data is represented on webite.

User interface: All products, colors, forms, buttons, information of products.

User Experience: Clicking add to card button, for login require to fill both fields.

Communcation with backend: sending request when you open the website to fetch the data, telling server to place order of products.

## Role of Backend

backend is a part of application that runs on server. users are not directly interacts with backend but it handles all the fuctionality.

### Key responsibilities of backends are:
Business logic: It is a rules of your application. It tells how your applications will run. like calculating prices, applying discounts.

Data mangement: storing, retriving, deleting, updating data from database.

Authentication: Indentifying role of user and controlling the resources permissions.

Server side validation: It confirms data is safe and secure before processing it.

Security: It protects sensitive data, encrypting passwords, managing sessions.

### Example

Myntra server: Backend is to take the request from client and process it.

Authentication: server checks if client is logged in or not if yes then it will fetch the data from database.

Business logic: If client is is logged in process the order else taking client to back to the login page.

Data mangement: It retrives, stores, deletes, updates data of user/client.

## Business Logic

Business logic is a set of rules, calculations and decision making process that tells how your application going to work.

It tells how your data is going to be processed, what rules it need to follow and what calculations is needed to be done.

### Example

E-commerce application: 

- It has rules for discount for first time users and other
 - Not processing order if products is out of stock 
 - Shippment fees on particular orders 
 - Return policies.


Banking application:

- It has rules for eligibility 
- Limit on user transactions
- Minimum balance reuirement
- Cannot withdrow more than account balance.

Ubar application:
- It has rules for increasing price when the peak time like time when there is more traffic
- Providing authentication before starting journey.
 

## Client-Server Model

It is a architceture that where divided it tasks and workload into two parts client and server.


- Client who asks for services
 - Server who provideds it.
Client requests for services, it is present on users device can be any application or browser.

Server that waits for client request, it process request and sends response. it is present on big machines i.e data centers.

Network is a road where request and response travels, it is a platform that used when communicating between client and server. 
it uses protocols like http, https, tcp/ip.


### Example

Intagram application:

When you open instagram app, your app is a client that sends request of a service to server by using internet.

Instagram server process that request => 
- checks if user is logged in or not 
- if yes then it fetches its data from database
- sends it to client through the internet. 
- client recivies the response 200 ok => displays it on app to user.

## Three Tier Architecture

It is a client-server software architecture that divides application in three logical layers.
Which is Tier-1, Tier-2, Tier-3.

Tier1: 

- It is a presentation layer. 
- Client side which displays the layout of website. i.e colors, buttons, forms, images, animations.
- It requests the service from server and presents the response.
- It includes user interface and user experience.
- Technologies are HTML, CSS, React, Angular

Tier-2:

- It is a Application layer.
- It is a backend or a business logic.
- It takes requests from client process it and give backs the response.
- It protects the sensitive data, Provides Authentications.
- It applies business logic on client requests.
- Technologies are Node js, Express

Tier-3:

- It is a data layer.
- It is a database that stores and manages the data.
- It performaces CRUD operations on data.
- It provides data to application layer.
- Technologies are MySQL, MONGO DB, AWS cloud.

### Why It is Used:

- The three tier architecture is a safe and secure for any application.
- It is seperated from each other. Tier-1 cannot directly communicates with Tier-3.
- If Tier-1 is failed it won't affect to other layers. so the application data stays safe.
- If Tier-2 failed then it gets difficult to communicate between client and data server. but data in servers stays safe.
- If Tier-3 fails the whole application crashes.
- This architecture prvides Security so that applications data is safe from cyber attacks. 
- Don't have to save all business logic at frontend that can be easily access by anyone.


- Communication Flow:
  
  *Tier-1 client makes request to Tier-2 i.e Backend.*
  
  *Tier-2 takes client request to the data server i.e Tier-3.*
  
  *Tier-3 gives response to Tier-2.*
  
  *Tier-2 takes that response and passes to Tier-1, Client displays it o to user.*
  


## Javascript as a Backend language

It is used to write code for backend logic that will work on server. It is possible by node js, which is a runtime environment that allows javascripts to run ouutside of browser.

### Performance:

Node JS runs on chrome V8 engine which is super fast.
It is event-driven and non blocking I/O system that is good for heavy I/O applications.
Single language for full stack applicatons.
It gives fast deployment and it is easy to learn.

### Ecosystem:

It has huge ecosystem that is its node package manager.
It has 2+ millions available packages .
It can handle asynchronous multiple tasks and supports Json format.

### Popular backend frameworks:

Express JS, Next JS, Fastify JS, Koa JS. 


