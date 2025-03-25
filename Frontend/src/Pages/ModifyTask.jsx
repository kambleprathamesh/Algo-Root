import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const dummyTasks = [
  {
    id: 1,
    title: "Task 1",
    description: "Fix login issue",
    dueDate: "2024-03-30",
    status: "Incomplete",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Update API endpoints",
    dueDate: "2024-03-31",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Write documentation",
    dueDate: "2024-04-02",
    status: "Completed",
  },
  {
    id: 4,
    title: "Task 4",
    description: "Refactor authentication logic",
    dueDate: "2024-04-05",
    status: "Incomplete",
  },
  {
    id: 5,
    title: "Task 5",
    description: "Design new UI layout",
    dueDate: "2024-04-07",
    status: "In Progress",
  },
  {
    id: 6,
    title: "Task 6",
    description: "Optimize database queries",
    dueDate: "2024-04-10",
    status: "Pending Review",
  },
  {
    id: 7,
    title: "Task 7",
    description: "Write unit tests",
    dueDate: "2024-04-12",
    status: "In Progress",
  },
  {
    id: 8,
    title: "Task 8",
    description: "Deploy new version",
    dueDate: "2024-04-15",
    status: "Scheduled",
  },
  {
    id: 9,
    title: "Task 9",
    description: "Investigate server downtime",
    dueDate: "2024-04-18",
    status: "In Progress",
  },
  {
    id: 10,
    title: "Task 10",
    description: "Prepare client demo",
    dueDate: "2024-04-20",
    status: "Pending Review",
  },
];

const ModifyTask = () => {
  const [tasks, setTasks] = useState(dummyTasks);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const openEditModal = (task) => {
    setSelectedTask(task);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedTask(null);
  };

  const openDeleteModal = (taskId) => {
    setTaskToDelete(taskId);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTaskToDelete(null);
  };

  const handleDelete = () => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete));
    closeDeleteModal();
  };

  const handleInputChange = (e) => {
    setSelectedTask({ ...selectedTask, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Task List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-4 rounded-lg shadow-lg flex justify-between items-center"
          >
            <div>
              <h3 className="text-lg font-semibold">{task.title}</h3>
              <p className="text-gray-600">{task.description}</p>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
              <p className="text-sm font-bold">Status: {task.status}</p>
            </div>
            <div className="flex space-x-2">
              <FaEdit
                className="text-blue-600 cursor-pointer"
                onClick={() => openEditModal(task)}
              />
              <FaTrash
                className="text-red-600 cursor-pointer"
                onClick={() => openDeleteModal(task.id)}
              />
            </div>
          </div>
        ))}
      </div>
      {isEditModalOpen && selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>

            <form>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={selectedTask.title}
                  onChange={(e) =>
                    setSelectedTask({ ...selectedTask, title: e.target.value })
                  }
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Description
                </label>
                <textarea
                  name="description"
                  value={selectedTask.description}
                  onChange={(e) =>
                    setSelectedTask({
                      ...selectedTask,
                      description: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent"
                ></textarea>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Due Date
                </label>
                <input
                  type="date"
                  name="dueDate"
                  value={selectedTask.dueDate}
                  onChange={(e) =>
                    setSelectedTask({
                      ...selectedTask,
                      dueDate: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Status
                </label>
                <select
                  name="status"
                  value={selectedTask.status}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 bg-transparent"
                >
                  <option value="Incomplete">Incomplete</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending Review">Pending Review</option>
                  <option value="Scheduled">Scheduled</option>
                </select>
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800"
                >
                  Update Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}{" "}
      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
            <p>Are you sure you want to delete this task?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={closeDeleteModal}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModifyTask;
