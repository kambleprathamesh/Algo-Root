import { useState } from "react";
import TaskForm from "../Components/TaskFormData";
import React from "react";

const CreateTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    status: "Incomplete",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className=" md:ml-64 md:p-6 ">
      <div className="w-full h-fullflex justify-center items-center z-50">
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
