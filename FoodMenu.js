var prompt = require('prompt-sync')();
/*****************************************************************************
                                 **FOOD MENU**
******************************************************************************/ 
let name=prompt("Enter your name =>");
console.log("Hello !",name,"=>*** Welcome in Vishu Resturent.***\n ");

console.log("What would you like to eat..?\n 1.breakfast\n 2.Lunch \n 3.Dinner");
let opt=parseInt(prompt("Enter your choice no. only=>"));
switch (opt) {
    case 1:
        console.log("Thank you, You choose breakfast.\n");
        console.log("what do you want eat in Breakfast :\n 1.Halwa\n 2.Chana\n 3.Maiggi\n");
        let breakf=parseInt(prompt("Enter your choice in no.=>"));
        if (breakf==1){
        console.log("Enter you choice \n 1.Half plate-50Rs\n 2.Full plate-100Rs");
        let plate=parseInt(prompt("Enter any choice in number=>"));
        let howmuch=parseInt(prompt("Enter no. of Plates=>"));
        switch (plate) {
            case 1:
                let Total=howmuch*50;
                console.log("You have to pay ",Total);
                let pay=parseInt(prompt("Enter your payment =>"));
                if (pay==Total){
                    console.log("Thank you your payment is",Total,"rupee.");
                }
                else if (pay>Total){
                    let ret=pay-Total;
                    console.log("Thank you ! Take your extra money",ret,"Rupee");
                }
                else if(pay<Total){
                    let need=Total-pay;
                    console.log("Sorry you have to pay more",need,"Rupee.");
                    let reneed=parseInt(prompt("Enter Left money=>"));
                    if(need==reneed){
                        console.log("Thankyou! your payment Done.");
                    }
                }
                break;
            case 2:
                let Total2=howmuch*100;
                console.log("You have to pay ",Total2);
                let pay2=parseInt(prompt("Enter your payment =>"));
                if (pay2==Total2){
                    console.log("Thank you your payment is ",Total2 ,"rupee.");
                }
                else if (pay2>Total2){
                    let ret=pay2-Total2;
                    console.log("Thank you ! Take your extra money",ret,"Rupee");
                }
                else if(pay2<Total2){
                    let need=Total2-pay2;
                    console.log("Sorry you have to pay more",need,"Rupee.");
                    let reneed=parseInt(prompt("Enter Left money=>"));
                    if(need==reneed){
                        console.log("Thankyou! your payment Done.");
                    }
                }
                break;
            default:
                console.log("Sorry your Input is invalid retry....");
                process.exit();
        }}
        else if (breakf==2){        
        console.log("Enter you choice \n 1.Half plate-50Rs\n 2.Full plate-100Rs");
        let plate=parseInt(prompt("Enter any choice in number=>"));
        let howmuch=parseInt(prompt("Enter no. of Plates=>"));
        switch (plate) {
            case 1:
                let Total=howmuch*60;
                console.log("You have to pay ",Total);
                let pay=parseInt(prompt("Enter your payment =>"));
                if (pay==Total){
                    console.log("Thank you your payment is",Total,"rupee.");
                }
                else if (pay>Total){
                    let ret=pay-Total;
                    console.log("Thank you ! Take your extra money",ret,"Rupee");
                }
                else if(pay<Total){
                    let need=Total-pay;
                    console.log("Sorry you have to pay more",need,"Rupee.");
                    let reneed=parseInt(prompt("Enter Left money=>"));
                    if(need==reneed){
                        console.log("Thankyou! your payment Done.");
                    }
                }
                break;
            case 2:
                let Total2=howmuch*120;
                console.log("You have to pay ",Total2);
                let pay2=parseInt(prompt("Enter your payment =>"));
                if (pay2==Total2){
                    console.log("Thank you your payment is ",Total2 ,"rupee.");
                }
                else if (pay2>Total2){
                    let ret=pay2-Total2;
                    console.log("Thank you ! Take your extra money",ret,"Rupee");
                }
                else if(pay2<Total2){
                    let need=Total2-pay2;
                    console.log("Sorry you have to pay more",need,"Rupee.");
                    let reneed=parseInt(prompt("Enter Left money=>"));
                    if(need==reneed){
                        console.log("Thankyou! your payment Done.");
                    }
                }
                break;
            default:
                console.log("Sorry your Input is invalid retry....");
                process.exit();
        }}
        else {
            console.log("Enter you choice \n 1.Half plate-50Rs\n 2.Full plate-100Rs");
            let plate=parseInt(prompt("Enter any choice in number=>"));
            let howmuch=parseInt(prompt("Enter no. of Plates=>"));
            switch (plate) {
                case 1:
                    let Total=howmuch*80;
                    console.log("You have to pay ",Total);
                    let pay=parseInt(prompt("Enter your payment =>"));
                    if (pay==Total){
                        console.log("Thank you your payment is",Total,"rupee.");
                    }
                    else if (pay>Total){
                        let ret=pay-Total;
                        console.log("Thank you ! Take your extra money",ret,"Rupee");
                    }
                    else if(pay<Total){
                        let need=Total-pay;
                        console.log("Sorry you have to pay more",need,"Rupee.");
                        let reneed=parseInt(prompt("Enter Left money=>"));
                        if(need==reneed){
                            console.log("Thankyou! your payment Done.");
                        }
                    }
                    break;
                case 3:
                    let Total2=howmuch*130;
                    console.log("You have to pay ",Total2);
                    let pay2=parseInt(prompt("Enter your payment =>"));
                    if (pay2==Total2){
                        console.log("Thank you your payment is ",Total2 ,"rupee.");
                    }
                    else if (pay2>Total2){
                        let ret=pay2-Total2;
                        console.log("Thank you ! Take your extra money",ret,"Rupee");
                    }
                    else if(pay2<Total2){
                        let need=Total2-pay2;
                        console.log("Sorry you have to pay more",need,"Rupee.");
                        let reneed=parseInt(prompt("Enter Left money=>"));
                        if(need==reneed){
                            console.log("Thankyou! your payment Done.");
                        }
                    }
                    break;
                    case 2:
                        let Total3=howmuch*130;
                        console.log("You have to pay ",Total3);
                        let pay3=parseInt(prompt("Enter your payment =>"));
                        if (pay3==Total3){
                            console.log("Thank you your payment is ",Total3,"rupee.");
                        }
                        else if (pay3>Total3){
                            let ret=pay3-Total3;
                            console.log("Thank you ! Take your extra money",ret,"Rupee");
                        }
                        else if(pay3<Total3){
                            let need=Total3-pay3;
                            console.log("Sorry you have to pay more",need,"Rupee.");
                            let reneed=parseInt(prompt("Enter Left money=>"));
                            if(need==reneed){
                                console.log("Thankyou! your payment Done.");
                            }
                        }
                        break;
            }}
    case 2:
    case 3:
    default:
        // console.log("Sorry! your Input is Invalid.\n");
        process.exit();
}
