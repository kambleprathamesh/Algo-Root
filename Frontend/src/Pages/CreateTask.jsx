import React, { useState } from "react";
import TaskForm from "../Components/TaskFormData";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Incomplete",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://algo-root.onrender.com/tasks/createTask",
        formData
      );

      if (response.data.status) {
        toast.success("Task created successfully!");
        setFormData({
          title: "",
          description: "",
          dueDate: "",
          status: "Incomplete",
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:ml-64 md:p-6">
      <div className="w-full flex justify-center items-center">
        <TaskForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default CreateTask;
