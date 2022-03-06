const calc = {
    display: null,
    firstOperand: null,
    secondOperand: null,
    operator: null,
    answer: null,

};

function runCalculator() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {

            if (btn.innerText == "C") {
                clear();
            }
            else if (btn.innerText == "=") {
                operate();
            }
            else if (!isNaN(btn.innerText) && calc.operator == null) {
                if (calc.display == null) {
                    calc.display = btn.innerText;
                    calc.firstOperand = btn.innerText;
                }
                else {
                    calc.display += btn.innerText;
                    calc.firstOperand += btn.innerText;
                }

            }
            else if (!isNaN(btn.innerText)) {

                if (calc.secondOperand == null) {
                    calc.display = btn.innerText;
                    calc.secondOperand = btn.innerText;
                }
                else {
                    calc.display += btn.innerText;
                    calc.secondOperand += btn.innerText;
                }

            }
            else {

                calc.operator = btn.innerText;
                calc.display = calc.operator;
            }
            updateDisplay();


        })
    })
}
function updateDisplay() {

    displayValue.innerText = calc.display;
}
function clear() {
    calc.firstOperand = null;
    calc.secondOperand = null;
    calc.operator = null;
    calc.display = null;
    displayValue.innerText = "";
}

function updateOperator() {
    displayValue.innerText = calc.operator;
}
function operate() {
    if (calc.operator == "+") {
        calc.answer = parseInt(calc.firstOperand) + parseInt(calc.secondOperand);
        calc.display = calc.answer;
        displayValue.innerText = calc.answer;
    }
    else if (calc.operator == "-") {
        calc.answer = parseInt(calc.firstOperand) - parseInt(calc.secondOperand);
        calc.display = calc.answer;
        displayValue.innerText = calc.answer;
    }
    else if (calc.operator == "*") {
        calc.answer = parseInt(calc.firstOperand) * parseInt(calc.secondOperand);
        calc.display = calc.answer;
        displayValue.innerText = calc.answer;
    }
    else if (calc.operator == "÷") {
        calc.answer = (parseInt(calc.firstOperand) / parseInt(calc.secondOperand));
        calc.display = calc.answer;
        displayValue.innerText = calc.answer;
    }
}


let displayValue = document.querySelector(".display");

runCalculator();