class Company {
    constructor(){
        this.departments = {};
    }

    addEmployee(name, salary, position, department){
        if(!name || !salary || salary < 0
             || !position || !department){
            throw new Error('Invalid input!');
        }

        if(!this.departments.hasOwnProperty(department)){
            this.departments[department] = [];
        }

        let employee = {
            name,
            salary,
            position
        };

        this.departments[department].push(employee);
        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment(){
        let bestDepartment = '';
        let bestAvgSalary = 0;
        let result = [];

        Object.entries(this.departments)
        .forEach(el => {
            let currDepartmentAvgSalary = el[1].reduce((acc, x) => acc + x.salary, 0) 
            / el[1].length;

            if(currDepartmentAvgSalary > bestAvgSalary){
                bestAvgSalary = currDepartmentAvgSalary;
                bestDepartment = el[0];
            }
        });

        result.push(`Best Department is: ${bestDepartment}`);
        result.push(`Average salary: ${bestAvgSalary.toFixed(2)}`);

        this.departments[bestDepartment].sort((a, b) => {
            if(b.salary - a.salary === 0){
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            }

            return b.salary - a.salary;
        }).forEach(el => result.push(`${el.name} ${el.salary} ${el.position}`));

        return result.join('\n');
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());