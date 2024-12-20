const display = document.getElementById('show')

function btnclick(value){
    display.value +=value;
}

function clearscreen(){
    display.value='';
}
function viewresult(){
    let result = eval(display.value)
    display.value=result;
}