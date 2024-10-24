-- Admin Login Table
CREATE TABLE AdminLogin (
    admin_id INT PRIMARY KEY,
    admin_name VARCHAR(100) NOT NULL,
    admin_username VARCHAR(100) NOT NULL,
    admin_password VARCHAR(100) NOT NULL
);
-- Employee Login Table
CREATE TABLE EmployeeLogin (
    employee_id INT PRIMARY KEY,
    admin_id INT,
    employee_username VARCHAR(100) NOT NULL,
    employee_password VARCHAR(100) NOT NULL,
    FOREIGN KEY (admin_id) REFERENCES AdminLogin(admin_id) ON DELETE CASCADE
);

-- Employee Details Table
CREATE TABLE EmployeeDetails (
    details_id INT PRIMARY KEY,
    employee_id INT NOT NULL,
    admin_id INT,
    employee_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    department VARCHAR(50) NOT NULL,
    designation VARCHAR(50) NOT NULL,
    DOB DATE,
    Status BOOLEAN DEFAULT TRUE,
    Gender ENUM('Male', 'Female', 'Other'),
    Description TEXT,
    Quality INT CHECK(Quality >= 0 AND Quality <= 5),
    FOREIGN KEY (employee_id) REFERENCES EmployeeLogin(employee_id) ON DELETE CASCADE,
    FOREIGN KEY (admin_id) REFERENCES AdminLogin(admin_id) ON DELETE CASCADE
);
-- Attendance Table
CREATE TABLE Attendance (
    emp_id INT NOT NULL,
    admin_id INT,
    days_worked INT NOT NULL,
    total_working_days INT NOT NULL,
    attendance_percentage DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (emp_id) REFERENCES EmployeeLogin(employee_id) ON DELETE CASCADE,
    FOREIGN KEY (admin_id) REFERENCES AdminLogin(admin_id) ON DELETE CASCADE
);
-- Salary Table
CREATE TABLE Salary (
    employee_id INT NOT NULL,
    admin_id INT,
    basic_pay DECIMAL(10,2) NOT NULL,
    allowance DECIMAL(10,2) NOT NULL,
    bonus DECIMAL(10,2) NOT NULL,
    total_salary DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES EmployeeLogin(employee_id) ON DELETE CASCADE,
    FOREIGN KEY (admin_id) REFERENCES AdminLogin(admin_id) ON DELETE CASCADE
);
-- Experience Table
CREATE TABLE Experience (
    employee_id INT NOT NULL,
    admin_id INT,
    previous_company VARCHAR(100) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    years_of_experience DECIMAL(5,2) NOT NULL,
    FOREIGN KEY (employee_id) REFERENCES EmployeeLogin(employee_id) ON DELETE CASCADE,
    FOREIGN KEY (admin_id) REFERENCES AdminLogin(admin_id) ON DELETE CASCADE
);

-- Dummy Data
INSERT INTO AdminLogin (admin_id, admin_name, admin_username, admin_password)
VALUES 
(100, 'Admin', 'mainAdmin', 'admin@123'),
(101, 'Nayan', 'nayan', 'nayan@123');


INSERT INTO EmployeeLogin (employee_id, admin_id, employee_username, employee_password)
VALUES 
(201, NULL, 'john_doe', 'johnpass'),
(202, 101, 'jane_smith', 'janepass'),
(203, NULL, 'alice_brown', 'alicepass');



INSERT INTO EmployeeDetails (details_id, employee_id, admin_id, employee_name, email, phone_number, department, designation, DOB, Status, Gender, Description, Quality)
VALUES 
(1, 201, 100, 'John Doe', 'johndoe@example.com', '1234567890', 'IT', 'Software Engineer', '1990-01-15', TRUE, 'Male', 'John is a skilled software engineer with a passion for developing innovative solutions.', 4),
(2, 202, 101, 'Jane Smith', 'janesmith@example.com', '2345678901', 'Marketing', 'Data Analyst', '1992-02-25', TRUE, 'Female', 'Jane specializes in data analysis and marketing strategies to drive growth.', 5),
(3, 203, NULL, 'Alice Brown', 'alicebrown@example.com', '3456789012', 'HR', 'Project Manager', '1988-03-10', TRUE, 'Female', 'Alice is an experienced project manager overseeing multiple projects.', 3);



INSERT INTO Attendance (emp_id, admin_id, days_worked, total_working_days, attendance_percentage)
VALUES 
(201, 100, 20, 22, 90.91),
(202, 101, 18, 22, 81.82),
(203, 101, 22, 22, 100.00);


