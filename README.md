# Express TS Template Starter

A simple and efficient template for building **Express.js** applications with **TypeScript** using MCV architecture. This project comes pre-configured with **ESLint**, **Prettier**, and **TypeScript**, saving you time and effort when starting a new project.

## Features

- **TypeScript**: Strongly typed JavaScript for a better development experience.
- **Express.js**: Web framework for building server-side applications.
- **Socket.io**: Real-time communication support via WebSockets.
- **Prettier**: Automatic code formatting to maintain consistency.
- **ESLint**: Ensures cleaner and more maintainable code.
- **Dotenv**: Simple environment variable management.

## Why Use This Template?

This template handles all the setup you need when starting a new **Express** and **TypeScript** project. It eliminates the need to configure **Prettier**, **ESLint**, or **Socket.io**, letting you focus directly on writing your application logic.

### Tech Stack

- **Express.js**: Fast, minimalist web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Socket.io**: Enables real-time, bidirectional communication between clients and servers.
- **Prettier & ESLint**: Ensures a consistent code style and catches potential issues.

## API Routes EXAMPLES

The API uses the prefix `/api/` for all routes. Example CRUD routes for user management:

- **GET** `/api/users`: Retrieve all users.
- **GET** `/api/users/:id`: Retrieve a user by their ID.
- **POST** `/api/users`: Create a new user.
- **PUT** `/api/users/:id`: Update a user by their ID.
- **DELETE** `/api/users/:id`: Delete a user by their ID.

These routes are set up in `src/routes/userRoutes.ts` and can be easily extended as needed.

## Mock Data

The `mock/` folder contains a JSON file (`users.json`) that is used as example data throughout the project. The file includes mock user data for testing purposes:

```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "age": 30
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "age": 25
  }
]
```
