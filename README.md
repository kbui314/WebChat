# Web Chat Application

Web Chat Application is a basic chat application where users can sign up and message with others users. The technology stack that this application use is MongoDB, Express, React, and Node.js.

## Function Requirements
* A user is able to register in order to use the application.
* A user can login to the application.
* A user can send messages in a conversation.
* A user can add other users into a conversation.
* A user can recieve messages in a conversation.
* A user can see a timestamp for each message.
* A user can see a list of conversations that he/she is currently in.

## Build
Import the project. In a terminal type:
```
git clone https://github.com/kbui314/WebChat.git
```
Install the required dependencies:
```
npm install
```
To run the React application:
```
cd react/webchat
npm start
```
To run the MongoDB database:
```
cd server/db
docker-compose up
```
Once the database is up and running, we need to login to the database with the specified credentials.
In a separate terminal:
```
docker exec -it webchatdb-mongodb bash
mongo -u <username> -p <password> --authenticationDatabase webchatdb
```
The username and password arguments are the values set in init-mongo.js in the keys 'user' and 'pwd'. Set the the values of 'user' and 'pwd' to credentials of your choosing.

To run the server:
```
cd server
npm run start
```