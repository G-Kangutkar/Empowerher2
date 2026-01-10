# Understanding Project Management in NodeJS

## Package Managers

Package Manager is like librarian for your code which gives you all needed packages for your project on your demand.

### Why we need it in Backend:

Package manager has all kinds of libraries that is makes your project builing easy. You don't have to build your project from scratch. 

Without package manager you have to download every tools that is needed for your project and figure out which version works with your project and ensure they all work together.

### Problem without pakage manager:

1. Dependency hell: Without package manager you have to manually download every library and figure out which is compatible with each other.

2. Manual Updates: You have to update every library manually by going to each library's website and downloading new version of it.

3. Most Important problem is time waste.
It dose waste lot of time to manage the library.

## Node Package Manager:

It is a delivery system for Node JS packages that comes automatically when you install node js.

- NPM has more that 2 milion packages that devlopers have created worldwidely.

### Why NPM is important for Node JS:

- NPM has huge ecosystem that gives you access of millions of ready made solutions that someone was already built.
- Every node js devloper uses the NPM so there is common process that eveyone follows.
- NPM automatically figures out which package needs which kind of the dependencies.

### How it helps to manage the dependencies:

- NPM creates file called package.json that keeps all the important data about your project. the exact version that needs to be install. when other person looks at your project they need this file so that when they want to run the project on there machine they just run npm install command and npm reads this file and install all the package that project needs.
- Fast installation and updatations makes creating any project easy that saves lot's of time of devlopers.


## Backend Project Initialization:

### The command to Initialize a Node JS project:

```bash
npm install
```

This is a first step whenever you create the project.


```bash
npm init
```

When you run this command NPM start the setup that asks you bunch of questions like,

- Package name
- Version
- Description
- Entry Point
- GIT repo
- keywords
- License

And after answering this questions npm creates package.json file.
- Here you control evey details of your project
- Time consuming process.

```bash
npm init -y
```

It says yes to all questions and skips those question and directly creates package.json file.

- Fast and auto process.
- Uses default things.