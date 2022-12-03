const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});
	const dummyInstructor2 = await Employee.create({
		firstname: "Kim",
		lastname: "Kardashian"
	});

	const dummyTask = await Task.create({
		Description: "Teach us",
        Priority_level: "high",
        Completion_status: true
	});

	await dummyTask.setInstructor(dummyEmployee);
	
}

module.exports = seedDB;