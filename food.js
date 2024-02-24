var prompt = require('prompt-sync')();

let name = prompt("Enter your name =>");
console.log("Hello!", name, "=>**Welcome in Vishu Restaurant.**\n");

console.log("What would you like to eat..?\n 1. Breakfast\n 2. Lunch \n 3. Dinner\n");
let opt = parseInt(prompt("Enter your choice no. only=>"));

if (opt < 4) {
    if (opt == 1 || opt == 2 || opt == 3) {
        let mealType = "";
        let menu = [];

        if (opt == 1) {
            mealType = "Breakfast";
            menu = [
                { name: "Maggie", price: 50 },
                { name: "Sandwich", price: 65 },
                { name: "Poha", price: 45 }
            ];
        } else if (opt == 2) {
            mealType = "Lunch";
            menu = [
                { name: "Daal rice", price: 150 },
                { name: "Razma-Rice", price: 160 },
                { name: "Chhole-chawal", price: 140 }
            ];
        } else if (opt == 3) {
            mealType = "Dinner";
            menu = [
                { name: "Chapati-veg", price: 70 },
                { name: "Chhole-bhatoore", price: 100 },
                { name: "Puri-veg", price: 90 }
            ];
        }

        console.log(`\nSelect any ${mealType}:\n`);
        menu.forEach((item, index) => {
            console.log(`${index + 1}. ${item.name} - ${item.price} Rs`);
        });

        let choice = parseInt(prompt("Enter your choice number =>"));
        if (choice > 0 && choice <= menu.length) {
            let plateno = parseInt(prompt("Enter how many plates you want =>"));
            let totalrs = plateno * menu[choice - 1].price;
            console.log(`Your total bill is: ${totalrs} Rs`);

            let payment = parseInt(prompt("Enter your payment=>"));
            while (true) {
                if (payment == totalrs) {
                    console.log(`Thank you, ${name}! Your payment is done.`);
                    break;
                } else if (payment > totalrs) {
                    let extra = payment - totalrs;
                    console.log(`Take your change: ${extra} Rs`);
                    break;
                } else {
                    console.log("Enter a valid amount:");
                    let need = totalrs - payment;
                    let payment2 = parseInt(prompt(`${need} Enter your payment=>`));
                    payment += payment2;
                }
            }
        } else {
            console.log("Invalid choice.");
        }
    } else {
        console.log("Invalid choice.");
    }
} else {
    console.log("Sorry! Your choice is invalid. Please try again.");
}
