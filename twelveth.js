
// Question 12: Salary Calculator (10 Marks)
// A company calculates employee salaries using the following structure:
// • Basic Salary: Entered by the user
// • House Allowance: 20% of basic salary
// • Medical Allowance: 10% of basic salary
// • Tax Deduction: 5% of basic salary
// Calculate:
// 1. House allowance
// 2. Medical allowance
// 3. Tax deduction
// 4. Gross salary
// 5. Net salary after tax
// Sample Input:
// Basic Salary: 50000
// Expected Output:
// Basic Salary: Rs. 50000
// House Allowance: Rs. 10000
// Medical Allowance: Rs. 5000
// Gross Salary: Rs. 65000
// Tax Deduction: Rs. 2500
// Net Salary: Rs. 62500

var basicsalary = 50000;

var Houseallowance = basicsalary / 100 * 20;
var Medicalallowance = basicsalary / 100 * 10;
var text_deduction = basicsalary / 100 * 5;

var grossSalary = basicsalary + Houseallowance + Medicalallowance;

var Net_salary = grossSalary - text_deduction;

console.log("Basic Salary: " + basicsalary);
console.log("House Allowance: " + Houseallowance);
console.log("Medical Allowance: " + Medicalallowance);
console.log("Gross Salary: " + grossSalary);
console.log("Tax Deduction: " + text_deduction);
console.log("Net Salary: " + Net_salary);



