const displayElement = document.getElementById('display');

function clearDisplay() {
    displayElement.innerText = '0';
}

function deleteLast() {
    if (displayElement.innerText.length === 1) {
        displayElement.innerText = '0';
    } else {
        displayElement.innerText = displayElement.innerText.slice(0, -1);
    }
}

function appendCharacter(character) {
    if (displayElement.innerText === '0') {
        displayElement.innerText = character;
    } else {
        displayElement.innerText += character;
    }
}

function calculateResult() {
    try {
        displayElement.innerText = eval(displayElement.innerText);
    } catch {
        displayElement.innerText = 'Error';
    }
}
