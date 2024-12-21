# Blog Project Backend

## 🚀 Project Overview
The **Blog Project Backend** is a robust API-driven backend system for a blogging platform where users can create, update, and delete their blogs. It features a secure authentication mechanism, role-based access control, and a public API for viewing blogs with search, sort, and filter functionalities. Admins have special permissions to manage users and their blogs.

## 🌟 Features

### User Roles
- **Admin**
  - Can delete any blog.
  - Can block users.
  - Cannot update blogs.
- **User**
  - Can register and log in.
  - Can create, update, and delete their own blogs.

### Authentication & Authorization
- **Secure JWT-based Authentication**
- **Role-based Access Control** for Admin and User roles

### Blog API
- **Public API** to fetch blogs with options for:
  - Search by title or content
  - Sort by fields (e.g., creation date, title)
  - Filter by author

### Admin Actions
- Block users
- Delete any blog

---

## 🛠️ Technologies Used

- **Language:** TypeScript
- **Framework:** Node.js with Express.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Validation:** Zod

---

## 📦 Installation and Setup

Follow these steps to set up the project locally:

### Prerequisites
- Node.js (v16+)
- MongoDB (local or cloud instance)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-project-backend.git
   ```

2. Navigate to the project directory:
   ```bash
   cd blog-project-backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file and add the following environment variables:
   ```env
   PORT=5000
   DATABASE_URL=<your_mongo_connection_string>
   JWT_ACCESS_SECRET=<your_jwt_secret>
   BCRYPT_SALT_ROUNDS=<12>
   ```

5. Start the server:
   ```bash
   npm run dev
   ```

### Seed Admin
Manually create an Admin user in the database with the following structure:
```json
{
  "name": "Admin User",
  "email": "admin@example.com",
  "password": "securepassword",
  "role": "admin"
}
```

---

## 📚 API Documentation

### Authentication
- **Register User**: `POST /api/auth/register`
- **Login User**: `POST /api/auth/login`

### Blog Management
- **Create Blog**: `POST /api/blogs`
- **Update Blog**: `PATCH /api/blogs/:id`
- **Delete Blog**: `DELETE /api/blogs/:id`
- **Get Blogs (Public)**: `GET /api/blogs`

### Admin Actions
- **Block User**: `PATCH /api/admin/users/:userId/block`
- **Delete Blog**: `DELETE /api/admin/blogs/:id`


## 🚀 Live Deployment
[Live API Server](<your-live-url>)

---

## 🔑 Admin Credentials
- **Email:** shakil@gmail.com
- **Password:** 123456

---

## 📧 Contact
For any inquiries or suggestions, feel free to reach out:
- **Email:** muinuddin.sm12@.com
- **GitHub:** [muinuddin-sm12](https://github.com/muinuddin-sm12)

---