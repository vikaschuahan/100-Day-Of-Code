// Save what the user types (numbers and operators)
let currentExpression = '';

// Get the display element (the calculator screen)
const display = document.getElementById('display');

// Reset the calculator to 0
function clearDisplay() {
    currentExpression = '';
    display.textContent = '0';
}

// Delete the last character
function deleteLast() {
    // If we showed "Error", just clear everything
    if (currentExpression === 'Error') {
        clearDisplay();
        return;
    }

    // Remove the last character
    currentExpression = currentExpression.slice(0, -1);

    // If nothing left, show 0
    if (currentExpression === '') {
        display.textContent = '0';
    } else {
        display.textContent = currentExpression;
    }
}

// Calculate the result of the expression
function calculate() {
    try {
        // Convert percent to math: 50%2 => 50/100*2
        let finalExpression = currentExpression.replace(/%/g, '/100*');

        // If empty, show 0
        if (finalExpression === '') {
            display.textContent = '0';
            return;
        }

        // Use eval to compute the result
        let result = eval(finalExpression);

        // If result is not a real number (Infinity/NaN), show Error
        if (!isFinite(result)) {
            currentExpression = 'Error';
            display.textContent = 'Error';
            return;
        }

        // Limit floating point noise, then show it
        currentExpression = parseFloat(result.toFixed(10)).toString();
        display.textContent = currentExpression;

    } catch (error) {
        // Any syntax error will show "Error"
        currentExpression = 'Error';
        display.textContent = 'Error';
    }
}

// Handle button clicks and update the expression/display
function appendValue(value) {
    // If previous state was Error, start fresh
    if (currentExpression === 'Error') {
        currentExpression = '';
    }

    // Action buttons
    if (value === 'AC') {
        clearDisplay();
    } else if (value === 'DEL') {
        deleteLast();
    } else if (value === '=') {
        calculate();
    } else {
        // For numbers, dot, and operators: add to expression
        currentExpression += value;
        display.textContent = currentExpression;
    }
}

// Get all calculator buttons
const buttons = document.querySelectorAll('#calculator button');

// Add a click event to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value'); // Read the value to insert
        appendValue(value); // Update expression/display
    });
});

// Start with 0 on the screen
clearDisplay();