const data = {
  employee: {
    EmpID: '',
    Name: '',
    Email: '',
    Phone: '',
    Designation: '',
    admin_id: '',
    emp_id: '',
  },
  attendance: {
    AttId: '',
    emp_id: '',
    DaysWorked: '',
    TWD: '',
    TotalAtt: '',
  },
  salary: {
    SalId: '',
    emp_id: '',
    BasicPay: '',
    Allowance: '',
    Bonus: '',
    TotalSal: '',
  },
  admin: {
    AdminId: '',
    Pass: '',
    emp_id: '',
  },
  emp: {
    ExpId: '',
    emp_id: '',
    prevWorked: '',
    StartDate: '',
    EndDate: '',
    YearOfExp: '',
  },
  experience: null,
};
module.exports = { data };
