document.addEventListener("DOMContentLoaded", function () {
    var current_value = document.querySelector(".current-result");
    var previous_value = document.querySelector(".previous-result");
    var clearBtn = document.querySelector(".clear");
    var delete_value = document.querySelector(".delete");
    var operatorButtons = document.querySelectorAll(".operator");
    var numberButtons = document.querySelectorAll(".num");
    var equal = document.querySelector(".equal");
    var operator;
    var total_value;

    function appendNumber(number) {
        if (number === "." && current_value.innerText.includes(".")) return;
        current_value.innerText += number;
    }

    function chooseOption(operand) {
        if (current_value.innerText === " ") return;
        compute(operand);
        operator = operand;
        current_value.innerText += operator;
        previous_value.innerText = current_value.innerText;
        current_value.innerText = "";
    }

    function compute() {
        let output;
        let current_val = parseFloat(current_value.innerText);
        let previous_val = parseFloat(previous_value.innerText);

        if (isNaN(current_val) || isNaN(previous_val)) return;

        switch (operator) {
            case "+":
                output = previous_val + current_val;
                break;
            case "-":
                output = previous_val - current_val;
                break;
            case "*":
                output = previous_val * current_val;
                break;
            case "/":
                output = previous_val / current_val;
                break;
            default:
                return;
        }
        current_value.innerText = output.toString();
    }

    function clearDisplay() {
        current_value.innerText = "";
        previous_value.innerText = "";
    }

    numberButtons.forEach((number) => {
        number.addEventListener("click", () => {
            appendNumber(number.innerText);
        });
    });

    operatorButtons.forEach((operand) => {
        operand.addEventListener("click", () => {
            chooseOption(operand.innerText);
        });
    });

    clearBtn.addEventListener("click", () => {
        clearDisplay();
    });

    equal.addEventListener("click", () => {
        compute();
        previous_value.innerText = current_value.innerText;
        current_value.innerText = "";
    });

    delete_value.addEventListener("click", () => {
        current_value.innerText = current_value.innerText.slice(0, -1);
    });
});
