import React from "react";
import styles from "./AddEmp.module.css";

function AddEmp() {
  return (
    <div className={`2xl:container mx-auto ${styles.mainContainer}`}>
      <div id="employeeList" className="w-[90%] mx-auto text-center py-4"></div>
      <div id="addEmployeeForm" className="w-[90%] mx-auto py-4">
        <h2 className={`text-lg font-bold my-3 ${styles.title}`}>
          Add Employee
        </h2>
        <form action="" className="w-[100%] mx-auto" id="employeeForm">
          <div className="flex flex-row items-center mb-2">
            <label className="mx-2 w-[30%] text-left">Employee Name</label>
            <input
              id="employeeName"
              type="text"
              placeholder="Employee Name"
              className="border rounded p-2 w-[70%]"
            />
          </div>

          <div className="flex flex-row items-center mb-2">
            <label className="mx-2 w-[30%] text-left">Employee Email</label>
            <input
              id="employeeEmail"
              type="email"
              placeholder="Email"
              className="border rounded p-2 w-[70%]"
            />
          </div>

          <div className="flex flex-row items-center mb-2">
            <label className="mx-2 w-[30%] text-left">Phone Number</label>
            <input
              id="employeePhone"
              type="text"
              placeholder="Phone Number"
              className="border rounded p-2 w-[70%]"
            />
          </div>

          <div className="flex flex-row items-center mb-2">
            <label className="mx-2 w-[30%] text-left">Designation</label>
            <input
              id="employeeDesignation"
              type="text"
              placeholder="Designation"
              className="border rounded p-2 w-[70%]"
            />
          </div>

          <div className="flex flex-row items-center mb-2">
            <label className="mx-2 w-[30%] text-left">Admin ID</label>
            <input
              id="adminId"
              type="text"
              placeholder="Admin ID"
              className="border rounded p-2 w-[70%]"
            />
          </div>

          <div className="flex flex-row items-center mb-2">
            <label className="mx-2 w-[30%] text-left">Employee ID</label>
            <input
              id="empId"
              type="text"
              placeholder="Employee ID"
              className="border rounded p-2 w-[70%]"
            />
          </div>

          <div className={`flex gap-3 mx-3 ${styles.btnSection}`}>
            <button
              id="submitBtn"
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
            >
              Submit
            </button>
            <button
              id="cancelBtn"
              type="button"
              className="bg-red-500 text-white px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
          <div
            id="successMessage"
            className="hidden bg-green-500 text-white p-4 rounded-md mt-4 text-center transition-opacity duration-300 opacity-0 w-[30%]"
          >
            Submitted successfully!
          </div>

          <div
            id="cancelMessage"
            className="hidden bg-red-500 text-white p-4 rounded-md mt-4 text-center transition-opacity duration-300 opacity-0 w-[30%]"
          >
            Cancelled successfully!
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddEmp;
