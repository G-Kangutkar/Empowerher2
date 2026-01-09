## Node Js Architecture

Basic Concepts

### Javascript engine:

Javascript uses V8 engine of chrome which is super fast. It executes Javascript code. It also manages the memory and optimizes code execution.

### Node js core APIs:

- Core APIs are pre-installed modules that comes with node js.
- They provides functionality for building server-side applications.
-Some examples of Core PIs: 

1. File System.

2. HTTP/HTTPS.

3. Path

4. OS

5. Events

6. Crypto

7. URL

8. DNS

9. Timers

10. Worker Threads


### Event Loop:

- It makes Node Js non-blocking. 
- It continuously checks for task to execute.
- When any task taking more time it goes back to queue and with help of event loop the completed task get executed. 

### Native bindings:

- Native bindings is a bridge to system calls. 
- They allow javascript to call high performance.
- It can access OS-level features.
- It manages the memory.



## Libuv:

- It is a library written in C language that handles asynchronous tasks. 
- It compiles and executes JS.
- JS uses Libuv for communicating with OS.
- Libuv is a *Heart* of Node JS.
- It can be used in any platform i.e windows, mac, linux. 
- Libuv also manages the event loop and thread pool.


## Thread Pool:

- Thread pool is a collection of pre-created worker threads that ready to execute tasks. 
- Thread pool is manages by Libuv.
- There are 4 Default threads.
- Event loop is a main thread that assigns the blocking operations to the threads.
- One of threads picks the task and handles the requests.
- When thread completes the task it notifies the main thread.
- We can change the thread pool ize.
- When all 4 threads are busy that time other tasks get delayed.
