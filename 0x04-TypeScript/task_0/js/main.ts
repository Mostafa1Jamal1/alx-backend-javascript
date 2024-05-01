interface Student {
    firstName: string;
    lastName: string;
    age: string;
    location: string
}

const student1: Student = { firstName: 'mostafa', lastName: 'jamal', age: '25', location: 'Cairo' };
const student2: Student = { firstName: 'tariq', lastName: 'abdelhameed', age: '30', location: 'Shobra' };
const studentsList = [student1, student2];

const table = document.createElement('table');
document.body.appendChild(table);

studentsList.forEach((row) => {
    const tr = table.insertRow();
    const td = tr.insertCell();
    td.innerText = row.firstName + ' ' + row.location
})