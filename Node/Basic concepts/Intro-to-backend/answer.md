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
