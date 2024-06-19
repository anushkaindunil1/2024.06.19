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
        animateDisplay();
    } catch {
        displayElement.innerText = 'Error';
    }
}

function animateDisplay() {
    displayElement.classList.add('animate');
    setTimeout(() => displayElement.classList.remove('animate'), 300);
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 200);
    });
});
