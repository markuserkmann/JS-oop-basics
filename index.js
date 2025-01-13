const Student = require('./classes/student.js');
const Course = require('./classes/course.js')
const School = require('./classes/school.js')

let ST = new Student("Markus Erkmann1");
let Nt = new Student("Markus Erkmann2");
Nt.setDateOfBirth("20080226")
Nt.setId(12)
Nt.addGrade(5)
Nt.addGrade(4)
Nt.addGrade(5)
// Age format: YearMonthDay
ST.setDateOfBirth("20080226")
ST.setId(12)
ST.addGrade(1)
ST.addGrade(4)
ST.addGrade(5)


let Co = new Course("Mata")
let Ck = new Course("Mata2")
Co.addStudent(ST)
Co.addStudent(Nt)

let Sc = new School("Test")
Sc.addCourse(Co)
Sc.addCourse(Ck)
Sc.addStudent(ST)
Sc.addStudent(Nt)
Sc.addStudentGrade(ST, Co, 5)
Sc.getStudentsOrderedByAverageGrade()