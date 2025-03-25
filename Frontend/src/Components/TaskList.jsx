import React from "react";
import { useState } from "react";
const TaskList = ({ tasks }) => {
  // Function to determine color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "INCOMPLETE":
        return "bg-red-200 text-red-800";
      case "IN_PROGRESS":
        return "bg-blue-200 text-blue-800";
      case "REVIEW":
        return "bg-yellow-200 text-yellow-800";
      case "COMPLETE":
        return "bg-green-200 text-green-800";
      default:
        return "bg-gray-200 text-gray-800";
    }
  };

  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  return (
    <div className="md:w-[70%] mt-4 ">
      {/* Header */}
      <div className="grid grid-cols-3 bg-gray-200 text-gray-600 font-semibold py-2 px-3 md:px-4 text-sm md:text-base rounded-t-lg">
        <p>Due Date</p>
        <p>Title</p>
        <p>Status</p>
      </div>

      

      <div>
        {tasks.map((task, index) => {
          const truncatedTitle =
            task.title.length > 20
              ? task.title.substring(0, 20) + "..."
              : task.title;

          return (
            <div
              key={task.id}
              className={`grid grid-cols-3 items-center py-2 px-3 md:px-4 text-xs md:text-sm lg:text-base rounded-md ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } cursor-pointer`}
              onClick={() => handleTaskClick(task)}
            >
              <p className="truncate">{task.dueDate}</p>
              <p className="font-medium truncate">{truncatedTitle}</p>
              <span
                className={`md:w-1/2 px-2 py-1 text-xs md:text-sm font-semibold rounded-full text-center ${getStatusColor(
                  task.status
                )}`}
              >
                {task.status}
              </span>
            </div>
          );
        })}

        {/* Modal */}
        {selectedTask && (
          <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
              <h2 className="text-xl font-bold">{selectedTask.title}</h2>
              <p>
                <strong>Description:</strong> {selectedTask.description}
              </p>
              <p>
                <strong>Status:</strong> {selectedTask.status}
              </p>
              <p>
                <strong>Created At:</strong> {selectedTask.createdAt}
              </p>
              <button
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => setSelectedTask(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
