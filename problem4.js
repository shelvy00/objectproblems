//Create an object, then write a JavaScript function that checks whether an object contains the specified key.

const shoe = {
    model: "Jordan",
    year: 2005,
    color: "black",
};

function checkItem(obj, item) {
  return obj.hasOwnProperty(item);
};
console.log(checkItem(shoe, "year"));