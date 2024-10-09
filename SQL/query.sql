--  EmployeeDetails Table
CREATE TABLE EmployeeDetails (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    email VARCHAR(100),
    phone_number VARCHAR(15),
    designation VARCHAR(50),
);

-- Attendance Table
CREATE TABLE Attendance (
    attendance_id INT PRIMARY KEY,
    emp_id INT,
    adm_id INT,
    days_worked INT,
    total_working_days INT,
    attendance_percentage DECIMAL(5,2),
        FOREIGN KEY (adm_id) REFERENCES Admin(admin_id)
    FOREIGN KEY (emp_id) REFERENCES EmployeeDetails(employee_id)
);

-- Salary Table
CREATE TABLE Salary (
    salary_id INT PRIMARY KEY,
    employee_id INT,
    basic_pay DECIMAL(10,2),
    allowance DECIMAL(10,2),
    bonus DECIMAL(10,2),
    total_salary DECIMAL(10,2),
    FOREIGN KEY (employee_id) REFERENCES EmployeeDetails(employee_id)
);

-- Admin Table
CREATE TABLE Admin (admin_id INT PRIMARY KEY,admin_password VARCHAR(100),FOREIGN KEY (employee_id) REFERENCES EmployeeDetails(employee_id));

-- EmployeeLogin Table
CREATE TABLE EmployeeLogin (
    employee_id INT PRIMARY KEY,
    login_password VARCHAR(100),
    admin_id INT,
    FOREIGN KEY (employee_id) REFERENCES EmployeeDetails(employee_id),
    FOREIGN KEY (admin_id) REFERENCES Admin(admin_id)
);

-- Experience Table
CREATE TABLE Experience (
    experience_id INT PRIMARY KEY,
    employee_id INT,
    previous_company VARCHAR(100),
    start_date DATE,
    end_date DATE,
    years_of_experience DECIMAL(5,2),
    FOREIGN KEY (employee_id) REFERENCES EmployeeDetails(employee_id)
);