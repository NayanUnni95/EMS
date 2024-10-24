import React, { useState, useEffect } from "react";
import { instance as axios } from "../../axios/configuration";
import {
  Base_URL,
  Remove_emp,
  Employees_Base_Data,
} from "../../constant/constant";
import { useNavigate } from "react-router-dom";

function RemoveEmployee() {
  const [empData, SetEmpData] = useState();
  const [empId, setEmpId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .post(
        Employees_Base_Data,
        {
          empId,
        },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        SetEmpData(res.data.details);
        console.log(res.data.details);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeEmployee = () => {
    axios
      .post(
        `${Base_URL}${Remove_emp}`,
        {
          empId,
        },
        {
          withCredentials: true,
        },
      )
      .then((res) => {
        console.log(res);
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
        navigate(-1);
      });
  };

  return (
    <div
      id="removeEmployeeModal"
      className="modal fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
      style={{ margin: "0" }}
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
          value={empId}
          onChange={(e) => {
            setEmpId(e.target.value);
          }}
        >
          {empData?.map((data, index) => {
            return (
              <option key={index} value={data.employee_id}>
                {data.employee_name}
              </option>
            );
          })}

          {/* <option value="Jane Smith">Jane Smith</option> */}
        </select>
        <div className="flex justify-between mt-4">
          <button
            id="confirmRemoveButton"
            className="bg-red-700 rounded-3xl border border-black shadow-2xl text-white px-4 py-2"
            onClick={(event) => {
              event.preventDefault();
              removeEmployee();
            }}
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
