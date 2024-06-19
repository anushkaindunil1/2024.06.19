function calc() {
    let number01 = parseFloat(document.getElementById("number01").value);
    let number02 = parseFloat(document.getElementById("number02").value);
    let op = document.getElementById("op").value;
    let display = document.getElementById("display");

    if (isNaN(number01) || isNaN(number02)) {
        display.innerHTML = "Please enter valid numbers";
        return;
    }

    let result;
    switch(op) {
        case "+":
            result = number01 + number02;
            break;
        case "-":
            result = number01 - number02;
            break;
        case "*":
            result = number01 * number02;
            break;
        case "/":
            result = number02 !== 0 ? number01 / number02 : "Cannot divide by zero";
            break;
        default:
            display.innerHTML = "Invalid operator";
            return;
    }

    display.innerHTML = `${number01} ${op} ${number02} = ${result}`;
}
