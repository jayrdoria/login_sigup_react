import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthForm from "./pages/AuthForm";
import DashboardAdmin from "./pages/DashboardAdmin";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Calendar" element={<AuthForm />} />
          <Route path="/dashboard/admin/*" element={<DashboardAdmin />} />
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
