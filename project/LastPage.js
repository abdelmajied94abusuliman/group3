let abdAbsent = 1;
let abrarAbsent = 0;
let ahmadAbsent = 1;
let amrooAbsent = 3;
let abdTask = 10;
let abrarTask = 10;
let ahmadTask = 10;
let amrooTask = 10;
let abdSolvedTask = 10;
let abrarSolvedTask = 8;
let ahmadSolvedTask = 9;
let amrooSolvedTask = 5;


let studentData = JSON.parse(localStorage.getItem('student-data')) || [
    {
        id : 1,
        name : 'Abdelmajied Abu Suliman',
        absent : abdAbsent,
        addTask : abdTask,
        solvedTask : abdSolvedTask,

    },
    {
        id : 2,
        name : 'Abrar Alhilawy',
        absent : abrarAbsent,
        addTask : abrarTask,
        solvedTask : abrarSolvedTask,

    },
    {
        id : 3,
        name : 'Ahmad Zytoon',
        absent : ahmadAbsent,
        addTask : ahmadTask,
        solvedTask : ahmadSolvedTask,

    },
    {
        id : 4,
        name : 'Amroo Al-Wageei',
        absent : amrooAbsent,
        addTask : amrooTask,
        solvedTask : amrooSolvedTask,

    }
]

localStorage.setItem(`student-data` , JSON.stringify(studentData))

let callDataFromLocal = JSON.parse(localStorage.getItem('student-data'))

function setData() {

        callDataFromLocal = JSON.parse(localStorage.getItem('student-data'))

        let myValue = document.getElementById("select").value
    
        var html = "<table  border='2' style='width:100%'>";
      
        html += "<tr>";
        html += "<td>" + `ID` + "</td>";
        html += "<td>" + `Student Name` + "</td>";
        html += "<td>" + `Number of abcent` + "</td>";
        html += "<td>" + `Number of Total Task` + "</td>";
        html += "<td>" + `Number of Task's Solved` + "</td>";
        html += "<td>" + `Feedback from Coach Mona` + "</td>";
        html += "<td>" + `Feedback from Coach Alaa` + "</td>";
        html += "</tr>";
      

        html += "<tr>";
        html += "<td>" + callDataFromLocal[myValue].id + "</td>";
        html += "<td>" + callDataFromLocal[myValue].name + "</td>";
        html += `<td id='AddAbsentHere'> ${callDataFromLocal[myValue].absent} <button id='clickToAddAbsent' onclick='increaseAbs(${callDataFromLocal[myValue].absent},${myValue})' > + </button> <button id='clickToSubAbsent' onclick='decreaseAbs(${callDataFromLocal[myValue].absent},${myValue})' > - </button> </td>`;
        html += `<td id='AddTaskHere'>  ${callDataFromLocal[myValue].addTask} <button id='clickToAddTask' onclick='increaseTask(${callDataFromLocal[myValue].addTask},${myValue})' > + </button> <button id='clickToSubTask' onclick='decreaseTask(${callDataFromLocal[myValue].addTask},${myValue})'> - </button>  </td>`;
        html += `<td id='AddSolvedHere'> ${callDataFromLocal[myValue].solvedTask} <button id='clickToAddSolved' onclick='increaseSolv(${callDataFromLocal[myValue].solvedTask},${myValue})' > + </button> <button id='clickToSubSolved' onclick='decreaseSolv(${callDataFromLocal[myValue].solvedTask},${myValue})'> - </button> </td>`;
        html += `<td id='coach-mona-feedback'> <p id='Mfeedbck'></p> </td>`;
        html += `<td id='coach-alaa-feedback'> <p id='Afeedbck'></p> </td>`;


        html += "</tr>";

        html += "</table>";
        document.getElementById("tableContainer").innerHTML = html;
}

function increaseAbs(recieveData, indexValue){
    recieveData = recieveData + 1;
    studentData[indexValue].absent = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function decreaseAbs(recieveData, indexValue){
    recieveData = recieveData - 1;
    studentData[indexValue].absent = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function increaseTask(recieveData, indexValue){
    recieveData = recieveData + 1;
    studentData[indexValue].addTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function decreaseTask(recieveData, indexValue){
    recieveData = recieveData - 1;
    studentData[indexValue].addTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function increaseSolv(recieveData, indexValue){
    recieveData = recieveData + 1;
    studentData[indexValue].solvedTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}
function decreaseSolv(recieveData, indexValue){
    recieveData = recieveData - 1;
    studentData[indexValue].solvedTask = recieveData;
    localStorage.setItem(`student-data` , JSON.stringify(studentData))
    setData()
}