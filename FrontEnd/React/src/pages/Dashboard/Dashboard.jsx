import React, { useState, useEffect } from "react";
import { instance as axios } from "../../axios/configuration";
import { Employees_Base_Data } from "../../constant/constant";
import { useNavigate, Outlet } from "react-router-dom";
import EmpDashboard from "./EmpDashboard";

function Dashboard2() {
  const [showEmp, setShowEmp] = useState(false);
  const [empData, SetEmpData] = useState();
  const navigate = useNavigate();
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  // const data = [1, 2];

  useEffect(() => {
    axios
      .get(Employees_Base_Data)
      .then((res) => {
        SetEmpData(res.data.details);
        console.log(res.data.details);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      className="w-[90%] mx-auto space-y-10 bg-slate-300 bg-opacity-60 rounded-3xl border border-black shadow-2xl py-4 px-3"
      style={{ margin: "0.5rem" }}
    >
      <div>
        <h1 className="text-3xl border-b-2 border-black py-1 font-semibold text-center">
          Admin Management
        </h1>
      </div>
      <div className="flex space-x-2">
        <input
          type="text"
          placeholder="Search..."
          className="border border-black shadow-2xl rounded-full px-4 w-64"
        />
        <select className="border border-black px-2 py-2 shadow-2xl rounded-2xl w-48">
          <option value="">Filter by Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>
        <select className="border border-black px-2 shadow-2xl rounded-2xl w-48">
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="designation">Designation</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <button
          id="addEmployeeButton"
          className="bg-black rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
          onClick={() => navigate("/admin/dashboard/add")}
        >
          Add Emp
        </button>
        <button
          id="removeEmployeeButton"
          className="bg-black rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
          onClick={() => navigate("/admin/dashboard/remove")}
        >
          Remove Emp
        </button>
      </div>
      <div className="w-[100%]">
        <div
          style={{ width: "100%" }}
          className="bg-white w-fit mx-auto p-4 flex-col h-fit rounded-3xl border border-black shadow-2xl"
        >
          <h2 className="font-semibold text-lg mb-4 text-center">
            Employee List
          </h2>
          <div className="table-container">
            <table className="min-w-full bg-white" id="employeeTable">
              <thead>
                <tr className="border-b border-black">
                  <th className="py-2 px-4 text-left">Id</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  {/* <th className="py-2 px-4 text-left">Department</th> */}
                  <th className="py-2 px-4 text-left">Designation</th>
                  <th className="py-2 px-4 text-left">Phone</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {empData?.map((data, index) => {
                  return (
                    <tr
                      key={index}
                      className="border-b border-black hover:bg-slate-300"
                      data-name="John Doe"
                      onClick={() => setShowEmp(!showEmp)}
                    >
                      <td className="py-2 px-4">{data.Id}</td>
                      <td className="py-2 px-4">{data.Name}</td>
                      <td className="py-2 px-4">{data.Email}</td>
                      <td className="py-2 px-4">{data.Designation}</td>
                      <td className="py-2 px-4">{data.Phone}</td>
                      <td className="py-2 px-4">
                        {data.Status == 1 ? "Active" : "Inactive"}
                      </td>
                      {/* <td className="py-2 px-4">{index}</td>
                      <td className="py-2 px-4">Nayan</td>
                      <td className="py-2 px-4">nayanunni95@gmail.com</td>
                      <td className="py-2 px-4">Developer</td> */}
                      <td className="py-2 px-4">
                        <button
                          className="text-blue-600 hover:underline edit-button"
                          onClick={() => navigate("/admin/dashboard/edit")}
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Outlet />
      {showEmp && <EmpDashboard />}
    </div>
  );
}

export default Dashboard2;
