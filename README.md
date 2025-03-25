## Deployed Link: **https://algo-root-blush.vercel.app/tasks**

# 🚀 Task Management Application
**Task Management API** built with Node.js, Express, and Prisma, using PostgreSQL as the database.

---

## 🛠 Backend  Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/kambleprathamesh/Algo-Root.git
cd Backend
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the root directory and add the following:

NOTE: Make sure to update your .env file with your actual PostgreSQL connection URL:
Replace username, password, and your_database with your actual credentials.
If you're using a cloud database (e.g., Supabase, Render,Neon, etc), use the provided connection URL instead.
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
Your server will run at **https://algo-root.onrender.com/** or **http://localhost:5001** 🚀

---

## 📌 API Endpoints

| Method   | Endpoint             | Description            |
|----------|----------------------|----------------------- |
| `GET`    | `/tasks`             | Get all tasks          |
| `POST`   | `/tasks/createTask`  | Create a new task      |
| `PUT`    | `/tasks/update/:id`  | Update a task          |
| `DELETE` | `/tasks/delete/:id`  | Delete a task          |

---

## 📩 API Request & Response Examples  

### **🔹 Create a Task**
**Request (POST `/tasks/createTask`)**
```json
{
    "title": "Create API Documentation",
    "description": "Write detailed API documentation for developers.",
    "dueDate": "2024-04-12T17:00:00.000Z"
}
```
**Response**
```json
{
    "status": true,
    "newTask": {
        "id": "96db39b0-fa83-4e83-86d7-815aa1316404",
        "title": "Create API Documentation",
        "description": "Write detailed API documentation for developers.",
        "status": "INCOMPLETE",
        "createdAt": "2025-03-25T17:43:21.294Z",
        "dueDate": "2024-04-12T17:00:00.000Z"
    },
    "message": "New Task Created Succesfully"
}
```
🔹 If `Status` is not provided, it defaults to **INCOMPLETE** (Pending).  

---

### **🔹 Get All Tasks**
**Request (GET `/tasks`)**  
Response Example:
```json
{
    "status": true,
    "data": [
        {
            "id": "96782d9b-7fa2-4cdf-b8c2-d1bd6a5e40b2",
            "title": "Fix Backend API Bug",
            "description": "Resolve the issue with authentication middleware.",
            "status": "INCOMPLETE",
            "createdAt": "2025-03-25T17:41:23.649Z",
            "dueDate": "2024-03-25T18:00:00.000Z"
        },
        {
            "id": "bf0cbf10-bf3e-4735-a528-cbd9e72a3837",
            "title": "Write Unit Tests",
            "description": "Add test cases for user authentication module.",
            "status": "INCOMPLETE",
            "createdAt": "2025-03-25T17:41:37.310Z",
            "dueDate": "2024-03-28T14:00:00.000Z"
        },
        {
            "id": "cdc5d035-9948-4cab-992d-592e143dcde7",
            "title": "UI Enhancement",
            "description": "Improve dashboard UI with a new theme.",
            "status": "INCOMPLETE",
            "createdAt": "2025-03-25T17:41:58.923Z",
            "dueDate": "2024-04-01T10:00:00.000Z"
        },
        {
            "id": "4972ba3d-ced8-41c0-9cf7-d699c9410eb1",
            "title": "Optimize Query Performance",
            "description": "Refactor database queries to improve performance.",
            "status": "INCOMPLETE",
            "createdAt": "2025-03-25T17:42:37.162Z",
            "dueDate": "2024-04-05T12:00:00.000Z"
        },
        {
            "id": "3693dc8f-e384-494d-923c-bb76b0d12b44",
            "title": "Frontend Bug Fix",
            "description": "Fix alignment issues in the navbar.",
            "status": "INCOMPLETE",
            "createdAt": "2025-03-25T17:42:52.452Z",
            "dueDate": "2024-04-03T15:30:00.000Z"
        },
        {
            "id": "8bc9f0ce-5885-4598-bec3-07ffb9353df1",
            "title": "Deploy New Release",
            "description": "Push latest updates to production.",
            "status": "INCOMPLETE",
            "createdAt": "2025-03-25T17:43:02.031Z",
            "dueDate": "2024-04-07T09:00:00.000Z"
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
  "title": "MY UPDATED TASK 10",
  "status": "COMPLETE"
}
```
**Response**
```json
{
    "status": true,
    "message": "TASK UPDATED SUCCESFULLY",
    "updateTask": {
        "id": "96db39b0-fa83-4e83-86d7-815aa1316404",
        "title": "MY UPDATED TASK 10",
        "description": "New Description",
        "status": "COMPLETE",
        "createdAt": "2025-03-25T17:43:21.294Z",
        "dueDate": "2024-03-30T16:00:00.000Z"
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
        "id": "bf0cbf10-bf3e-4735-a528-cbd9e72a3837",
        "title": "Write Unit Tests",
        "description": "Add test cases for user authentication module.",
        "status": "INCOMPLETE",
        "createdAt": "2025-03-25T17:41:37.310Z",
        "dueDate": "2024-03-28T14:00:00.000Z"
    }
}
```

