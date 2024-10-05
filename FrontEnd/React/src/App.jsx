import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import About from './pages/About/About';
import Employee from './pages/Emp/Emp';
import Attendance from './pages/Attendance/Attendance';
import Salary from './pages/Salary/Salary';
import Experience from './pages/Experience/Experience';
import Setting from './pages/Setting/Setting';
import SignIn from './pages/Auth/SignIn/SignIn';
import SignUp from './pages/Auth/SignUp/SignUp';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/emp" element={<Employee />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/salary" element={<Salary />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/auth/signIn" element={<SignIn />} />
          <Route path="/auth/signUp" element={<SignUp />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
