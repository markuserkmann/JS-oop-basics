class Person {
    constructor(name) {
        this.name = name;
        this.dob = null;
    }
    setDateOfBirth(year) {
        this.dob = year;
    }
    getDateOfBirth() {
        return this.dob;
    }
    age() {
        if (this.dob === null) return null;
        var dob = this.dob;
        var year = Number(dob.substr(0, 4));
        var month = Number(dob.substr(4, 2)) - 1;
        var day = Number(dob.substr(6, 2));
        var today = new Date();
        var age = today.getFullYear() - year;
        if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
        age--;
        }
        return age;
    }

    getName() {
        return this.name;
    }

    getDescription() {
        if (this.dob === null) {
            return `${this.name}'s date of birth is missing!`;
        }
        
        const age = this.age();
        if (age === null) {
            return `${this.name}'s age cannot be calculated as the date of birth is missing!`;
        }
        
        return `${this.name} is ${age} years old.`;
    }
}

class Student extends Person {
    constructor(name) {
        super(name)
        this.id = null;
        this.grades = [];
    }
    
    setId(id) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    addGrade(grade) {
        this.grades.push(grade)
        return true;
    }

    getGrades() {
        return this.grades;
    }

    getAverageGrade() {
        if (this.grades == null || this.grades.length === 0) {
            return -1; 
        }
    
        let totalSum = 0;  // Initialize totalSum to 0
    
        for (var i = 0; i < this.grades.length; i++) {
            totalSum += this.grades[i];
        }
    
        var average = totalSum / this.grades.length;
        return Math.floor(average);
    }
}

module.exports = Person;
module.exports = Student;
