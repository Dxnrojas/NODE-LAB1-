import students from "./data/students.js";
import {renderStudents} from "./studentsRender.js"
import { orderCourse } from "./utils/orderCourse.js";
import { filterGrade } from "./utils/filterGrade.js"
import { averageGrade} from "./utils/averageGrades.js"
import { alphabeticName } from "./utils/alphabeticName.js"

const container = document.querySelector(".app");

const principalTitle = document.createElement('h1');
principalTitle.textContent = 'Students';
container.appendChild(principalTitle);


const studentsOrderCourse = orderCourse(students);
const studentsFilterGrade = filterGrade(students);
const studentsAverageGrade = averageGrade(students);
const studentsAlphabeticName = alphabeticName(students);



students.forEach((student)=>{

    const studentsFigure = renderStudents(student);
    container.appendChild(studentsFigure);
});