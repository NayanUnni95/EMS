import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";
import NotFound from "./pages/NotFound/NotFound";
import ContactUs from "./pages/ContactUs/ContactUs";
import EmpDashboard from "./pages/Dashboard/EmpDashboard";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import RemoveEmployee from "./components/RemoveEmployee/RemoveEmployee";
import EditEmployee from "./components/EditEmployee/EditEmployee";
import Employee from "./pages/Employee/Employee";
import Attendance from "./components/Attendance/Attendance";
import Salary from "./components/Salary/Salary";
import Experience from "./components/Experience/Experience";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="/admin/dashboard" element={<Dashboard />}>
              <Route path="add" element={<AddEmployee />} />
              <Route path="remove" element={<RemoveEmployee />} />
              <Route path="edit" element={<EditEmployee />} />
            </Route>
            <Route path="/emp/dashboard" element={<EmpDashboard />} />
            <Route path="/user/dashboard/:empId" element={<Employee />}>
              <Route path="attendance" element={<Attendance />} />
              <Route path="salary" element={<Salary />} />
              <Route path="experience" element={<Experience />} />
            </Route>
            {/* <Route path="/user/dashboard/:empId" element={<Employee />} />
            <Route path="/user/dashboard/:empId" element={<Employee />} />
            <Route path="/user/dashboard/:empId" element={<Employee />} /> */}
            <Route path="/contact" element={<ContactUs />} />
          </Route>
          <Route path="/auth/login" element={<SignIn />} />
          <Route path="/auth/signUp" element={<SignUp />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
