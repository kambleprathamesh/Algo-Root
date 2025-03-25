### 📌 **Features Covered in this README:**  
✔ Installation Steps  
✔ API Endpoints Table  
✔ Request & Response Examples (Postman-friendly)  
✔ Testing Instructions  

Now, here’s your **clean and professional `README.md`**:  

---

### **📄 README.md**
```markdown
# 📝 Task Manager API

This is a simple **Task Manager API** built using **Node.js, Express, and Prisma ORM**. It allows users to **create, update, fetch, and delete tasks**.

---

## 🚀 Installation & Setup

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-username/task-manager-api.git
cd task-manager-api
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory and add:
```env
DATABASE_URL="your_prisma_database_url"
PORT=5000
```

### **4️⃣ Run the Server**
```sh
npm start
```
The API will run on **`http://localhost:5000`**.

---

## 📌 API Endpoints

| Method  | Endpoint            | Description         |
|---------|---------------------|---------------------|
| `GET`   | `/tasks`            | Get all tasks      |
| `POST`  | `/tasks/create`     | Create a new task  |
| `PUT`   | `/tasks/update/:id` | Update a task      |
| `DELETE`| `/tasks/delete/:id` | Delete a task      |

---

## 📡 API Requests & Responses  

### **1️⃣ Create a Task (`POST /tasks/create`)**
- **URL:** `http://localhost:5000/tasks/create`
- **Headers:**  
  ```json
  {
    "Content-Type": "application/json"
  }
  ```
- **Request Body (JSON):**  
  ```json
  {
    "title": "Complete Backend",
    "description": "Finish API endpoints"
  }
  ```
- **Response Example:**  
  ```json
  {
    "id": "123456",
    "title": "Complete Backend",
    "description": "Finish API endpoints",
    "status": "pending",
    "createdAt": "2024-03-25T10:00:00Z"
  }
  ```

---

### **2️⃣ Get All Tasks (`GET /tasks`)**
- **URL:** `http://localhost:5000/tasks`
- **Response Example:**  
  ```json
  [
    {
      "id": "123456",
      "title": "Complete Backend",
      "description": "Finish API endpoints",
      "status": "pending",
      "createdAt": "2024-03-25T10:00:00Z"
    },
    {
      "id": "789012",
      "title": "Fix Bugs",
      "description": "Debug API issues",
      "status": "completed",
      "createdAt": "2024-03-22T15:30:00Z"
    }
  ]
  ```

---

### **3️⃣ Update a Task (`PUT /tasks/update/:id`)**
- **URL:** `http://localhost:5000/tasks/update/123456`
- **Headers:**  
  ```json
  {
    "Content-Type": "application/json"
  }
  ```
- **Request Body (JSON):**  
  ```json
  {
    "title": "Complete Backend API",
    "description": "Work on API endpoints",
    "status": "completed"
  }
  ```
- **Response Example:**  
  ```json
  {
    "id": "123456",
    "title": "Complete Backend API",
    "description": "Work on API endpoints",
    "status": "completed",
    "updatedAt": "2024-03-25T11:00:00Z"
  }
  ```

---

### **4️⃣ Delete a Task (`DELETE /tasks/delete/:id`)**
- **URL:** `http://localhost:5000/tasks/delete/123456`
- **Response Example:**  
  ```json
  {
    "message": "Task deleted successfully"
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

## 🖼 Screenshots

📌 *screenshots of Postman tests or UI here*

![Create Task in Postman](AlgoRoot\Backend\Screenshots\createTask.png)
![Get All Task in Postman](Backend\Screenshots\getAllTask.png)
![Update Task in Postman](Backend\Screenshots\updateTask.png)
![Delete Task in Postman](Backend\Screenshots\deleteTAsk.png)


---

## 🤝 Contributing
Feel free to contribute by submitting a Pull Request or opening an Issue.
