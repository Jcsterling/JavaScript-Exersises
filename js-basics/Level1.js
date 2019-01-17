//1. create variable and output content in 3 different ways
let name ="jeeves"

console.log(name)
document.write(name)
alert(name);


//2. Create a function that accepts a number and returns its square
function sqaureThat(number){
   

    return Math.pow(number,2)
}
console.log(sqaureThat(5))


//3. Create a function that accepts 3 numbers and returns the sum of them
function sum(num1, num2, num3){
    let finalSum = num1 + num2 + num3;
    return finalSum  
}
console.log(sum(5,4,25))

/*
4. Create a Person object with three attributes. name, age, and occupation.
Output the contents of your object, then edit your object, then output them again
to show the changes.
*/

function createPersonObject(name, age, occupation){
    let person = {};
    person.name = name;
    person.age = age;
    person.occupation = occupation;
    return person;
}


/*
5. Create a HTML button that calls a function when clicked.
The function that it calls should increase the age of your person object.
*/
function printPersonAndIncreaseAge(){
    
    personObject.age = personObject.age +1;   
    console.log(personObject);

//the button in question is in the index.html file. 
// <input type = "button" value="age button" onclick="printPersonAndIncreaseAge()">
} 


/*
5 & 4. the two above methods will call the below statements because they have 
a higher scope than both methods. this is because they are outside of
any curly brackets
*/

let personObject = createPersonObject ("hurricane d luffy", 19, "PIRATE");
console.log(personObject);

/*
6. Create a series of textboxes and buttons that let you create a Person object with
data from the textboxes, output your Person object, as well as edit your Person
object.
*/

function createPersonFromBrowser(){
   
    inputName = document.getElementById("myText1").value;
    inputAge = document.getElementById("myText2").value;
    inputOccupation = document.getElementById("myText3").value;

    let turnAgeToNumber = Number(inputAge);
    let personObjectFromBrowser = createPersonObject (inputName, turnAgeToNumber, inputOccupation)
    console.log(personObjectFromBrowser);

}

  
/*
7. Create a variable with “ He said “My name is Elliott” ” as the value, and
display it.
Using String Methods, convert this string to uppercase, and display it.
*/

let sentance = " He said 'my name is Elliott'" ;
let convertToUpperCase = sentance.toUpperCase();
console.log(convertToUpperCase);


/*
8. Concatenate a String and a Number together, and output the result.
*/
let concat = 8 + "mandrake";
console.log(concat);

/*
9. Create an array with 3 strings inside of it, and output them.
Then add another string to your array, and output them.
Then remove the last string from the array, and output them.
*/
let newArray =  ["frozone", "dash", "voilet"];
//add a new member
newArray[newArray.length] = "mr incredible";
console.log(newArray);
newArray.splice(1,1);
console.log(newArray);

/*
10. Using conditional statements, create a function that checks if your person object is
between 20-40 years old, then outputs if that fact is true or not.
*/


function checkAge(){
    
    inputName = document.getElementById("myText1").value;
    inputAge = document.getElementById("myText2").value;
    inputOccupation = document.getElementById("myText3").value;
    
    let turnAgeToNumber = Number(inputAge);
    let personObjectFromBrowser = createPersonObject(inputName, turnAgeToNumber, inputOccupation);

    let ageChecker = (personObjectFromBrowser.age <= 40 && personObjectFromBrowser.age >= 20) ? true : false;

    console.log(ageChecker);
}

/*
11. Create a for loop that increments from 1 to 10, outputting the current iteration at
each step.
*/
for (let i = 1; i <= 10; i++){
    // conditional added to print the number only if its divisible by 2
    if (i % 2 == 0){
        console.log(i);
    }
    
}



function alertHello(){
    document.getElementById("myText1").value
}