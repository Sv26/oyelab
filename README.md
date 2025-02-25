# Node.js REST API with PostgreSQL & Sequelize

This is a RESTful API built using **Node.js, Express, Sequelize, and PostgreSQL,None.techdb**.  
It provides CRUD operations for managing users and includes middleware for validation, error handling, and environment configuration.

## **Features**

- 🛠 **CRUD Operations** for users (Create, Read, Update, Delete)
- 🛡 **Middleware** for request validation & error handling
- 🔐 **Environment Configuration** using `.env`
- 📜 **API Documentation** using Swagger (Optional)
- 🔑 **JWT Authentication & Pagination** (Optional)

---

## **Setup Instructions**

### **1. Clone the Repository**

```sh
git
cd

2. Install Dependencies

  npm install

3. Configure Environment Variables
  Create a .env file in the root directory and add:

  PORT=3000
  DB_URL=postgres://username:password@localhost:5432/mydatabase


4. Setup Database
   Run the following command to create the tables:

   npx sequelize db:migrate


5. Start the Server

   npm start
   http://localhost:3000.



API Endpoints

1. Retrieve all users
Method: GET
URL: http://localhost:3000/api/users


2. Retrieve a specific user
Method: GET
URL: http://localhost:3000/api/users/:id


3. Create a new user
Method: POST
URL: http://localhost:3000/api/users
Headers: Content-Type: application/json
Body (JSON):

{
  "name": "John Doe",
  "email": "john.doe@example.com"
}
Response: Returns the created user with an ID.


4. Update a user
Method: PUT
URL: http://localhost:3000/api/users/:id


{
  "name": " shubh",
  "email": "shubh@example.com"
}
Response: Returns the updated user.


5. Delete a user
Method: DELETE
URL: http://localhost:3000/api/users/:id


Testing with Postman
```
