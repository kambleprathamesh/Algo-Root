import React from "react";
const TaskForm = ({
  isEditMode = false,
  formData,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="flex items-center p-2  md:w-full  ">
      <div className="bg-[#d8dbf3] p-8 rounded-2xl shadow-2xl w-[400px]">
        <h2 className="text-3xl font-bold text-gray-800 text-start mb-6">
          {isEditMode ? "Edit Task" : "Create Task"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Title <span className="text-red-600 text-xl">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg bg-[#b8bee8] focus:bg-[#8e9bff] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg bg-[#b8bee8] focus:bg-[#8e9bff] focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Due Date Field */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Due Date <span className="text-red-600 text-xl">*</span>
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full p-3 border-2 border-gray-300 rounded-lg bg-[#b8bee8] focus:bg-[#8e9bff] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Status Field (Only in Edit Mode) */}
          {isEditMode && (
            <div>
              <label className="block text-gray-700 font-semibold mb-1">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg bg-[#b8bee8] focus:bg-[#8e9bff] focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Incomplete">Incomplete</option>
                <option value="In Progress">In Progress</option>
                <option value="Reviewed">Reviewed</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
          )}

          {/* Buttons */}
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all cursor-pointer"
            >
              {isEditMode ? "Update Task" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
