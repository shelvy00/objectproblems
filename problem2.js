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

people.forEach(function(nameList) {
    console.log(nameList.firstName + " " + nameList.lastName);
  });