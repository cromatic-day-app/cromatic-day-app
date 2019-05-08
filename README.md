# Cromatic Day App

## Introduction

Having a profile is one of the most common features you will need to add on your projects, so today we are going to practice creating one.

We will create a backend REST API using NodeJS and a frontend using React where users will be able to **signup, login, upload a profile picture, check their profiles and edit it.**

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 1 - The REST API

You will start building the app creating the REST API. Create the `app` using the `irongenerator`. Then, create the **user model** so the `User.js` have the following fields:

- **username**, type String, 
- **password**, type String
- **campus**, type String. Possible values: `Madrid`, `Barcelona`, `Miami`, `Paris`, `Berlin`, `Amsterdam`, `México`, `Sao Paulo`,
- **course**, type String. Possible values: `WebDev`, `UX/UI`, `Data Analytics`.
- **image**, type String.

The app will need the following routes: 

| Method  |  Endpoint         |  Parameters               | Return Value |
|---------|-------------------|---------------------------|--------------|
| POST    | `/auth/login`     | username, password        | User logged  |
| POST    | `/auth/signup`    | username, password, campus, course  | User created |  
| POST    | `/auth/upload`    | file                      | User updated |
| POST    | `/auth/edit   `   | username, campus, course  | User updated |
| GET     | `/auth/logout`    |                           | OK Message   |
| GET     | `/auth/loggedin`  |                           | User logged  |


:::info
Remember to test the REST API using Postman, to make sure everything is working! :wink:
:::

