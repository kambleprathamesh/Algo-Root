import React from "react";
import TaskList from "../Components/TaskList";
import { IoIosCreate } from "react-icons/io";
import { Link } from "react-router-dom";

const tasks = [
  {
    id: 1,
    title: "Implement new UX",
    createdAt: "14 Dec 2020",
    status: "Incomplete",
  },
  {
    id: 2,
    title: "Design syntax",
    createdAt: "02 Jun 2020",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Configurable resources",
    createdAt: "31 Jul 2020",
    status: "Complete",
  },
  {
    id: 4,
    title: "Implement extensions",
    createdAt: "17 Feb 2020",
    status: "Reviewed",
  },
  {
    id: 5,
    title: "Optimize database queries",
    createdAt: "05 May 2021",
    status: "In Progress",
  },
  {
    id: 6,
    title: "Refactor authentication module",
    createdAt: "20 Aug 2021",
    status: "Complete",
  },
  {
    id: 7,
    title: "Add dark mode support",
    createdAt: "11 Nov 2021",
    status: "Incomplete",
  },
  {
    id: 8,
    title: "Fix API response caching",
    createdAt: "30 Sep 2021",
    status: "Reviewed",
  },
  {
    id: 9,
    title: "Improve accessibility features",
    createdAt: "21 Jan 2022",
    status: "Complete",
  },
  {
    id: 10,
    title: "Integrate payment gateway",
    createdAt: "03 Mar 2022",
    status: "In Progress",
  },
  {
    id: 11,
    title: "Write unit tests for components",
    createdAt: "12 Apr 2022",
    status: "Incomplete",
  },
  {
    id: 12,
    title: "Enhance CI/CD pipeline",
    createdAt: "07 Jul 2022",
    status: "Reviewed",
  },
];

const Home = () => {
  return (
    <div className="w-full">
      <div className=" text-blue-950 text-4xl ">
        <h1 className="text-5xl font-bold mt-2 p-2  md:mb-6">TASK</h1>
      </div>

      <div className="md:w-[90%] h-auto mt-4 p-2 flex flex-wrap justify-center md:justify-between gap-4">
        <div className="w-full md:w-1/4 rounded-xl bg-[#d5d8f1] p-4 md:p-6 border border-gray-500 text-center font-bold text-lg md:text-2xl shadow-md">
          Total Tasks: <span className="text-gray-700">120</span>
        </div>
        <div className="w-full md:w-1/4 rounded-xl bg-red-200 p-4 md:p-6 border border-gray-500 text-center font-bold text-lg md:text-2xl shadow-md">
          Incomplete Tasks: <span className="text-red-700">60</span>
        </div>
        <div className="w-full md:w-1/4 rounded-xl bg-green-200 p-4 md:p-6 border border-gray-500 text-center font-bold text-lg md:text-2xl shadow-md">
          Complete Tasks: <span className="text-green-700">60</span>
        </div>
      </div>

      <div className="flex justify-start items-start gap-x-4">
        <TaskList tasks={tasks} />

        <Link
          to={"/create"}
          className="hidden md:flex w-1/4 h-20 relative items-center justify-center font-semibold py-3 px-6 rounded-lg shadow-md text-lg md:text-xl text-blue-500 border-2 border-blue-500 transition-transform duration-200 hover:scale-105 cursor-pointer mt-10"
        >
          <IoIosCreate
            size={60}
            className="absolute -top-6 text-blue-500 z-10"
          />
          <span className="mt-4 text-3xl">Create Task</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
