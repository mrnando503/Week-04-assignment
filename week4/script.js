//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages);

// 1a.	Programmatically subtract the value of the first element in the array from the lastelement
console.log(ages [ages.length-1] - ages[0]);

// 1b.	Add a new age to your array and repeat the step above to ensure it is dynamic. 
ages.push(10);
console.log(ages);

// 1c.	Use a loop to iterate through the array and calculate the average age. 
let sumOfAges= 0;

for(let i = 0;i < ages.length; i++){
    sumOfAges += ages[i];
    } let average = sumOfAges / ages.length;

     console.log(average);
// 2. Create an array called names that contains the following values: 'Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"]
console.log(names);

//2a.	Use a loop to iterate through the array and calculate the average number of letters per name. 
let sumOfNames = 0;

for(let i = 0;i < names.length; i++){

  let  sumOfNamesLenght = names[i].length;

console.log(sumOfNamesLenght);

    sumOfNames += sumOfNamesLenght[i]
    averageLettersLenght = sumOfNames / sumOfNamesLenght;
    } ;
 

 //2b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 
 let stringNames = "";
 for (let i = 0; i < names.length; i++) {
    stringNames += names[i] + " ";

 } console.log(stringNames);

 //3.	How do you access the last element of any array? (To access the last element of the array you can you variableName.length-1)

//4.	How do you access the first element of any array? (The first element of the array is always array[0]).

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}; console.log(nameLengths);

//6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
let sumOfNameLengths = 0;
for (let i = 0; i < nameLengths.length; i++) {
    sumOfNameLengths += nameLengths[i]
}; console.log(sumOfNameLengths);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function wordRepeat(word,n){
multiplyWord = word * n;
return multiplyWord;

} console.log(wordRepeat + 'hello')

//8.Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.

function myName (firstName, lastName) {
    fullName = firstName +' ' + lastName;
    return fullName;
} console.log(myName('Edwin', 'Lopez'))

//9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

function numberOver (array){
   let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
}
    if (sum > 100) {

        return true;
    } else {
        return false;
    }
}