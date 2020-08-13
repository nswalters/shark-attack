const students = [{
  id: 1,
  firstName: 'Jeremiah',
  lastName: 'Vasquez',
  isAlive: true,
},
{
  id: 2,
  firstName: 'Austin',
  lastName: 'Phy',
  isAlive: true,
},
{
  id: 3,
  firstName: 'Brooke',
  lastName: 'Nemchak',
  isAlive: true,
},
{
  id: 4,
  firstName: 'Geno',
  lastName: 'McNew',
  isAlive: true,
},
{
  id: 5,
  firstName: 'Gwynne',
  lastName: 'Meeks',
  isAlive: true,
},
{
  id: 6,
  firstName: 'Jeanine',
  lastName: 'Beckle',
  isAlive: true,
},
{
  id: 7,
  firstName: 'Jim',
  lastName: 'Browning',
  isAlive: true,
},
{
  id: 8,
  firstName: 'Jonathan',
  lastName: 'Shearon',
  isAlive: true,
},
{
  id: 9,
  firstName: 'Joshua',
  lastName: 'Medlen',
  isAlive: true,
},
{
  id: 10,
  firstName: 'Kamiran',
  lastName: 'Ibrahim',
  isAlive: true,
},
{
  id: 11,
  firstName: 'Mark',
  lastName: 'Young',
  isAlive: true,
},
{
  id: 12,
  firstName: 'Matt',
  lastName: 'Logan',
  isAlive: true,
},
{
  id: 13,
  firstName: 'Michael',
  lastName: 'Dotson',
  isAlive: true,
},
{
  id: 14,
  firstName: 'Nate',
  lastName: 'Owens',
  isAlive: true,
},
{
  id: 15,
  firstName: 'Nick',
  lastName: 'Walters',
  isAlive: true,
},
{
  id: 16,
  firstName: 'Nikhil',
  lastName: 'Gaikwad',
  isAlive: true,
},
{
  id: 17,
  firstName: 'Ola',
  lastName: 'Oladinni',
  isAlive: true,
},
{
  id: 18,
  firstName: 'Pete',
  lastName: 'Stewart',
  isAlive: true,
},
{
  id: 19,
  firstName: 'Phonesalo',
  lastName: 'Sihanorak',
  isAlive: true,
},
{
  id: 20,
  firstName: 'Ryan',
  lastName: 'Beiden',
  isAlive: true,
},
{
  id: 21,
  firstName: 'William',
  lastName: 'Campbell',
  isAlive: true,
}];

let studentsSharkFood = [];

// return array of students where student.isAlive === true
const livingStudents = () => students.filter((student) => student.isAlive === true);

// return array of students where student.isAlive === false
const dearlyBeloved = () => students.filter((student) => student.isAlive === false);

// Find a student with given id and change student.isAlive === false
const followTheLight = (studentId) => {
  students.find((student) => student.id === studentId).isAlive = false;
};

const reviveStudents = () => {
  students.forEach((student) => {
    students.find((stdnt) => stdnt.id === student.id).isAlive = true;
  });
  studentsSharkFood = [];
};

const sharkAttack = () => {
  let sharkFoodStudent = Math.floor(Math.random() * Math.floor(students.length)) + 1;

  if (studentsSharkFood.length !== students.length) {
    while (studentsSharkFood.indexOf(sharkFoodStudent) > -1 || sharkFoodStudent === 0) {
      sharkFoodStudent = Math.floor(Math.random() * Math.floor(students.length)) + 1;
    }

    followTheLight(sharkFoodStudent);
    studentsSharkFood.push(sharkFoodStudent);
  } else {
    sharkFoodStudent = 0;
  }
  return students.find((student) => student.id === sharkFoodStudent);
};

export default {
  dearlyBeloved,
  followTheLight,
  livingStudents,
  reviveStudents,
  sharkAttack,
};
