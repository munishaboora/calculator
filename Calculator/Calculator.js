let overallTotal = 0; 
let userInput = "0"; // What is being typed in by the user
let priorOperator = null; 
const screen = document.querySelector(".screen");

document.querySelector('.calculator-buttons').addEventListener("click", function(event) {
buttonClicked(event.target.innerText);
});

//What happens if one clicks on a button
function buttonClicked(value) {
    if (isNaN(parseInt(value))) { 
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    reRender();
}

//If a symbol is clicked on
function handleSymbol(value) {
    switch (value) {
    case 'C':
        userInput = "0";
        overallTotal = 0;
        priorOperator = null;
        break;

    case "=":
        if (priorOperator === null) {
            return;
         }
    operatorEntered(parseInt(userInput));
    priorOperator === null;
    userInput = overallTotal;
    overallTotal = 0;
    break;

    case "⌫":
        if(userInput.length === 1) {
            userInput = "0";
        } else {
            userInput = userInput.substring(0, userInput.length - 1);
        }
    break;  

    default:
        handleOperator(value);
        break;
    }     
}

//If a number is clicked on
function handleNumber(value) {
    if(userInput === "0") {
        userInput = value;
    } else {
        userInput += value
    }
}

//If user inputs +,-,/, or x
function handleOperator(value) {
   const userInputsInteger = parseInt(userInput);
   if(overallTotal === 0) {
    overallTotal = userInputsInteger;
   } else {
       operatorEntered(userInputsInteger);
   }
   priorOperator = value;
   userInput = "0";
}

//What happnes when one presses either the +,-,/, or x button and the total isn't 0
function operatorEntered(userInputsInteger){
    if(priorOperator === "+") {
        overallTotal += userInputsInteger
    } else if(priorOperator === "−") {
        overallTotal -= userInputsInteger
    } else if(priorOperator === "÷") {
        overallTotal /= userInputsInteger
    } else {
        overallTotal *= userInputsInteger
    }
}

function reRender() {
    screen.innerText = userInput;
}