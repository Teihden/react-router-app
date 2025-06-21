# React Router Example

## Description

**React-router-app** is a sample project inspired by the [React Router Address Book Tutorial](https://reactrouter.com/tutorials/address-book). 
This application demonstrates the core features of client-side routing in React, including form handling, navigation links, and asynchronous data loading.

## Features

- Client-side routing with React Router
- Asynchronous data loading (contacts, contact details)
- Nested routes
- Form handling for creating and editing contacts
- Navigation through links

## Getting Started

1. Clone the repository:

    ```sh
    git clone <repository-url>
    cd react-router-app
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm run dev
    ```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in React Router app server is production-ready.

Make sure to deploy the output of `react-router build`

- `build/server`
- `build/client`

---

> This application is intended for learning and demonstrating modern approaches to routing in React.
