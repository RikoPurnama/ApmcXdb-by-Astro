// src/components/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "../layouts/dashboardPage";
import LoginForm from "./login/LoginForm";
import type React from "react";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
};

export default App;
