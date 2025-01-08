const Student = require('./classes/student.js');

let ST = new Student("Markus Erkmann");
// Age format: YearMonthDay
ST.setDateOfBirth("20080226")
ST.setId(12)
ST.addGrade(1)
ST.addGrade(4)
ST.addGrade(5)
console.log("Average grade: ", ST.getAverageGrade())
console.log("Student grades: ", ST.getGrades())
console.log("Student id: ", ST.getId())
console.log(ST.getDescription())