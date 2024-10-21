CREATE TABLE EmployeeDetails (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,
    Department VARCHAR(100),
    Designation VARCHAR(100),
    Email VARCHAR(100) UNIQUE NOT NULL,
    Phone VARCHAR(15),
    DOB DATE,
    Status BOOLEAN DEFAULT TRUE,  
    Gender ENUM('Male', 'Female', 'Other'),
    Description TEXT,
    Quality INT CHECK(Quality >= 0 AND Quality <= 5)
)

-- SELECT eb.Id, eb.Name, eb.Department, eb.Designation, ea.Email, ea.Phone, ea.DOB, ea.Status, ea.Gender, ea.Description, ea.Quality
-- FROM EmployeeBasic eb
-- JOIN EmployeeAdvance ea ON eb.Id = ea.Id
-- WHERE eb.Id = 1;

INSERT INTO EmployeeDetails (Name, Department, Designation, Email, Phone, DOB, Status, Gender, Description, Quality)
VALUES 
('John Doe', 'Engineering', 'Software Engineer','john.doe@example.com', '555-1234', '1990-05-12', TRUE, 'Male', 'A diligent software engineer.', 4),
('Jane Smith', 'Marketing', 'Marketing Manager', 'jane.smith@example.com', '555-5678', '1985-08-25', FALSE, 'Female', 'Experienced marketing professional.', 5),
('Robert Johnson', 'Human Resources', 'HR Specialist', 'robert.johnson@example.com', '555-8765', '1979-11-10', TRUE, 'Male', 'HR specialist with 10+ years of experience.', 3),
('Emily Davis', 'Sales', 'Sales Executive', 'emily.davis@example.com', '555-2345', '1993-02-14', FALSE, 'Female', 'Top performer in sales department.', 5),
('Michael Brown', 'Finance', 'Financial Analyst', 'michael.brown@example.com', '555-6789', '1988-09-30', TRUE, 'Male', 'Skilled financial analyst.', 4);

-- INSERT INTO EmployeeAdvance (Id, Email, Phone, DOB, Status, Gender, Description, Quality)
-- VALUES 
-- (1, 'john.doe@example.com', '555-1234', '1990-05-12', TRUE, 'Male', 'A diligent software engineer.', 4),
-- (2, 'jane.smith@example.com', '555-5678', '1985-08-25', TRUE, 'Female', 'Experienced marketing professional.', 5),
-- (3, 'robert.johnson@example.com', '555-8765', '1979-11-10', FALSE, 'Male', 'HR specialist with 10+ years of experience.', 3),
-- (4, 'emily.davis@example.com', '555-2345', '1993-02-14', TRUE, 'Female', 'Top performer in sales department.', 5),
-- (5, 'michael.brown@example.com', '555-6789', '1988-09-30', TRUE, 'Male', 'Skilled financial analyst.', 4);
