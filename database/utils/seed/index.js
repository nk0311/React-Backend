const { Employee, Task } = require("../../models");
const { EMPLOYEES, TASKS } = require("./data");

async function seedingTask() {
  // clear tables
  await Task.destroy({ where: {} });
  await Employee.destroy({ where: {} });

  // seed employees and store to array
  const seedEmployeeCalls = EMPLOYEES.map((employee) =>
    Employee.create(employee).then((createdEmployee) => {
      return createdEmployee;
    })
  );

  const createdEmployees = await Promise.all(seedEmployeeCalls);
  const seedTaskCalls = TASKS.map((task) => {
    // create tasks then link to employees stored in array
    return Task.create(task).then(async (createdTask) => {
      const { employee_id } = task;
      return createdTask.setEmployee(createdEmployees[employee_id]);
    });
  });

  await Promise.all(seedTaskCalls);
}

module.exports = seedingTask;
