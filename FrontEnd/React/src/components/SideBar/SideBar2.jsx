import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar2() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="w-[22%]" style={{ margin: "0.5rem" }}>
      <div className="h-screen space-y-3 py-4 px-3 text-center rounded-3xl border border-black shadow-2xl bg-slate-300 bg-opacity-60">
        <div className="logo-container w-full space-x-2 flex justify-center space-x-4 border-4 border-black px-6 py-2 rounded-3xl">
          <img
            src="https://ik.imagekit.io/cluqqmqj7/dbms%20project/Screenshot%202024-10-09%20235600.png"
            alt="logo"
            className="h-12 w-12 rounded-full transition-transform duration-200 animate-flip logo border border-black"
            id="logo"
          />
          <p id="techverse"></p>
        </div>
        <h1 className="text-2xl border-b-2 border-black font-semibold">
          {isAdmin ? "Admin Dashboard" : "Emp Dashboard"}
        </h1>
        <nav className="mt-6 font-bold">
          <ul>
            <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
              <Link to="/">Home</Link>
            </li>
            <li className="menu-item py-2 my-1 px-4 hover:bg-slate-500 hover:underline rounded-full">
              {isAdmin ? (
                <Link to="/dashboard">Admin Dashboard</Link>
              ) : (
                <a>Profile</a>
              )}
            </li>
            <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
              <Link to="/contact">Our team</Link>
            </li>
            <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
              {isLogin ? <a>Logout</a> : <Link to="/auth/login">Login</Link>}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default SideBar2;
