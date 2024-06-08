import inquirer from "inquirer";
let myBalance = 0;
let isContinue = true;
const pinCode = 1234;
const message = "Welcome To ATM ";
console.log(message);
let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please Enter pin code:"
});
if (pin_ans.ans === 1234) {
    do {
        let ans = await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select my option",
            choices: ["Deposite", "Withdraw", "FastCash", "Balance check"]
        });
        //deposite
        if (ans.list === "Deposite") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposite_amount",
                message: "Please Enter Your Amount:"
            });
            if (ans.Deposite_amount > 0) {
                myBalance = myBalance + ans.Deposite_amount;
                console.log(myBalance);
            }
        }
        //withdraw
        else if (ans.list === "Withdraw") {
            let ans = await inquirer.prompt({
                type: "number",
                name: "Withdraw_amount",
                message: "Please Enter Your Amount:"
            });
            if (ans.Withdraw_amount <= myBalance) {
                myBalance = myBalance - ans.Withdraw_amount;
                console.log(myBalance);
            }
            else {
                console.log("Not enough balance");
            }
        }
        //fast cash
        else if (ans.list === "FastCash") {
            let ans = await inquirer.prompt({
                type: "list",
                name: "FastCash",
                message: "Please select one:",
                choices: ["500", "1000", "2000"],
            });
            if (ans.FastCash <= myBalance) {
                if (ans.FastCash === "500") {
                    myBalance -= ans.FastCash;
                    console.log(myBalance);
                }
                else if (ans.FastCash === "1000")
                    myBalance -= ans.FastCash;
                console.log(myBalance);
            }
            else if (ans.FastCash === "2000")
                myBalance -= ans.FastCash;
            console.log(myBalance);
        }
        //check balance
        else if (ans.list === "Balance check") {
            console.log(`Your balance is ${myBalance}`);
        }
        //while condition
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue:"
        });
        if (while_ans.condition === false) {
            isContinue = false;
        }
    } while (isContinue);
}
else {
    console.log("Invalid code");
}
