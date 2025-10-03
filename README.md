# Product Inventory API

## **1. Project Description**
This is a backend-heavy REST API built with **Node.js**, **Express**, and **Sequelize ORM** to manage products in a warehouse.  
It supports full CRUD operations and includes inventory management endpoints to **increase** or **decrease** product stock, with proper validation (e.g., stock cannot go below zero).

**Key Features:**
- Product Management: Create, Read, Update, Delete products.
- Inventory Management: Increase or decrease stock quantities.
- Proper error handling with meaningful messages.
- Structured with Controllers, Services, Repositories, and Middleware for scalability.

---

## **2. Setup Instructions**

### **Prerequisites**
- Node.js (v18+ recommended)
- npm or yarn
- A relational database (PostgreSQL, MySQL, or SQLite)
- Postman (for testing API)

### **Steps**
1. **Clone the repository:**
```bash
git clone https://github.com/Ayush4803/VERTO_INVENTORY_ASE_CHALLENGE
cd ASE_VERTO
```
2. **Install dependencies:**
```bash
npm install
```
3. **Database Configuration:**

- Database connection details are configured in your config files (e.g., config/config.json for Sequelize).

- Make sure your database is running and credentials match the config file.

- Example config snippet:

```bash 
{
  "development": {
    "username": "root",
    "password": "yourpassword",
    "database": "warehouse_db",
    "host": "localhost",
    "dialect": "mysql"
  }
```


4. **Run database migrations (if using Sequelize CLI):**
```bash
npx sequelize-cli db:migrate
```

5. **Seed the database (optional):**
```bash
npx sequelize-cli db:seed:all
```

6. **Start the server:**
```bash
npm run dev
```

7. **Verify server:**
- Open your browser or Postman and visit:
```bash
http://localhost:4000/
```

# API ENDPOINTS
```bash
| Method | Endpoint                     | Description                                           |
| ------ | ---------------------------- | ----------------------------------------------------- |
| POST   | `/api/products`              | Create a new product                                  |
| GET    | `/api/products`              | Get all products                                      |
| GET    | `/api/products/:id`          | Get product by ID                                     |
| PUT    | `/api/products/:id`          | Update a product                                      |
| DELETE | `/api/products/:id`          | Delete a product                                      |
| PATCH  | `/api/products/:id/increase` | Increase stock quantity                               |
| PATCH  | `/api/products/:id/decrease` | Decrease stock quantity (fails if insufficient stock) |
```
- Example JSON Body:
```bash
{
  "name": "Laptop",
  "description": "Gaming Laptop",
  "stock_quantity": 10
}
```

- Inventory PATCH example:
```bash
{
  "amount": 5
}
```
# Running Test Cases

Currently, there are no automated test cases implemented.

You can test the API manually using Postman or similar tools by sending requests to the endpoints described above.

Future improvements: integrate Jest or Mocha/Chai for unit and integration tests.

# Assumptions and Design Choices

- Stock Validation:

stock_quantity cannot be negative.

Decreasing stock checks for sufficient quantity.

- Error Handling:

Centralized error middleware using AppError.

Returns proper HTTP status codes (400, 404, 500).

- Structure:

Controller → Service → Repository → Database (Separation of concerns).

Follows CommonJS module system.

- Database:

Sequelize ORM is used for relational database support.

Product table has id, name, description, stock_quantity, createdAt, updatedAt.

- Scalability:

Easy to add more modules like Orders, Users, etc.

Can extend stock management with history logs or multi-warehouse support.

# Author: AYUSH KUMAR
- Date: 3/10/25
