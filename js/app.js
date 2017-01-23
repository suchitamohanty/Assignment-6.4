var employees = [
{
	name : "Pavan Karnam",
	age : 35,
	salary : 30000,
	city : "Manglore",
	state : "Karnataka",
	pincode : 387076
},
{
	name : "Kalpana Victor",
	age : 32,
	salary : 18000,
	city : "Pune",
	state : "Maharastra",
	pincode : 157076
},
{
	name : "Suchita Mohanty",
	age : 30,
	salary : 50000,
	city : "Banglore",
	state : "Karnataka",
	pincode : 560076
},
{
	name : "Atul Samage",
	age : 28,
	salary : 35000,
	city : "Banglore",
	state : "Karnataka",
	pincode : 570076
},
{
	name : "Rajesh Pabbati",
	age : 26,
	salary : 40000,
	city : "Bhubaneswar",
	state : "Odisha",
	pincode : 743076
}
];

for (var i = 0; i < employees.length; i++) {
	console.log('Name: ' + employees[i].name);
	console.log('Age: ' + employees[i].age);
	console.log('Salary: ' + employees[i].salary);
	console.log('City: ' + employees[i].city);
	console.log('State: ' + employees[i].state);
	console.log('Pincode: ' + employees[i].pincode);
}


