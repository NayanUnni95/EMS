import React from "react";

function Dashboard2() {
  return (
    <div
      class="w-[90%] mx-auto space-y-10 bg-slate-300 bg-opacity-60 rounded-3xl border border-black shadow-2xl py-4 px-3"
      style={{ margin: "0.5rem" }}
    >
      <div>
        <h1 class="text-3xl border-b-2 border-black py-1 font-semibold text-center">
          Admin Management
        </h1>
      </div>
      <div class="flex space-x-2">
        <input
          type="text"
          placeholder="Search..."
          class="border border-black shadow-2xl rounded-full px-4 w-64"
        />
        <select class="border border-black px-2 py-2 shadow-2xl rounded-2xl w-48">
          <option value="">Filter by Department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
        </select>
        <select class="border border-black px-2 shadow-2xl rounded-2xl w-48">
          <option value="">Sort by</option>
          <option value="name">Name</option>
          <option value="designation">Designation</option>
        </select>
      </div>
      <div class="flex justify-end space-x-2">
        <button
          id="addEmployeeButton"
          class="bg-black rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
        >
          Add Employee
        </button>
        <button
          id="removeEmployeeButton"
          class="bg-black rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
        >
          Remove Employee
        </button>
      </div>
      <div class="w-[90%]">
        <div class="bg-white w-fit mx-auto p-4 flex-col h-fit rounded-3xl border border-black shadow-2xl">
          <h2 class="font-semibold text-lg mb-4 text-center">Employee List</h2>
          <div class="table-container">
            <table class="min-w-full bg-white" id="employeeTable">
              <thead>
                <tr class="border-b border-black">
                  <th class="py-2 px-4 text-left">Name</th>
                  <th class="py-2 px-4 text-left">Email</th>
                  <th class="py-2 px-4 text-left">Department</th>
                  <th class="py-2 px-4 text-left">Designation</th>
                  <th class="py-2 px-4 text-left">Status</th>
                  <th class="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b border-black hover:bg-slate-300"
                  data-name="John Doe"
                >
                  <td class="py-2 px-4">John Doe</td>
                  <td class="py-2 px-4">john@example.com</td>
                  <td class="py-2 px-4">IT</td>
                  <td class="py-2 px-4">Developer</td>
                  <td class="py-2 px-4">Active</td>
                  <td class="py-2 px-4">
                    <button class="text-red-600 hover:underline edit-button">
                      Edit
                    </button>
                  </td>
                </tr>
                <tr
                  class="border-b border-black hover:bg-slate-300"
                  data-name="Jane Smith"
                >
                  <td class="py-2 px-4">Jane Smith</td>
                  <td class="py-2 px-4">jane@example.com</td>
                  <td class="py-2 px-4">HR</td>
                  <td class="py-2 px-4">Manager</td>
                  <td class="py-2 px-4">Inactive</td>
                  <td class="py-2 px-4">
                    <button class="text-red-600 hover:underline edit-button">
                      Edit
                    </button>
                  </td>
                </tr>
                {/* <!-- Add more rows as needed --> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard2;
