# TODO API - Node.js + Supabase

A RESTful API for managing todos with user authentication using Node.js, Express, Supabase (PostgreSQL), and JWT.

## Features

- ✅ User Authentication (Register/Login)
- ✅ JWT-based Authorization
- ✅ CRUD Operations for Todos
- ✅ User-specific Todo Management
- ✅ Default Status (pending/complete)
- ✅ Protected Routes
- ✅ Error Handling

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **Authentication**: JWT (jsonwebtoken)
- **Environment Variables**: dotenv
- **Password Hashing**: bcryptjs

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn
- Supabase account

## Setup Instructions

### 1. Clone the Repository

```bash
git clone 
cd authorization-Todo
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the root directory (see `.env.example` for reference)

**How to get Supabase credentials:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to Settings > API
4. Copy the `Project URL` → `SUPABASE_URL`
5. Copy the `anon public` key → `SUPABASE_KEY`

### 4. Database Setup

Run these SQL commands in your Supabase SQL Editor:

```sql
-- Create ENUM type for todo status
CREATE TYPE todos_status AS ENUM ('pending', 'complete');


-- Create users table
CREATE TABLE users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create todos table
CREATE TABLE todos (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    completed status_type DEFAULT 'pending',
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT NOW()
);
```

### 5. Start the Server

```bash
nodemon index.js
```

The server will start on `http://localhost:5600` (or your specified PORT)


## Project Structure

```
authorization-Todo/
├── controllers/
│   ├── users.controller.js      # Register, Login
│   └── todos.controller.js      # CRUD operations for todos
├── middleware/
│   └── auth.middleware.js                # JWT authentication middleware
├── routes/
│   ├── users.route.js          # Auth routes
│   └── todos.route.js          # Todo routes
├── config/
│   └── supabase.config.js            # Supabase client configuration
├── .env                       # Environment variables (not in git)
├── .env.example               # Example environment file
├── index.js                  # Main application file
├── package.json
└── README.md
```

### Authentication Endpoints

#### 1. Register User

**POST** `/user/signup`

Create a new user account.

**Request Body:**
```json
{
  "name": "Kai Azer",
  "email": "kai@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "message": "User registered successfully",
 
}
```


#### 2. Login User

**POST** `/user/login`

Authenticate user and get JWT token.

**Request Body:**
```json
{
  "email": "kai@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
    "message": "login successfully!",
    "id": "f0fefefa-80ed-472e-ba60-a7d9fec9670b",
    "name": "Alex",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZmVmZWZhLTgwZWQtNDcyZS1iYTYwLWE3ZDlmZWM5NjcwYiIsImVtYWlsIjoiYWxleEBnbWFpbC5jb20iLCJpYXQiOjE3NzAyMjUwMjcsImV4cCI6MTc3MDIyODYyN30.W-aRZOVCGcCjNmUnXHxyLwte5fhcxbA78imsWBq80jk"
}
```


### Todo Endpoints

**Note:** All todo endpoints require authentication. Include the JWT token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

---

#### 3. Create Todo

**POST** `/todos/add`

Create a new todo for the authenticated user.

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Buy groceries",
  "completed": "pending"  // Optional: "pending" or "complete" (default: "pending")
}
```

**Success Response (201):**
```json
{
  "message": "TODO created successfully!",
  "data": {
    "id": "uuid-here",
    "title": "Buy groceries",
    "completed": "pending",
    "user_id": "user-uuid",
    "created_at": "2026-02-04T09:31:26.159152+00:00"
  }
}
```


#### 4. Get All Todos

**GET** `/todos/`

Get all todos for the authenticated user.

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "message": "Todos",
  "data": [
    {
      "id": "uuid-1",
      "title": "Buy groceries",
      "completed": "pending",
      "user_id": "user-uuid",
      "created_at": "2026-02-04T09:31:26.159152+00:00"
    },
    {
      "id": "uuid-2",
      "title": "Read book",
      "completed": "complete",
      "user_id": "user-uuid",
      "created_at": "2026-02-03T08:20:15.123456+00:00"
    }
  ]
}
```



#### 5. Update Todo

**PUT/PATCH** `/todos/update/:id`

Update a todo (only if it belongs to the authenticated user).

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Buy groceries and cook dinner",  // Optional
  "completed": "complete"                     // Optional
}
```

**Success Response (200):**
```json
{
  "message": "Todo updated successfully",
  "data": {
    "id": "uuid-here",
    "title": "Buy groceries and cook dinner",
    "completed": "complete",
    "user_id": "user-uuid",
    "created_at": "2026-02-04T09:31:26.159152+00:00"
  }
}
```


#### 6. Delete Todo

**DELETE** `/todos/delete/:id`

Delete a todo (only if it belongs to the authenticated user).

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "message": "Todo deleted successfully",
  "data": {
    "id": "uuid-here",
    "title": "Buy groceries",
    "completed": "pending",
    "user_id": "user-uuid",
    "created_at": "2026-02-04T09:31:26.159152+00:00"
  }
}
```



## Error Response Format

All errors follow this format:

```json
{
  "error": "Error message here"
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `404` - Not Found
- `409` - Conflict
- `500` - Internal Server Error

