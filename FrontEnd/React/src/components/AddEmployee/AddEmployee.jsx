import React, { useState } from "react";
import { instance as axios } from "../../axios/configuration";
import { Base_URL, Add_emp } from "../../constant/constant";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./AddEmployee.css";

function AddEmployee() {
  const [newUser, setNewUser] = useState({
    name: "",
    userName: "",
    pass: "",
    email: "",
    department: "",
    designation: "",
    phoneNo: "",
    description: "",
    dob: "",
    gender: "",
    status: "",
    quality: "",
  });

  const navigate = useNavigate();

  const toastObj = {
    position: "bottom-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: false,
    hideProgressBar: true,
    draggable: false,
  };
  const success = (msg) => toast.success(msg, toastObj);
  const fail = (msg) => toast.error(msg, toastObj);
  const info = (msg) => toast.info(msg, toastObj);
  const warning = (msg) => toast.warn(msg, toastObj);

  const addEmployee = () => {
    axios
      .post(`${Base_URL}${Add_emp}`, newUser, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        success("Employee created success");
        navigate("/admin/dashboard");
      })
      .catch((error) => {
        fail("Something went wrong...");
        navigate(-1);
        console.log(error);
      });
  };

  return (
    <div
      id="addEmployeeModal"
      className="modal fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
      style={{ margin: "0" }}
    >
      <div className="modal-content bg-white rounded-3xl shadow-2xl p-6 w-96 mx-auto border border-black">
        <span
          id="closeAddEmployeeModal"
          className="close absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-800"
        >
          &times;
        </span>
        <h2 className="text-center font-semibold">Add Employee</h2>
        <form id="addEmployeeForm" className="grid grid-cols-2 gap-2">
          <div className="col-span-2">
            <input
              type="text"
              id="employeeName"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  name: e.target.value,
                });
              }}
              required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div>
            <input
              type="text"
              id="employeeName"
              placeholder="user name"
              value={newUser.userName}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  userName: e.target.value,
                });
              }}
              required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div>
            <input
              type="text"
              id="employeeName"
              placeholder="password"
              value={newUser.pass}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  pass: e.target.value,
                });
              }}
              required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div className="col-span-2">
            <input
              type="email"
              id="employeeEmail"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  email: e.target.value,
                });
              }}
              required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div>
            <input
              type="text"
              id="employeeDepartment"
              placeholder="Department"
              value={newUser.department}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  department: e.target.value,
                });
              }}
              required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div>
            <input
              type="text"
              id="employeeDesignation"
              placeholder="Designation"
              value={newUser.designation}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  designation: e.target.value,
                });
              }}
              required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div>
            <input
              type="number"
              id="employeePhoneNo"
              placeholder="Phone No"
              value={newUser.phoneNo}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  phoneNo: e.target.value,
                });
              }}
              required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div>
            <input
              type="text"
              id="employeeDescription"
              placeholder="Description"
              value={newUser.description}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  description: e.target.value,
                });
              }}
              // required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div>
            <input
              type="date"
              id="employeeDOB"
              placeholder="Date of Birth"
              value={newUser.dob}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  dob: e.target.value,
                });
              }}
              // required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div>
            <select
              id="employeeGender"
              value={newUser.gender}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  gender: e.target.value,
                });
              }}
              // required
              className="border border-black rounded w-full px-2 py-2 my-2"
            >
              <option defaultChecked value="Male">
                Male
              </option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <select
              id="employeeStatus"
              value={newUser.status}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  status: e.target.value,
                });
              }}
              // required
              className="border border-black rounded w-full px-2 py-2 my-2"
            >
              <option value="TRUE">Active</option>
              <option value="FALSE">Inactive</option>
            </select>
          </div>
          <div>
            <select
              id="employeeQuality"
              value={newUser.quality}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  quality: e.target.value,
                });
              }}
              // required
              className="border border-black rounded w-full px-2 py-2 my-2"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="flex justify-center col-span-2">
            <button
              type="submit"
              className="m-2 bg-green-700 rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
              onClick={(event) => {
                event.preventDefault();
                // console.log(newUser);

                addEmployee();
              }}
            >
              Add
            </button>
            <button
              id="cancelAddEmployeeButton"
              type="button"
              className="m-2 bg-black rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
              onClick={() => navigate("/admin/dashboard")}
            >
              Cancel
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default AddEmployee;
