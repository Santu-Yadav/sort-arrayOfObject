// /* 2. Sort Array of Objects;// by Id and by name depending on type of param passed param passed should be an object{sortBy:'empName'}
// [{empId:'1', empName:'shivam', empSkillSet:'novice Java developer', empJobBand:'2'},
// {empId:'111', empName:'sudarshan', empSkillSet:'React JS', empJobBand:'2'},
// {empId:'4', empName:'ranjith', empSkillSet:'React JS', empJobBand:'1.1'},
// {empId:'98', empName:'rajiv', empSkillSet:'management', empJobBand:'3.2'},
// {empId:'2', empName:'sachin', empSkillSet:'cricket', empJobBand:'10'},
// {empId:'2', empName:'sachin', empSkillSet:'cricket', empJobBand:'10'}]; */

employeeObject = [
  {
    empId: "1",
    empName: "shivam",
    empSkillSet: "novice Java developer",
    empJobBand: "2",
  },
  {
    empId: "111",
    empName: "sudarshan",
    empSkillSet: "React JS",
    empJobBand: "2",
  },
  {
    empId: "4",
    empName: "ranjith",
    empSkillSet: "React JS",
    empJobBand: "1.1",
  },
  {
    empId: "98",
    empName: "rajiv",
    empSkillSet: "management",
    empJobBand: "3.2",
  },

  { empId: "2", empName: "sachin", empSkillSet: "cricket", empJobBand: "10" },

  { empId: "2", empName: "sachin", empSkillSet: "cricket", empJobBand: "10" },
];

let sortType = { sortBy: "empName" };
let defalutParam = { sortBy: "empId" };

function Sort(employee, sortType = defalutParam) {
  if (sortType.sortBy === "empId") {
    employee.sort(function (a, b) {
      return a.empId - b.empId;
    });
    console.log("sort by empId");
  }

  if (sortType.sortBy === "empName") {
    employee.sort(function (a, b) {
      if (a.empName < b.empName) return -1;
      if (a.empName > b.empName) return 1;
      else return 0;
    });
    console.log("sort by empName");
  }
  return employee;
}

console.log(Sort(employeeObject, sortType));
