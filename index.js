import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "input",
        name: "userId",
        message: "kindly enter your Id:"
    },
    {
        type: "password",
        name: "userPin",
        message: "kindly enter your Pin:"
    },
    {
        type: "list",
        name: "acountType",
        choices: ["current", "saving"],
        message: "select your acount type",
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["fast cash", "withdraw"],
        message: "select your transaction",
        when(answers) {
            return answers.acountType;
        },
    },
    {
        type: "list",
        name: "amount",
        choices: [500, 1000, 2000, 10000, 20000, 50000],
        message: "select your amount",
        when(answers) {
            return answers.transactionType == "fast cash";
        },
    },
    {
        type: "number",
        name: "amount",
        message: "select your amount ",
        when(answers) {
            return answers.transactionType == " with draw";
        },
    },
]);
if (answers.userId && answers.userPin) {
    const balance = Math.floor(Math.random() * 10000000);
    console.log(balance);
    const EnteredAmount = answers.amount;
    if (balance >= EnteredAmount) {
        const remaining = balance - EnteredAmount;
        console.log("your remainingbalance is", remaining);
    }
    else {
        console.log("insuficient balance");
    }
}
console.log(answers);
