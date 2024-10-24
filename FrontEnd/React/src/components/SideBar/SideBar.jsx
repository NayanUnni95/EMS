import React, { useState, useContext } from "react";
import { instance as axios } from "../../axios/configuration";
import { Logout } from "../../constant/constant";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/LoginCache";

function SideBar2() {
  const { isLogged, setIsLogged, isAdmin, userData, setUserData } =
    useContext(DataContext);
  const navigate = useNavigate();
  const logout = () => {
    axios
      .get(Logout)
      .then((result) => {
        setIsLogged(false);
        setUserData({});
        navigate("/");
        console.log("successfully logout");
      })
      .catch((error) => {
        console.log("failed");
      });
  };

  return (
    <div
      className="w-[20%] space-y-3 py-4 px-3 text-center rounded-2xl border border-black shadow-2xl bg-slate-300 bg-opacity-60"
      style={{
        margin: "0.5rem 0 0.5rem 0.5rem",
        padding: "1rem",
        height: "97.5vh",
      }}
    >
      <div className="logo-container w-full space-x-2 flex justify-center space-x-4 border-4 border-black px-6 py-2 rounded-3xl">
        <img
          src="https://ik.imagekit.io/cluqqmqj7/dbms%20project/Screenshot%202024-10-09%20235600.png"
          alt="logo"
          className="h-12 w-12 rounded-full transition-transform duration-200 animate-flip logo border border-black"
          id="logo"
        />
        <h1 id="techverse"></h1>
      </div>
      <h1 className="text-2xl border-b-2 border-black font-semibold">
        {isLogged ? (isAdmin ? "Admin" : "Employee") : "EMS"}
      </h1>
      <nav className="mt-6 font-bold">
        <ul>
          <Link to="/">
            <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
              Home
            </li>
          </Link>
          {isLogged &&
            (isAdmin ? (
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
            ))}
          <Link to="/contact">
            <li className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full">
              Contact Us
            </li>
          </Link>
          {isLogged ? (
            <Link>
              <li
                className="menu-item py-2 px-4 my-1 hover:bg-slate-500 hover:underline rounded-full"
                onClick={() => logout()}
              >
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
