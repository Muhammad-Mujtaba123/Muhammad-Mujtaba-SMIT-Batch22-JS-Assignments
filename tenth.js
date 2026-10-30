// Question 10: Marks Percentage Calculator (10 Marks)
// Ask the user to enter marks for five subjects.
// Each subject has a maximum of 100 marks.
// Calculate:
// 1. Total obtained marks
// 2. Total maximum marks
// 3. Percentage
// Sample Input:
// English: 80
// Math: 90
// Science: 75
// Computer: 95
// Urdu: 85
// Expected Output:
// Obtained Marks: 425
// Total Marks: 500
// Percentage: 85%
var entermarks1 = Number( prompt("enter english marks") )
var entermarks2 = Number( prompt("enter math marks") )
var entermarks3 = Number( prompt("enter science marks") )
var entermarks4 = Number( prompt("enter computer marks") )
var entermarks5 = Number( prompt("enter urdu marks") )
console.log("English:", entermarks1);
console.log(" Math:" ,entermarks2 );
console.log("Science:" ,entermarks3 );
console.log(" Computer:" , entermarks4 );
console.log(" Urdu: " , entermarks5 );
let Obtained_marks = entermarks1 + entermarks2 + entermarks3 + entermarks4 + entermarks5
console.log("Obtained Marks:" , Obtained_marks);
let total_marks = 500
console.log("Total Marks:" , total_marks);
let Percentage = Obtained_marks / total_marks * 100
console.log("Percentage:",Percentage,"%");




