class School {
    constructor(name) {
        this.SchoolName = name;
        this.Courses = [];
        this.Students = [];
    }

    addCourse(course) {
        for (let i in this.Courses) {
            if (this.Courses[i].courseName === course.courseName) {
                console.log("The course is already added!");
                return;
            }
        }
        this.Courses.push(course);
    }

    IsStudentAlreadyAdded(studentid) {
        if (this.Students.length === 0) {
            return false;
        }
        for (let i in this.Students) {
            if (this.Students[i].getId() === studentid) {
                return true;
            }
        }
        return false;
    }

    addStudent(student) {
        if (student.age < 8 || this.IsStudentAlreadyAdded(student.getId())) {
            console.log("Error: The student is already added or too young for the school!");
            return;
        }
        this.Students.push(student);
        console.log(student.age);  // assuming age is a property, not a method
    }

    isStudentInSchool(studentName, ID) {
        for (let i in this.Students) {
            if (this.Students[i].name === studentName && this.Students[i].id === ID) {
                return true;
            }
        }
        return false;
    }

    addStudentGrade(student, course, grade) {
        let isInSchool = this.isStudentInSchool(student.name, student.id);
        if (isInSchool) {
            if (course.addGradeForStudent(student.id, grade) && student.addGrade(grade)) {
                console.log("Added grade successfully to the course and the student object!");
            }
        }
    }

    getStudents() {
        return this.Students;
    }

    getCourses() {
        return this.Courses;
    }

    getStudentAvgG(l) {
        if (this.Students[l] == null || this.Students[l].grades.length === 0) {
            return -1; 
        }

        let totalSum = 0;
        for (let i = 0; i < this.Students[l].grades.length; i++) {
            totalSum += this.Students[l].grades[i];
        }

        let average = totalSum / this.Students[l].grades.length;
        return Math.floor(average);
    }

    getStudentsOrderedByAverageGrade() {
        let studentsSorted = [...this.Students];
        studentsSorted.sort((a, b) => {
            const avgA = this.getStudentAvgG(this.Students.indexOf(a));
            const avgB = this.getStudentAvgG(this.Students.indexOf(b));
            return avgB - avgA;
        });
        
        console.log("Students ordered by average grade:");
        for (let student of studentsSorted) {
            const avgGrade = this.getStudentAvgG(this.Students.indexOf(student));
            console.log(`${student.name}: ${avgGrade}`);
        }
    }
}

module.exports = School;