INSERT INTO Salary (employee_id, admin_id, basic_pay, allowance, bonus, total_salary)
VALUES 
(201, 100, 50000.00, 5000.00, 10000.00, 65000.00),
(202, 101, 45000.00, 4000.00, 8000.00, 57000.00),
(203, 101, 60000.00, 6000.00, 12000.00, 78000.00);


INSERT INTO Experience (employee_id, admin_id, previous_company, start_date, end_date, years_of_experience)
VALUES 
(201, 100, 'Tech Solutions', '2018-01-01', '2020-12-31', 3.00),
(202, 101, 'DataCorp', '2019-05-01', '2022-04-30', 3.00),
(203, 101, 'Innovate Labs', '2017-03-01', '2021-02-28', 4.00);


-- Table schema Structure

-- AdminLogin
+----------------+--------------+------+-----+---------+-------+
| Field          | Type         | Null | Key | Default | Extra |
+----------------+--------------+------+-----+---------+-------+
| admin_id       | int          | NO   | PRI | NULL    |       |
| admin_name     | varchar(100) | NO   |     | NULL    |       |
| admin_username | varchar(100) | NO   |     | NULL    |       |
| admin_password | varchar(100) | NO   |     | NULL    |       |
+----------------+--------------+------+-----+---------+-------+

-- EmployeeLogin
+-------------------+--------------+------+-----+---------+-------+
| Field             | Type         | Null | Key | Default | Extra |
+-------------------+--------------+------+-----+---------+-------+
| employee_id       | int          | NO   | PRI | NULL    |       |
| admin_id          | int          | YES  | MUL | NULL    |       |
| employee_username | varchar(100) | NO   |     | NULL    |       |
| employee_password | varchar(100) | NO   |     | NULL    |       |
+-------------------+--------------+------+-----+---------+-------+

-- EmployeeDetails
+---------------+-------------------------------+------+-----+---------+-------+
| Field         | Type                          | Null | Key | Default | Extra |
+---------------+-------------------------------+------+-----+---------+-------+
| details_id    | int                           | NO   | PRI | NULL    |       |
| employee_id   | int                           | NO   | MUL | NULL    |       |
| admin_id      | int                           | YES  | MUL | NULL    |       |
| employee_name | varchar(100)                  | NO   |     | NULL    |       |
| email         | varchar(100)                  | NO   |     | NULL    |       |
| phone_number  | varchar(15)                   | NO   |     | NULL    |       |
| department    | varchar(50)                   | NO   |     | NULL    |       |
| designation   | varchar(50)                   | NO   |     | NULL    |       |
| DOB           | date                          | YES  |     | NULL    |       |
| Status        | tinyint(1)                    | YES  |     | 1       |       |
| Gender        | enum('Male','Female','Other') | YES  |     | NULL    |       |
| Description   | text                          | YES  |     | NULL    |       |
| Quality       | int                           | YES  |     | NULL    |       |
+---------------+-------------------------------+------+-----+---------+-------+

-- Attendance
+-----------------------+--------------+------+-----+---------+-------+
| Field                 | Type         | Null | Key | Default | Extra |
+-----------------------+--------------+------+-----+---------+-------+
| emp_id                | int          | NO   | MUL | NULL    |       |
| admin_id              | int          | YES  | MUL | NULL    |       |
| days_worked           | int          | NO   |     | NULL    |       |
| total_working_days    | int          | NO   |     | NULL    |       |
| attendance_percentage | decimal(5,2) | NO   |     | NULL    |       |
+-----------------------+--------------+------+-----+---------+-------+

-- Salary
+--------------+---------------+------+-----+---------+-------+
| Field        | Type          | Null | Key | Default | Extra |
+--------------+---------------+------+-----+---------+-------+
| employee_id  | int           | NO   | MUL | NULL    |       |
| admin_id     | int           | YES  | MUL | NULL    |       |
| basic_pay    | decimal(10,2) | NO   |     | NULL    |       |
| allowance    | decimal(10,2) | NO   |     | NULL    |       |
| bonus        | decimal(10,2) | NO   |     | NULL    |       |
| total_salary | decimal(10,2) | NO   |     | NULL    |       |
+--------------+---------------+------+-----+---------+-------+

-- Experience
+---------------------+--------------+------+-----+---------+-------+
| Field               | Type         | Null | Key | Default | Extra |
+---------------------+--------------+------+-----+---------+-------+
| employee_id         | int          | NO   | MUL | NULL    |       |
| admin_id            | int          | YES  | MUL | NULL    |       |
| previous_company    | varchar(100) | NO   |     | NULL    |       |
| start_date          | date         | NO   |     | NULL    |       |
| end_date            | date         | NO   |     | NULL    |       |
| years_of_experience | decimal(5,2) | NO   |     | NULL    |       |
+---------------------+--------------+------+-----+---------+-------+