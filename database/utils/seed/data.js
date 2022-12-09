const EMPLOYEES = [
  {
    // 0
    firstname: "Eric",
    lastname: "Wu",
    department: "Earth Science",
  },
  {
    // 1
    firstname: "Devin",
    lastname: "Li",
    department: "Physics",
  },
  {
    // 2
    firstname: "Kevin",
    lastname: "Ce",
    department: "Computer Science",
  },
  {
    // 3
    firstname: "Naviat",
    lastname: "Idk",
    department: "Computer Science",
  },
  {
    // 4
    firstname: "Barack",
    lastname: "Obama",
    department: "Politics",
  },
];

const TASKS = [
  {
    Description: "Shower",
    Priority_level: "high",
    Completion_status: true,
    employee_id: 3, // Naviat
  },
  {
    Description: "Eat Dinner",
    Priority_level: "low",
    Completion_status: true,
    employee_id: 4, // Barack
  },
  {
    Description: "Buy Groceries",
    Priority_level: "low",
    Completion_status: false,
    employee_id: 3, // Naviat
  },
  {
    Description: "Do Homework",
    Priority_level: "high",
    Completion_status: false,
    employee_id: 2,
  },
  {
    Description: "Exercise",
    Priority_level: "low",
    Completion_status: false,
    employee_id: 0, // Eric
  },
  {
    Description: "Exercise",
    Priority_level: "low",
    Completion_status: true,
    employee_id: 1, // Devin
  },
  {
    Description: "Exercise",
    Priority_level: "low",
    Completion_status: false,
    employee_id: 2,
  },
  {
    Description: "Exercise",
    Priority_level: "low",
    Completion_status: false,
    employee_id: 3, // Naviat
  },
  {
    Description: "Exercise",
    Priority_level: "low",
    Completion_status: false,
    employee_id: 0, // Eric
  },
  {
    Description: "Achieve 130k salary",
    Priority_level: "low",
    Completion_status: false,
    employee_id: 1, // Devin
  },
  {
    Description: "Achieve 110k salary",
    Priority_level: "low",
    Completion_status: false,
    employee_id: 2, // Devin
  },
  {
    Description: "Achieve 120k salary",
    Priority_level: "low",
    Completion_status: false,
    employee_id: 3, // Naviat
  },
];

module.exports = {
  EMPLOYEES,
  TASKS,
};
