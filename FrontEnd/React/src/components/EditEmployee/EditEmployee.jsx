import React from "react";
import { useNavigate } from "react-router-dom";

function EditEmployee() {
  const navigate = useNavigate();

  return (
    <div
      id="editEmployeeModal"
      className="modal fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="modal-content bg-white rounded-3xl shadow-2xl p-6 w-96 mx-auto border border-black">
        <span
          id="closeEditEmployeeModal"
          className="close absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-800"
        >
          &times;
        </span>
        <h2 className="text-center font-semibold">Edit Employee</h2>
        <form id="editEmployeeForm">
          <input
            type="text"
            id="editEmployeeName"
            placeholder="Name"
            required
            className="border border-black rounded w-full px-2 py-2 my-2"
          />
          <input
            type="email"
            id="editEmployeeEmail"
            placeholder="Email"
            required
            className="border border-black rounded w-full px-2 py-2 my-2"
          />
          <input
            type="text"
            id="editEmployeeDepartment"
            placeholder="Department"
            required
            className="border border-black rounded w-full px-2 py-2 my-2"
          />
          <input
            type="text"
            id="editEmployeeDesignation"
            placeholder="Designation"
            required
            className="border border-black rounded w-full px-2 py-2 my-2"
          />
          <select
            id="editEmployeeStatus"
            required
            className="border border-black rounded w-full px-2 py-2 my-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <div className="flex justify-between mt-4">
            <button
              type="submit"
              className="bg-blue-700 rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
            >
              Update
            </button>
            <button
              id="cancelEditEmployeeButton"
              type="button"
              className="bg-black rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
              onClick={() => navigate("/admin/dashboard")}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
