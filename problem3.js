//Create an object with three items in it, then 
//write a JavaScript function that accepts an object and tells you the length (tells you how many items are in it) of the object.


const shoe = {
    model: "Jordan",
    year: 2005,
    color: "black",
};

function numOfItems(obj) {
    return Object.keys(obj).length
};
console.log(numOfItems(shoe));
