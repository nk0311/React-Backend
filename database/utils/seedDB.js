const { Employee, Task } = require('../models');

const seedDB = async () => {
	const dummyEmployee = await Employee.create({
		firstname: "Melissa",
		lastname: "Lynch",
		department: "Computer Science"
	});
	const dummyEmployee2 = await Employee.create({
		firstname: "Kim",
		lastname: "Kardashian",
        department: "Instagram Model"

	});

	const dummyTask = await Task.create({
		description: "Broken Tv",
        priority_level: "Low",
        completion_status: true
	});

	await dummyTask.setEmployee(dummyEmployee);
	
}

module.exports = seedDB;