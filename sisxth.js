// Question 6: Shopping Bill (10 Marks)
// A customer purchases three products.
// Ask the user to enter the price of each product and calculate:
// 1. Total bill
// 2. Discount amount (10%)
// 3. Final bill after discount
let firstproduct = Number( prompt( "enter price of 1 product"));
let secondproduct = Number(prompt("enter price of 2 product")) ;
let thirdpro = Number( prompt("enter price of 3 product"));
let totalbill = firstproduct + secondproduct + thirdpro;
let discount =  totalbill * 10 / 100
let discountammount = totalbill - discount
console.log("totalbill:" + totalbill)
console.log( "Discount:" + discount)
console.log( "FinalPrice:" + discountammount)