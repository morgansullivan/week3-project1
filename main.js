// JavaScript Function Exercises

// 1. Define a function called "divideByTwo". It should accept one parameter called "number".
//    The function should divide the number by two and output the answer.

console.log("Question 1")

var divideByTwo = function(number) {
  console.log(number/2);
};

var number = 10

divideByTwo(number);

// 2. Define a function called "greeting". It should accept two parameters, which will be names.
//    The function should output the a greeting to both people.

console.log("Question 2")

var greeting = function(personName) {
  console.log("Hello " + personName)
}

var name1 = "Joanie";
var name2 = "Chachi";

greeting(name1);
greeting(name2);

// 3. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month, but the price keeps changing.
//    Write a function that takes the price per unit and calculates the total for you each month.

console.log("Question 3")

var pricePerMonth = function(pricePerUnit, daysPerMonth) {
  console.log(pricePerUnit * daysPerMonth)
}

var pricePerUnit = 25;
var daysPerMonth = 31;

pricePerMonth(pricePerUnit, daysPerMonth);

// 4. Write a function that accepts the following array and separates the people into two teams.
//    No names next to eachother in the array should be on the same team.
      teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

// 5. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.

console.log("Question 5")

var quarter = function(number) {
  console.log(number/4);
}
  
var number = 20;

quarter(number);

// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

console.log("Question 6")

var area = function(width, height){
  console.log(width * height)
}


var perimeter = function(width, height) {
  console.log((width*2)+(height*2))
}

var width = 4;
var height = 5;

area(width,height);
perimeter(width,height);

// 7. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, print a statement to the console about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

var sleeping = function(hours){
  if (hours >= 8) {
    console.log("Rise and shine! You're not tired!");
  } else {
      console.log("Sleepy... Zzzzzz....");
  }
}

var hours = 10;

sleeping(hours);

// 8. Prompt a user to enter a three digit number. Write a function that adds the numbers together.
//    HINT: You may need to google how to turn a string into an integer. 
//          Note: Strings can be treated as arrays too.

//Figured out how to have the function spit out an integer, 
//and I know I need to put in reduce() somewhere, but I can't figure out at what point.

var askNumber = prompt("Fill in three numbers, and I will go away! Yay!");

var addNumbers = function(askNumber) {
  console.log(parseInt(askNumber));
}

addNumbers(askNumber);

// 9. You've finally gotten around to counting the change in your piggy bank. Write a function that accepts four parameters (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Googling the toFixed method will help you with the format.

// 10. Develop a function that determines a person's age by prompting them for their birth year.


// 11. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

// 12. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.
       arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]

// 13. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     To get the random number rolled by each die, use Math.random and Math.floor.

// 14. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.

// Extra Challenge: 
// 15. Write a function that takes a year and reports whether or not it is a leap year.
//     Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is.  1900 is not a leapyear, but 2000 is.
