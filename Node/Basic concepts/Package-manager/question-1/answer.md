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

## Files and Folders Created After Project Initialization 

### Package.json file

- Package.json file is a configuration file that contains all important information about your project.
- It is like blue-print of your project.
- It contains version number, descriptions, list of all npm packages.
- when ever you add new package the NPM auto updates package.json file.
- It is lists what you need for project.
- It is require file.

### node_modules:

- It is a library that contains all the packages code file.
- Package.json downloads node_module after running the npm install command.
- Every project has its own node_module depending on requirement of project.
- It contains more than 50,000 files.

### Package-lock.json

- It is auto generated file tha records exact version of every package.
- when you look version of any package in package.json file it will give approximately version, but package-lock.json will give you exact version of package.
- It is recommended file but not require one.
- records what exactly project installed.

### Which file/folder should not be pushed to github

- node_module: It has huge size in GBs cause having lots of files. pushing this file to github is more time consuming process.
- .env: This file contains sensitive data like database passwords, api keys.

###  Which file/folder should  be pushed to github

- Package.json: It contains all the essential information about project.
- Package-lock.json: It provides exact version of packages.
- .gitignore: It excludes files that need not to be publish/pushed. e.g .env, node_modules.
- Readme.md: This file explains your project.
- all source files: The project that you build.

