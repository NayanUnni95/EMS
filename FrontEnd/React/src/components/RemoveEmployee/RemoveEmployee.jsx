import React from "react";
import { useNavigate } from "react-router-dom";

function RemoveEmployee() {
  const navigate = useNavigate();

  return (
    <div
      id="removeEmployeeModal"
      className="modal fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="modal-content bg-white rounded-3xl shadow-2xl p-6 w-96 mx-auto border border-black">
        <span
          id="closeModal"
          className="close absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-800"
        >
          &times;
        </span>
        <h2 className="text-center font-semibold">Remove Employee</h2>
        <p>Select the employee to remove:</p>
        <select
          id="employeeSelect"
          className="border border-black px-2 py-2 shadow-2xl rounded-2xl w-full"
        >
          <option value="John Doe">John Doe</option>
          <option value="Jane Smith">Jane Smith</option>
        </select>
        <div className="flex justify-between mt-4">
          <button
            id="confirmRemoveButton"
            className="bg-red-700 rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
          >
            Confirm
          </button>
          <button
            id="cancelRemoveButton"
            className="bg-black rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
            onClick={() => navigate("/admin/dashboard")}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default RemoveEmployee;
