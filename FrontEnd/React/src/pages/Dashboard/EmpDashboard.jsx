import React from "react";

function EmpDashboard() {
  return (
    <div
      className="w-[90%] mx-auto space-y-10 bg-slate-300 bg-opacity-60 rounded-3xl border border-black shadow-2xl py-4 px-3"
      style={{ margin: "0.5rem" }}
    >
      <div id="dashboardContent">
        <h1 className="text-3xl border-b-2 border-black py-1 font-semibold text-center">
          Employee Details
        </h1>
        <div className="bg-white w-fit mx-auto p-4 flex-col h-fit rounded-3xl border border-black shadow-2xl">
          <h2 className="font-semibold text-lg mb-4 text-center">
            Your Information
          </h2>
          <div className="table-container">
            <table className="min-w-full bg-white" id="employeeInfoTable">
              <thead>
                <tr className="border-b border-black">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Department</th>
                  <th className="py-2 px-4 text-left">Designation</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black">
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">john@example.com</td>
                  <td className="py-2 px-4">IT</td>
                  <td className="py-2 px-4">Developer</td>
                  <td className="py-2 px-4">Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="attendanceSection" className="">
        <h1 className="text-3xl border-b-2 border-black py-1 font-semibold text-center">
          Attendance
        </h1>
        <div className="bg-white w-fit mx-auto p-4 flex-col h-fit rounded-3xl border border-black shadow-2xl">
          <h2 className="font-semibold text-lg mb-4 text-center">
            Attendance Records
          </h2>
          <div className="table-container">
            <table className="min-w-full bg-white" id="attendanceTable">
              <thead>
                <tr className="border-b border-black">
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black">
                  <td className="py-2 px-4">2024-10-01</td>
                  <td className="py-2 px-4">Present</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-2 px-4">2024-10-02</td>
                  <td className="py-2 px-4">Absent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div id="salarySection" className="">
        <h1 className="text-3xl border-b-2 border-black py-1 font-semibold text-center">
          Salary
        </h1>
        <div className="bg-white w-fit mx-auto p-4 flex-col h-fit rounded-3xl border border-black shadow-2xl">
          <h2 className="font-semibold text-lg mb-4 text-center">
            Salary Records
          </h2>
          <div className="table-container">
            <table className="min-w-full bg-white" id="salaryTable">
              <thead>
                <tr className="border-b border-black">
                  <th className="py-2 px-4 text-left">Month</th>
                  <th className="py-2 px-4 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-black">
                  <td className="py-2 px-4">October 2024</td>
                  <td className="py-2 px-4">$3000</td>
                </tr>
                <tr className="border-b border-black">
                  <td className="py-2 px-4">September 2024</td>
                  <td className="py-2 px-4">$2900</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmpDashboard;
