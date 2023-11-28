# SOCIAL CONNECT API

This is the backend app for the Social Connect. It is a video calling app that allows users to connect with each other. It is built with NestJS and Firebase. It uses WebRTC for video calling and Socket.io for real-time communication. It also uses Redis for caching and Elasticsearch for searching.

## Technologies

This API was developed with the following technologies:

- NodeJS
- NestJS
- Firebase
- Firestore
- WebRTC
- Socket.io
- Redis
- Elasticsearch

## Getting Started

Pre-requisites

- Node(LTS version)
- NPM v9.0.0 or higher
- MongoDB

You can get the latest version of NodeJS from [here](https://nodejs.org/en/download/) or you can check the version you have installed on your machine by running the following command in your terminal

```bash
  node -v
```

You can get the latest version of NPM from [here](https://www.npmjs.com/get-npm) or you can check the version you have installed on your machine by running the following command in your terminal

```bash
  npm -v
```

## Installation

Clone the project

```bash
  git clone git@github.com:vicodevv/social-connect-backend.git
```

Go to the project directory

```bash
  cd social-connect-backend
```

Install dependencies

```bash
  npm install
```

Run the code

```bash
  npm run dev
```

## Testing

To run tests, run the following command

```bash
  npm run test
```

## Entity Relationship Diagram

## Authentication

This API uses JWT for authentication. To get a token, you need to register and login. The token is valid for 24 hours. You can use the token to access protected routes. To access authenticated routes, set your authorization header to Bearer [ token ]. Read postman documentation for further details

## Postman Documentation

## Live Link

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

- PORT=your port number
- MONGO_URI=your mongodb uri
- JWT_SECRET=your jwt secret

## API Reference

| Method | Description             | Endpoints             |
| :----- | :---------------------- | :-------------------- |
| POST   | Login a user            | /api/auth/login       |
| POST   | Register a user         | /api/auth/register    |
| GET    | Get all users           | /api/users            |
| GET    | Get a single user       | /api/users/:id        |
| POST   | Create a user           | /api/users            |
| GET    | Get all links           | /api/links            |
| GET    | Get a single link       | /api/links/:id        |
| GET    | Get all links by a user | /api/links/user/:id   |
| POST   | Create a link           | /api/links/create     |
| PUT    | Update a link           | /api/links/update/:id |
| DELETE | Delete a link           | /api/links/delete/:id |

## Authors

- [@vicodevv](https://www.github.com/vicodevv)

## License

[MIT](https://choosealicense.com/licenses/mit/)
