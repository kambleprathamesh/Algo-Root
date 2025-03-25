import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import CreateTask from "./Pages/CreateTask";
import ModifyTask from "./Pages/ModifyTask";
import NotFound from "./Pages/PageNotFound";
function App() {
  return (
    <Routes>
      <Route  element={<Layout />}>
        <Route path="/tasks" element={<Home />} />
        <Route path="/create" element={<CreateTask />} />
        <Route path="/modify-task" element={<ModifyTask />} />
        {/* <Route path="/tasks" element={<Tasks />} /> */}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
