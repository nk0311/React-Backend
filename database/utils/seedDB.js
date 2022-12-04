const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Eric",
		lastname: "Wu",
		department: "Earth Science"
	});
	const dummyInstructor2 = await Employee.create({
		firstname: "Kim",
		lastname: "Kardashian"
	});

	const dummyTask = await Task.create({
		Description: "Yum yum yum",
        Priority_level: "low",
        Completion_status: true
	});

	await dummyTask.setEmployee(dummyEmployee);
	await dummyTask.setEmployee(dummyInstructor2);
	
	
}

module.exports = seedDB;