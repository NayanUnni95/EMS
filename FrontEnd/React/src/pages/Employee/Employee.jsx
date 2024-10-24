import React, { useState, useEffect } from "react";
import { useParams, Outlet, useNavigate } from "react-router-dom";
import { instance as axios } from "../../axios/configuration";
import { Emp_All_Data, Remove_emp } from "../../constant/constant";
import { ToastContainer, toast } from "react-toastify";
import MenAvatar from "../../assets/men.png";
import WomenAvatar from "../../assets/women.png";

function Employee() {
  const [data, setData] = useState();
  const [attendance, setAttendance] = useState();
  const [salary, setSalary] = useState();
  const [experience, setExperience] = useState();
  const { empId } = useParams();
  const navigate = useNavigate();
  const tokenPermission = {
    withCredentials: true,
  };

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

  useEffect(() => {
    axios
      .post(Emp_All_Data, { empId }, tokenPermission)
      .then((result) => {
        // console.log(result.data[0].employee_name);
        setData(result);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .post("/user/emp-attendance", { empId }, tokenPermission)
      .then((result) => {
        console.log(result.data);
        setAttendance(result.data[0]);
      })
      .catch((error) => console.log(error));
    axios
      .post("/user/emp-salary", { empId }, tokenPermission)
      .then((result) => {
        console.log(result.data);
        setSalary(result.data[0]);
      })
      .catch((error) => console.log(error));
    axios
      .post("/user/emp-experience", { empId }, tokenPermission)
      .then((result) => {
        console.log(result.data);
        setExperience(result.data[0]);
      })
      .catch((error) => console.log(error));
  }, [empId]);

  const removeEmp = () => {
    axios
      .post(Remove_emp, { empId }, tokenPermission)
      .then((result) => {
        console.log("success");
        success("Removed successfully");
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
        fail("Something went wrong...");
        navigate(-1);
      });
  };
  function convertDate(dateString) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear()).slice(-2);

    return `${day}/${month}/${year}`;
  }

  return (
    <div className="container mx-auto mt-10">
      <div className="max-h-screen overflow-y-auto p-6 bg-gray-100 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-5 text-center text-gray-800">
          Employee Details
        </h1>
        <div className="bg-white p-8 rounded-lg shadow-md w-full mb-10">
          <div className="flex items-center mb-8">
            <img
              className="w-32 h-32 rounded-full mr-8 border-4 border-gray-300"
              src={data?.data[0].Gender === "Male" ? MenAvatar : WomenAvatar}
              alt="Employee"
            />
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                {data?.data[0].employee_name}
              </h2>
              <p className="text-gray-500 text-lg">
                <span>{data?.data[0].department}</span> -
                <span>{data?.data[0].designation}</span>
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-lg">
            <div>
              <p>
                <span className="font-bold text-gray-700">Email:</span>
                {data?.data[0].email}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-gray-700">Phone:</span>{" "}
                {data?.data[0].phone_number}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-gray-700">Date of Birth:</span>{" "}
                {convertDate(data?.data[0].DOB)}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-gray-700">Status:</span>
                {data?.data[0].Status}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-gray-700">Gender:</span>
                {data?.data[0].Gender}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-gray-700">Description:</span>
                {data?.data[0].Description}
              </p>
            </div>
            <div>
              <p>
                <span className="font-bold text-gray-700">Quality:</span>
                {data?.data[0].Quality}/5
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-10 space-x-4">
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              onClick={() => {
                navigate(`/user/dashboard/${empId}/attendance`);
              }}
            >
              Attendance
            </button>
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              onClick={() => {
                navigate(`/user/dashboard/${empId}/experience`);
              }}
            >
              Experience
            </button>
            <button
              className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
              onClick={() => {
                navigate(`/user/dashboard/${empId}/salary`);
              }}
            >
              salary
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Edit
            </button>
            <button
              className="px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
              onClick={() => removeEmp()}
            >
              Remove
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {attendance != null && (
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-700">
                Attendance
              </h2>
              <p>
                <strong>Days Worked:</strong>
                {attendance?.days_worked}
              </p>
              <p>
                <strong>Total Working Days:</strong>
                {attendance?.total_working_days}
              </p>
              <p>
                <strong>Attendance Percentage:</strong>
                {attendance?.attendance_percentage}%
              </p>
            </div>
          )}
          {salary != null && (
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-700">Salary</h2>
              <p>
                <strong>Basic Pay:</strong> ${salary?.basic_pay}
              </p>
              <p>
                <strong>Allowance:</strong> ${salary?.allowance}
              </p>
              <p>
                <strong>Bonus:</strong> ${salary?.bonus}
              </p>
              <p>
                <strong>Total Salary:</strong> ${salary?.total_salary}
              </p>
            </div>
          )}
          {experience != null && (
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-700">
                Experience
              </h2>
              <p>
                <strong>Previous Company:</strong>
                {experience?.previous_company}
              </p>
              <p>
                <strong>Start Date:</strong>
                {convertDate(experience?.start_date)}
              </p>
              <p>
                <strong>End Date:</strong>
                {convertDate(experience?.end_date)}
              </p>
              <p>
                <strong>Years of Experience:</strong>
                {experience?.years_of_experience}
              </p>
            </div>
          )}
        </div>
        <ToastContainer />
        <Outlet />
      </div>
    </div>
  );
}

export default Employee;
