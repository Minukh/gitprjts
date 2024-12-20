const display = document.getElementById('show')
var isErr = false;
function btnclick(value) {
    if (isErr) {
        clearscreen();
        isErr = false;
    }
    if (display.value == '0' && !checkOperators(value))
        display.value = value;
    else
        display.value += value;
}

function clearscreen() {
    display.value = '';
}
function viewresult() {
    try {
        let result = eval(display.value)
        display.value = result;
    } catch {
        display.value = "Error";
        isErr = true;
    }
}

function checkOperators(value) {
    return /[-+*/]/.test(value);
}