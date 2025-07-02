const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";  
}

function toggleSign() {
    if (display.value) {
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else {
            display.value = '-' + display.value;
        }
    }
}


function calculate(){ 
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value =("Error")
    }
}