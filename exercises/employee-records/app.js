employees = [];

function Employee (firstName, jobTitle, salary, status) {
    this.firstName = firstName;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
}

var employee1 = new Employee("john doe", "dev1", "50k");
var employee2 = new Employee("sarah doe", "dev2", "60k");
var employee3 = new Employee("ryan doe", "dev0", "20k", "Part Time");

console.log(employee1);
console.log(employee2);
console.log(employee3);