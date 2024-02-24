var prompt = require('prompt-sync')();
/*****************************************************************************
                                FOOD MENU
******************************************************************************/ 
let name=prompt("Enter your name =>");
console.log("Hello!",name,"=>**Welcome in Vishu Resturent.**\n ");

console.log("What would you like to eat..?\n 1.breakfast\n 2.Lunch \n 3.Dinner\n");
let opt=parseInt(prompt("Enter your choice no. only=>"));

if (opt<4){// opt is for food times--------------------------------------
    if (opt==1) {
        console.log("\nSelect any :\n 1.Maggie-50 Rs\n 2.Sandwich-65 Rs\n 3.Poha-45 Rs");
        let choice=parseInt(prompt("Enter you choice number =>"));
        if(choice==1){  //choice for breakfast choices---------------------------------
            let plateno=parseInt(prompt("Enter how much plate you want =>"));
            let totalrs=plateno*50;
            console.log("your total bill is:",totalrs);
            let payment=parseInt(prompt("Enter your payment=>"));
            while(true){
            if(payment==totalrs){
                console.log("Thankyou!",name,"You payment is done.");
                break;
            }
            else if(payment>totalrs){
                let extra=payment-totalrs;
                console.log(" take your extra :",extra,"Rupee");
                break;
            }
             
            else {
                console.log("Enter your valid ammount :");
                let need=totalrs-payment;
                let payment2=parseInt(prompt(`${need} Enter your payment=>`));
                payment=payment+payment2;
            }
        }   
        }
        else if(choice==2){
         //choice for breakfast choices---------------------------------
                let plateno=parseInt(prompt("Enter how much plate you want =>"));
                let totalrs=plateno*65;
                console.log("your total bill is:",totalrs);
                let payment=parseInt(prompt("Enter your payment=>"));
                while(true){
                if(payment==totalrs){
                    console.log("Thankyou!",name,"You payment is done.");
                    break;
                }
                else if(payment>totalrs){
                    let extra=payment-totalrs;
                    console.log(" take your extra :",extra,"Rupee");
                    break;
                }
                 
                else {
                    console.log("Enter your valid ammount :");
                    let need=totalrs-payment;
                    let payment2=parseInt(prompt(`${need} Enter your payment=>`));
                    payment=payment+payment2;
                }
                    
            } 
            }
        else if(choice==3){
              //choice for breakfast choices---------------------------------
                let plateno=parseInt(prompt("Enter how much plate you want =>"));
                let totalrs=plateno*45;
                console.log("your total bill is:",totalrs);
                let payment=parseInt(prompt("Enter your payment=>"));
                while(true){
                if(payment==totalrs){
                    console.log("Thankyou!",name,"You payment is done.");
                    break;
                }
                else if(payment>totalrs){
                    let extra=payment-totalrs;
                    console.log(" take your extra :",extra,"Rupee");
                    break;
                }
                 
                else {
                    console.log("Enter your valid ammount :");
                    let need=totalrs-payment;
                    let payment2=parseInt(prompt(`${need} Enter your payment=>`));
                    payment=payment+payment2;
                }
            }       
                
        
    }}
    else if(opt==2){
        console.log("\nSelect any :\n 1.Daal rice-150 Rs\n 2.Razma-Rice-160 Rs\n 3.Chhole-chawal-140 Rs");
        let choice=parseInt(prompt("Enter you choice number =>"));
        if(choice==1){  //choice for breakfast choices---------------------------------
            let plateno=parseInt(prompt("Enter how much plate you want =>"));
            let totalrs=plateno*150;
            console.log("your total bill is:",totalrs);
            let payment=parseInt(prompt("Enter your payment=>"));
            while(true){
            if(payment==totalrs){
                console.log("Thankyou!",name,"You payment is done.");
                break;
            }
            else if(payment>totalrs){
                let extra=payment-totalrs;
                console.log(" take your extra :",extra,"Rupee");
                break;
            }
             
            else {
                console.log("Enter your valid ammount :");
                let need=totalrs-payment;
                let payment2=parseInt(prompt(`${need} Enter your payment=>`));
                payment=payment+payment2;
            }
                
        }   
        }
        else if(choice==2){
         //choice for breakfast choices---------------------------------
                let plateno=parseInt(prompt("Enter how much plate you want =>"));
                let totalrs=plateno*160;
                console.log("your total bill is:",totalrs);
                let payment=parseInt(prompt("Enter your payment=>"));
                while(true){
                if(payment==totalrs){
                    console.log("Thankyou!",name,"You payment is done.");
                    break;
                }
                else if(payment>totalrs){
                    let extra=payment-totalrs;
                    console.log(" take your extra :",extra,"Rupee");
                    break;
                }
                 
                else {
                    console.log("Enter your valid ammount :");
                    let need=totalrs-payment;
                    let payment2=parseInt(prompt(`${need} Enter your payment=>`));
                    payment=payment+payment2;
                }
                    
            } 
            }
        else if(choice==3){
              //choice for breakfast choices---------------------------------
                let plateno=parseInt(prompt("Enter how much plate you want =>"));
                let totalrs=plateno*140;
                console.log("your total bill is:",totalrs);
                let payment=parseInt(prompt("Enter your payment=>"));
                while(true){
                if(payment==totalrs){
                    console.log("Thankyou!",name,"You payment is done.");
                    break;
                }
                else if(payment>totalrs){
                    let extra=payment-totalrs;
                    console.log(" take your extra :",extra,"Rupee");
                    break;
                }
                 
                else {
                    console.log("Enter your valid ammount :");
                    let need=totalrs-payment;
                    let payment2=parseInt(prompt(`${need} Enter your payment=>`));
                    payment=payment+payment2;
                }
            }       
                
        
    }} 
    else if(opt==3){
        console.log("\nSelect any :\n 1.Chapati-veg-70 Rs\n 2.Chhole-bhatoore-100 Rs\n 3.Puri-veg-90 Rs");
        let choice=parseInt(prompt("Enter you choice number =>"));
        if(choice==1){  //choice for breakfast choices---------------------------------
            let plateno=parseInt(prompt("Enter how much plate you want =>"));
            let totalrs=plateno*70;
            console.log("your total bill is:",totalrs);
            let payment=parseInt(prompt("Enter your payment=>"));
            while(true){
            if(payment==totalrs){
                console.log("Thankyou!",name,"You payment is done.");
                break;
            }
            else if(payment>totalrs){
                let extra=payment-totalrs;
                console.log(" take your extra :",extra,"Rupee");
                break;
            }
             
            else {
                console.log("Enter your valid ammount :");
                let need=totalrs-payment;
                let payment2=parseInt(prompt(`${need} Enter your payment=>`));
                payment=payment+payment2;
            }
                
        }   
        }
        else if(choice==2){
         //choice for breakfast choices---------------------------------
                let plateno=parseInt(prompt("Enter how much plate you want =>"));
                let totalrs=plateno*100;
                console.log("your total bill is:",totalrs);
                let payment=parseInt(prompt("Enter your payment=>"));
                while(true){
                if(payment==totalrs){
                    console.log("Thankyou!",name,"You payment is done.");
                    break;
                }
                else if(payment>totalrs){
                    let extra=payment-totalrs;
                    console.log(" take your extra :",extra,"Rupee");
                    break;
                }
                 
                else {
                    console.log("Enter your valid ammount :");
                    let need=totalrs-payment;
                    let payment2=parseInt(prompt(`${need} Enter your payment=>`));
                    payment=payment+payment2;
                }
                    
            } 
            }
        else if(choice==3){
              //choice for breakfast choices---------------------------------
                let plateno=parseInt(prompt("Enter how much plate you want =>"));
                let totalrs=plateno*90;
                console.log("your total bill is:",totalrs);
                let payment=parseInt(prompt("Enter your payment=>"));
                while(true){
                if(payment==totalrs){
                    console.log("Thankyou!",name,"You payment is done.");
                    break;
                }
                else if(payment>totalrs){
                    let extra=payment-totalrs;
                    console.log(" take your extra :",extra,"Rupee");
                    break;
                }
                 
                else {
                    console.log("Enter your valid ammount :");
                    let need=totalrs-payment;
                    let payment2=parseInt(prompt(`${need} Enter your payment=>`));
                    payment=payment+payment2;
                }
            }       
                
        
    }}
else{
    console.log("Sorry!Your choice is Invalid try again.");
}
}