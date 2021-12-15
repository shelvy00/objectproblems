//Create an array of people objects with first name, last name, and age,
//then write a JavaScript function that takes in an array and console logs the first and last names of all the people.

const people = [
    {
     firstName: "Tim", 
     lastName: "Brown", 
     age: 40,
    },
    {
     firstName: "Dan", 
     lastName: "Johnson", 
     age: 51,
    },
    {
     firstName: "John", 
     lastName: "Murphy", 
     age: 36,
    }
];

function getFullName(nameList) {
  nameList.forEach(function(a) {
    console.log(a.firstName + " " + a.lastName);
 });
}

getFullName(people)

//Option 2

/*function getFullName() {
    people.forEach(function(a) {
     console.log(a.firstName + " " + a.lastName);
   });
}

getFullName()*/