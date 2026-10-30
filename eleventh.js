
// Section D — Logic Challenge (20 Marks)
// Question 11: Currency Converter (10 Marks)
// Create a currency converter that converts Pakistani Rupees (PKR) into US Dollars (USD).
// Use a fixed exchange rate:
// 1 USD = 280 PKR
// Ask the user to enter an amount in PKR and display the equivalent amount in USD.
// Sample Input:
// Enter PKR: 5600

// Expected Output:
// Equivalent USD: $20



var PKR = Number(prompt("enter PKR amount"))
console.log("Enter PKR:" ,PKR);
let convertor = PKR *  0.00361
console.log("Equivalent USD:" , convertor);
   
