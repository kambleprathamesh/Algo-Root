
# 🚀 Task Management API

A **Task Management API** built with Node.js, Express, and Prisma, using PostgreSQL as the database.

---

## 🛠 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/task-Management-api.git
cd task-Management-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
DATABASE_URL="postgresql://user:password@localhost:5432/taskdb"
```

### **4️⃣ Run Database Migrations**
```sh
npx prisma migrate dev --name init
```

### **5️⃣ Start the Server**
```sh
npm run dev
```
Your server will run at **http://localhost:5000** 🚀

---

## 📌 API Endpoints

| Method   | Endpoint              | Description           |
|----------|----------------------|----------------------- |
| `GET`    | `/tasks`             | Get all tasks          |
| `POST`   | `/tasks/create`      | Create a new task      |
| `PUT`    | `/tasks/update/:id`  | Update a task          |
| `DELETE` | `/tasks/delete/:id`  | Delete a task          |

---

## 📩 API Request & Response Examples  

### **🔹 Create a Task**
**Request (POST `/tasks/create`)**
```json
{
    "title":"MY FIRST TASK ",
    "description":"DESCRIPTION 1"
}
```
**Response**
```json
{
    "status": true,
    "newTask": {
        "id": "d6d31f52-a3ef-48e3-87a0-ef06c3d798f4",
        "title": "MY FIRST TASK ",
        "description": "DESCRIPTION 1",
        "completed": false,
        "createdAt": "2025-03-25T08:38:15.254Z"
    },
    "message": "New Task Created Succesfully"
}
```
🔹 If `Completed` is not provided, it defaults to **false** (Pending).  

---

### **🔹 Get All Tasks**
**Request (GET `/tasks`)**  
Response Example:
```json
{
    "status": true,
    "data": [
        {
            "id": "3484f96c-895e-4013-bc05-5b14de730c7e",
            "title": "MY FIRST TASK",
            "description": "DESCRIPTION 1",
            "completed": false,
            "createdAt": "2025-03-25T07:07:32.803Z"
        },
        {
            "id": "72267738-23d1-4a36-84e4-4b5790b1d161",
            "title": "MY UPDATED TASK 10 ",
            "description": "DESCRIPTION 2",
            "completed": true,
            "createdAt": "2025-03-25T07:08:19.217Z"
        },
        {
            "id": "d6d31f52-a3ef-48e3-87a0-ef06c3d798f4",
            "title": "MY FIRST TASK ",
            "description": "DESCRIPTION 1",
            "completed": false,
            "createdAt": "2025-03-25T08:38:15.254Z"
        }
    ],
    "message": "All Task retrived Succesfully"
}
```

---

### **🔹 Update a Task**
**Request (PUT `/tasks/update/:id`)**
```json
{
    "title":"MY UPDATED TASK 10 ",
    "completed":true
}
```
**Response**
```json
{
    "status": true,
    "message": "TASK UPDATED SUCCESFULLY",
    "updateTask": {
        "id": "72267738-23d1-4a36-84e4-4b5790b1d161",
        "title": "MY UPDATED TASK 10 ",
        "description": "DESCRIPTION 2",
        "completed": true,
        "createdAt": "2025-03-25T07:08:19.217Z"
    }
}
```

---

### **🔹 Delete a Task**
**Request (DELETE `/tasks/delete/:id`)**  
Response Example:
```json
{
    "status": true,
    "message": "TASK DELETED  SUCCESFULLY",
    "deleteTask": {
        "id": "7d35541b-ac80-478b-89d7-f94ff3740123",
        "title": "MY FOURTH TASK ",
        "description": "DESCRIPTION 4",
        "completed": false,
        "createdAt": "2025-03-25T07:23:18.034Z"
    }
}
```

---
## 🛠 Testing with Postman

1️⃣ **Open Postman** and create a new request  
2️⃣ **Select HTTP method** (`GET, POST, PUT, DELETE`)  
3️⃣ **Enter the API URL** (`http://localhost:5000/tasks`)  
4️⃣ **For `POST` and `PUT`**, go to **Body → raw → JSON**  
5️⃣ **Send the request & check response**  
---

## 📸 Screenshots

### 🔹 Create Task in Postman
![Create Task in Postman](Backend/Screenshots/createTask.png)

### 🔹 Get All Tasks in Postman
![Get All Task in Postman](Backend/Screenshots/getAllTask.png)


### 🔹 Update Task in Postman
![Update Task in Postman](Backend/Screenshots/updateTask.png)

### 🔹 Delete Task in Postman
![Delete Task in Postman](Backend/Screenshots/deleteTask.png)

