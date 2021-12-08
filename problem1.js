//Create a sample object, then write a JavaScript function that deletes the property of an object passed to it.
//Your JavaScript function should take in two parameters, the object and the key/property you want to delete.

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "brown", 
};

function removeObject(object, property) {
    delete person.eyeColor;
    return person
}
console.log(removeObject(person, "eyeColor"));

/*const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "brown", 
    optionsAdded: {
     premiumPackage: true,
     sportsBrake: true,
     spaceSaver: false,
     advanceGPS: true,
    }
};

function removeObject(object, property) {
    delete person[property];
    return person;
}
console.log(removeObject(person, "optionsAdded"));*/