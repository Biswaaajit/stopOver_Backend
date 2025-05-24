

# StopOver Backend

The **StopOver Backend** is a Node.js and Express.js server that powers the travel tracking platform **StopOver**. It handles user authentication and allows users to log and manage their travel records, including map-based location data and visit notes. The API is scalable, secure, and ready to serve the frontend built separately with Next.js.

## 🚀 Features

- **🔐 User Authentication**:
    - Secure registration and login with JWT (JSON Web Token).
    - Middleware protection for authenticated routes.

- **📍 Travel Visit Management**:
    - Add, view, and delete travel visit records.
    - Store city name, country, coordinates, and user notes.
    - Automatically generate visit notes with date and location.

- **🛠️ Middleware Support**:
    - Uses authentication middleware to protect endpoints.
    - Modular routing with Express Router for clean structure.

- **🗄️ MongoDB Integration**:
    - Efficiently stores user details and travel records with Mongoose.
## 🌍 API Base URL  

The StopOver backend is deployed on **Render**. The base URL for API requests:  

**[https://stopover-backend.onrender.com](https://stopover-backend.onrender.com)**  

### 🔐 User API

| Method | Endpoint         | Description           |
|--------|------------------|-----------------------|
| POST   | `/user/signup`   | Register a new user   |
| POST   | `/user/login`    | Log in a user         |

## 📍 Visit API

| Method | Endpoint                | Description                                |
|--------|-------------------------|--------------------------------------------|
| GET    | `/visit/data/:id`       | Get all visits by a user ID (protected)    |
| GET    | `/visit/visitData/:id`  | Get a specific visit by ID (protected)     |
| POST   | `/visit/add`            | Add a new visit record (protected)         |
| DELETE | `/visit/delete/:id`     | Delete a visit by ID (protected)           |

## 💻 Tech Stack

- **Backend**: Node.js, Express.js  
- **Database**: MongoDB, Mongoose  
- **Authentication**: JWT, bcrypt  
- **Middleware**: Express Router, Custom validation  
- **Deployment**: Hosted on [Render](https://render.com)

## Deployment
To downlode all node packages

```bash
  npm install
```

To deploy this project run

```bash
  npm start
``` 