---
## 🛠 API Testing with Postman

1️⃣ **Open Postman** and create a new request  
2️⃣ **Select HTTP method** (`GET, POST, PUT, DELETE`)  
3️⃣ **Enter the API URL** (`https://algo-root.onrender.comtasks`)  
4️⃣ **For `POST` and `PUT`**, go to **Body → raw → JSON**  
5️⃣ **Send the request & check response**  

## 🖥️ Frontend Installation & Setup

### **1️⃣ Navigate to the Frontend Directory**

```sh
cd ../Frontend
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Start the Development Server**

```sh
npm run dev
```

The application will run at **[http://localhost:5173](http://localhost:5173)** 🚀

---

## 📌 Features

### **Backend Features:**
- Task Creation
- Task Editing & Updating
- Task Status Management
- Task Deletion
- API Endpoints for CRUD Operations

### **Frontend Features:**
- User-friendly task management interface
- Create, edit, update, and delete tasks
- Responsive design with Tailwind CSS
- Real-time updates

---

## 🛠 Testing with Postman

1️⃣ **Open Postman** and create a new request\
2️⃣ **Select HTTP method** (`GET, POST, PUT, DELETE`)\
3️⃣ **Enter the API URL** (`http://localhost:5000/tasks`)\
4️⃣ **For **`POST`** and **`PUT`**, go to **Body → raw → JSON**\
5️⃣ **Send the request & check response**

---

## 📩 API Endpoints

| Method   | Endpoint            | Description       |
| -------- | ------------------- | ----------------- |
| `GET`    | `/tasks`            | Get all tasks     |
| `POST`   | `/tasks/createTask` | Create a new task |
| `PUT`    | `/tasks/update/:id` | Update a task     |
| `DELETE` | `/tasks/delete/:id` | Delete a task     |

---


## 📸 Screenshots Backend APIS

### 🔹 Create Task in Postman
![Create Task in Postman](Backend/Screenshots/createTask.png)

### 🔹 Get All Tasks in Postman
![Get All Task in Postman](Backend/Screenshots/getAllTask.png)


### 🔹 Update Task in Postman
![Update Task in Postman](Backend/Screenshots/updateTask.png)

### 🔹 Delete Task in Postman
![Delete Task in Postman](Backend/Screenshots/deleteTask.png)


## 📸 Screenshots Frontend 

### 🔹 Create Task 
![Create Task ](Frontend/Screenshots/createTask.png)

### 🔹 Get All Tasks
![Get All Task ](Frontend/Screenshots/GetAllTask.png)


### 🔹 Update Task 
![Modify Task ](Frontend/Screenshots/UpdateTasks.png)

![Edit Task ](Frontend/Screenshots/EditTask.png)

### 🔹 Delete Task 
![Delete Task ](Frontend/Screenshots/DeleteTask.png)



## 🏗️ Tech Stack

- **Backend:** Node.js, Express.js, Prisma, PostgreSQL
- **Frontend:** React.js, Vite, Tailwind CSS
- **Database:** PostgreSQL

---

## 👥 Contributor

- **Prathmesh Kamble** - [GitHub](https://github.com/kambleprathamesh)

---


