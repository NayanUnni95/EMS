import React, { useState } from "react";
import { Link } from "react-router-dom";

function SideBar2() {
  const [isAdmin, setIsAdmin] = useState(true);
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div
      className="w-[20%] h-[96.89%] h-screen space-y-3 py-4 px-3 text-center rounded-3xl border border-black shadow-2xl bg-slate-300 bg-opacity-60"
      style={{
        margin: "0.5rem",
        padding: "1rem",
      }}
    >
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
        {isAdmin ? "Admin" : "Employee"}
      </h1>
      <nav className="mt-6 font-bold">
        <ul>
          <Link to="/">
            <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
              Home
            </li>
          </Link>
          {isAdmin ? (
            <Link to="/admin/dashboard">
              <li className="menu-item py-2 my-1 px-4 hover:bg-slate-500 hover:underline rounded-full">
                Dashboard
              </li>
            </Link>
          ) : (
            <Link to="/emp/dashboard">
              <li className="menu-item py-2 my-1 px-4 hover:bg-slate-500 hover:underline rounded-full">
                Profile
              </li>
            </Link>
          )}
          {/* <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
              <Link to="/contact">Our team</Link>
            </li> */}
          <Link to="/contact">
            <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
              Contact Us
            </li>
          </Link>
          {isLogin ? (
            <Link>
              <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
                Logout
              </li>
            </Link>
          ) : (
            <Link to="/auth/login">
              <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
                Login
              </li>
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default SideBar2;
