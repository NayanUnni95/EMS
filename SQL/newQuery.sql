-- EmployeeDetails Table
CREATE TABLE EmployeeDetails (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(100),
    email VARCHAR(100),
    phone_number VARCHAR(15),
    designation VARCHAR(50)
);

-- Admin Table
CREATE TABLE Admin (
    admin_id INT PRIMARY KEY,
    employee_id INT,
    admin_name VARCHAR(100),
    admin_username VARCHAR(100),
    admin_password VARCHAR(100),
    FOREIGN KEY (employee_id) REFERENCES EmployeeDetails(employee_id) ON DELETE CASCADE
);

-- EmployeeLogin Table
CREATE TABLE EmployeeLogin (
    employee_id INT PRIMARY KEY,
    employee_username VARCHAR(100),
    employee_password VARCHAR(100),
    FOREIGN KEY (employee_id) REFERENCES EmployeeDetails(employee_id) ON DELETE CASCADE
);

-- Attendance Table
CREATE TABLE Attendance (
    attendance_id INT PRIMARY KEY,
    emp_id INT,
    days_worked INT,
    total_working_days INT,
    attendance_percentage DECIMAL(5,2),
    FOREIGN KEY (emp_id) REFERENCES EmployeeDetails(employee_id) ON DELETE CASCADE
);

-- Salary Table
CREATE TABLE Salary (
    salary_id INT PRIMARY KEY,
    employee_id INT,
    basic_pay DECIMAL(10,2),
    allowance DECIMAL(10,2),
    bonus DECIMAL(10,2),
    total_salary DECIMAL(10,2),
    FOREIGN KEY (employee_id) REFERENCES EmployeeDetails(employee_id) ON DELETE CASCADE
);

-- Experience Table
CREATE TABLE Experience (
    experience_id INT PRIMARY KEY,
    employee_id INT,
    previous_company VARCHAR(100),
    start_date DATE,
    end_date DATE,
    years_of_experience DECIMAL(5,2),
    FOREIGN KEY (employee_id) REFERENCES EmployeeDetails(employee_id) ON DELETE CASCADE
);


-- Here are 5 dummy data entries for each of the tables in your schema:
-- EmployeeDetails Table
INSERT INTO EmployeeDetails (employee_id, employee_name, email, phone_number, designation) VALUES
(1, 'Alice Johnson', 'alice.johnson@example.com', '123-456-7890', 'Software Engineer'),
(2, 'Bob Smith', 'bob.smith@example.com', '987-654-3210', 'Project Manager'),
(3, 'Charlie Davis', 'charlie.davis@example.com', '555-555-5555', 'QA Engineer'),
(4, 'Diana King', 'diana.king@example.com', '444-444-4444', 'HR Manager'),
(5, 'Evan Moore', 'evan.moore@example.com', '333-333-3333', 'Data Analyst');

-- Admin Table
INSERT INTO Admin (admin_id, employee_id, admin_name, admin_username, admin_password) VALUES
(1, 1, 'mainAdmin' 'admin1', 'adminPass123');

--  EmployeeLogin Table
INSERT INTO EmployeeLogin (employee_id, employee_username, login_password) VALUES
(1, 'alicePass', 'alicePass@123'),
(2, 'bobPass', 'bobPass@123'),
(3, 'charliePass', 'charliePass@123'),
(4, 'dianaPass', 'dianaPass@123'),
(5, 'evanPass', 'evanPass@123');

-- Attendance Table
INSERT INTO Attendance (attendance_id, emp_id, days_worked, total_working_days, attendance_percentage) VALUES
(1, 1, 20, 22, 90.91),
(2, 2, 18, 22, 81.82),
(3, 3, 21, 22, 95.45),
(4, 4, 22, 22, 100.00),
(5, 5, 19, 22, 86.36);

-- Salary Table
INSERT INTO Salary (salary_id, employee_id, basic_pay, allowance, bonus, total_salary) VALUES
(1, 1, 5000.00, 800.00, 200.00, 6000.00),
(2, 2, 7000.00, 1000.00, 500.00, 8500.00),
(3, 3, 4500.00, 700.00, 300.00, 5500.00),
(4, 4, 6500.00, 1200.00, 400.00, 8100.00),
(5, 5, 4800.00, 600.00, 100.00, 5500.00);

-- Experience Table
INSERT INTO Experience (experience_id, employee_id, previous_company, start_date, end_date, years_of_experience) VALUES
(1, 1, 'TechCorp', '2018-01-15', '2021-02-20', 3.08),
(2, 2, 'Innovate Solutions', '2015-04-10', '2020-05-15', 5.10),
(3, 3, 'QualityFirst', '2019-06-01', '2022-08-01', 3.17),
(4, 4, 'HR Experts', '2014-03-20', '2019-12-31', 5.79),
(5, 5, 'DataDrive', '2017-10-05', '2023-01-25', 5.32);



