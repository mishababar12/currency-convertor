import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bgGreen("\n\tWelcome to Mrs Babar - Currency Converter\n"))

//make an object 
let exchange_rate: any = {
    "USD": 1, //base currency
    "EUR": 0.9, //european currency
    "JYP": 113, //japanese currency
    "CAD": 1.3, //canadian dollar
    "AUD": 1.65, //australian dollar
    "PKR": 280, //pakistan rupees
}
//input from user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name : "from_currency",
        type : "list",
        message : "Select the currency to convert from:",
        choices : ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name : "to_currency",
        type : "list",
        message : "Select the currency to convert into:",
        choices : ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name : "Amount",
        type : "number",
        message : "Enter the amount to convert:"
    }
]);

//using formula of currency converter
let from_amount = exchange_rate[user_answer.from_currency]
let to_amount = exchange_rate[user_answer.to_currency]
let amount = user_answer.Amount

//formula of conversion
let base_amount = amount / from_amount
let convrted_amount = amount * to_amount

//display converted amount
console.log(chalk.yellow.underline(`converted Amount =====> ${convrted_amount}`))