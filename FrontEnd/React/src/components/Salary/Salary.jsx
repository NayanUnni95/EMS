import React, { useState } from "react";
import { instance as axios } from "../../axios/configuration";
import { Base_URL, Add_emp } from "../../constant/constant";
import { useNavigate, useParams } from "react-router-dom";
// import "./AddEmployee.css";

function Salary() {
  const navigate = useNavigate();
  const { empId } = useParams();

  const [newUser, setNewUser] = useState({
    empId,
    basic_pay: "",
    allowance: "",
    bonus: "",
    total_salary: "",
  });

  const addEmployee = () => {
    axios
      .post(`${Base_URL}/user/employee-salary`, newUser, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate(-1);
      })
      .catch((error) => {
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
        <h2 className="text-center font-semibold">Add Employee salary</h2>
        <form id="addEmployeeForm" className="grid grid-cols-2 gap-2">
          <div className="col-span-2">
            <input
              type="text"
              id="employeeName"
              placeholder="Basic Pay"
              value={newUser.basic_pay}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  basic_pay: e.target.value,
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
              placeholder="Allowance"
              value={newUser.allowance}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  allowance: e.target.value,
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
              placeholder="Bonus"
              value={newUser.bonus}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  bonus: e.target.value,
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
              placeholder="Total Salary"
              value={newUser.total_salary}
              onChange={(e) => {
                setNewUser({
                  ...newUser,
                  total_salary: e.target.value,
                });
              }}
              required
              className="border border-black rounded w-full px-2 py-2 my-2"
            />
          </div>
          <div className="flex justify-center col-span-2">
            <button
              type="submit"
              className="m-2 bg-green-700 rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
              onClick={(event) => {
                event.preventDefault();
                console.log(newUser);

                addEmployee();
              }}
            >
              Add
            </button>
            <button
              id="cancelAddEmployeeButton"
              type="button"
              className="m-2 bg-black rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Salary;
