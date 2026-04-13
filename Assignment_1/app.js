let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];

console.log(shoppingList[0]);

// Adding an Element
shoppingList.push("carrot")
console.log(shoppingList);

// Deleting an element
shoppingList.pop()
console.log(shoppingList);

// Using splice method

shoppingList[4].splice(1,2,"Cucumbers","Bell Peppers")
console.log(shoppingList);

let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};

// Fetching Specific Value:

// console.log(student);

// Adding Value:

student.phone = "123-456-7890";
console.log(student);

// Removing Value:

delete student.grade;
console.log(student);

// Modifying Value:

student.age = 21;
console.log(student);

// Task 1: Understanding if Statements:

let num = 1;

if(num >= 0){
    console.log("Positive");
}else if(num <= 0){
    console.log("Negative");
}else{
    console.log("zero");
}

// Task 2: Implementing else if Statements:

let grade = 89;

if(grade >= 90){
    console.log("A");
}else if(grade >= 80 && grade <= 89){
    console.log("B");
}
else if(grade >= 70 && grade <= 79){
    console.log("C");
}
else if(grade >= 60 && grade <= 69){
    console.log("C");
}else{
    console.log("F");
}

// Task 3: Exploring Truthy/Falsy Concepts:

// falsy => 0, -0, "", '', undefined, null, nan => false
// anything apart from falsy is treated as truthy values => true

let truthy = "Gautam";

if(truthy){
    console.log("Truthy");
}else{
    console.log("Falsy");
}