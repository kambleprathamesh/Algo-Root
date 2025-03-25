import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const ModifyTask = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  // Fetch tasks from backend

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("http://localhost:5000/tasks");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch tasks");
        }

        const formattedTasks = data.data.map((task) => ({
          ...task,
          createdAt: task.createdAt ? task.createdAt.split("T")[0] : "N/A",
          dueDate: task.dueDate ? task.dueDate.split("T")[0] : "N/A",
        }));

        console.log("formattedTasks ", formattedTasks);
        setTasks(formattedTasks);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
    console.log("TASKS ", tasks);
  }, [taskToDelete, selectedTask]);

  // Open Edit Modal
  const openEditModal = (tasks) => {
    setSelectedTask(tasks);
    setIsEditModalOpen(true);
  };

  // Close Edit Modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedTask(null);
  };

  // Open Delete Modal
  const openDeleteModal = (taskId) => {
    console.log("TASK ID IN OPEN DELETE MODAL", taskId?.id);
    setTaskToDelete(taskId?.id);
    setIsDeleteModalOpen(true);
  };

  // Close Delete Modal
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setTaskToDelete(null);
  };

  // Handle Delete Task
  const handleDelete = async () => {
    console.log("DELETE HANDLER FUNCTION ");

    try {
      //   const taskId = tasks;
      console.log("taskToDelete ", taskToDelete);
      await axios.delete(`http://localhost:5000/tasks/delete/${taskToDelete}`);
      setTasks(tasks.filter((tasks) => tasks._id !== taskToDelete));
      closeDeleteModal();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Handle Edit Form Input
  const handleInputChange = (e) => {
    setSelectedTask({ ...selectedTask, [e.target.name]: e.target.value });
  };

  // Handle Task Update
  const handleUpdate = async (e) => {
    console.log("HANDLER REACHING in UPDATE");
    e.preventDefault();
    const taskId = selectedTask?.id;
    console.log("Extracted Task ID:", taskId);

    try {
      await axios.put(
        `http://localhost:5000/tasks/update/${taskId}`,
        selectedTask
      );
      setTasks(
        tasks.map((task) => (task._id === taskId ? selectedTask : task))
      );
      closeEditModal();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Task List</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl">
        {tasks.map((task) => (
          <div
            key={task._id}
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
                onClick={() => openDeleteModal(task)}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {isEditModalOpen && selectedTask && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <form onSubmit={handleUpdate}>
              <div>
                <label className="block text-gray-700 font-semibold">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={selectedTask.title}
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  <option value="INCOMPLETE">Incomplete</option>
                  <option value="IN_PROGRESS">In Progress</option>
                  <option value="COMPLETE">Completed</option>
                  <option value="REVIEW">Pending Review</option>
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
      )}

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
