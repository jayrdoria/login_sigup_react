import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthForm from './pages/AuthForm';
import Dashboard from './pages/Dashboard';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <Router>
        <div className="App">
          <Routes>
            <Route path="/Calendar" element={<AuthForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <ToastContainer />
        </div>
      </Router>
    );
}

export default App;
