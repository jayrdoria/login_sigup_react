import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ListUser from "../components/ListUser";
import CreateUser from "../components/CreateUser";
import EditUser from "../components/EditUser";
import "../css/DashboardAdmin.css";

function DashboardAdmin() {
  return (
    <div className="container">
      <h1 className="page-header text-center">Admin Dashboard</h1>
      <Routes>
        <Route index element={<ListUser />} />
        <Route path="create" element={<CreateUser />} />
        <Route path="edit" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default DashboardAdmin;
