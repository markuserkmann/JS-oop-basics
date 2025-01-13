class Course {
    constructor(cName) {
        this.courseName = cName
        this.courseGrades = []
        this.students = []
    }
    addStudent(student) {
        this.students.push(student)
    }
    getStudents() {
        return this.students
    }
    getStudentGrades() {
        const studentGrades = [];
        for (const student of this.students) {
            if (student.grades && student.grades.length > 0) {
                studentGrades.push({
                    studentName: student.name,
                    grades: student.grades
                });
            }
        }
        return studentGrades;
    }
    addGradeForStudent(studentid, grade) {
        for(let i in this.students) {
            if (this.students[i].id === studentid ) {
                this.students[i].grades.push(grade)
                return true;
            }
        }
        return false;
    }
    description() {
        return `The course name is: ${this.courseName}`
    }
    getAverageGrade() {
        let grades = []
        let totalSum = 0
        if (this.students == null || this.students.length === 0) {
            return -1; 
        }
    
        for(const i in this.students) {
            for(const k in this.students[i].grades) {
                grades.push(this.students[i].grades[k])
            }
        }
        for (var i = 0; i < grades.length; i++) {
            totalSum += grades[i];
        }
    
        var average = totalSum / grades.length;
        return Math.floor(average);
    }
}

module.exports = Course;