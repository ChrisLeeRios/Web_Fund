let disp = "";


function press(numVal) {
    var tempDisplay = document.querySelector("#display");
    disp = disp + numVal.toString();
    tempDisplay.innerText = disp;
}


let values = [];
let curFun = "";
let sum = 0;

function setOP(op){
    if(values.length === 1){
        var valTwo = parseFloat(disp);
        values.push(valTwo);
        calc(curFun);
        values = [];
        values.push(sum);
        disp = "";
        curFun = op;
    }
    if(values.length === 0){
        curFun = op;
        var valOne = parseFloat(disp);
        values.push(valOne);
        disp = "";
    }
}

function calc(cal){
    if(cal === "+"){
        sum = values[0] + values[1];
    }
    if(cal === "-"){
        sum = values[0] - values[1];
    }
    if(cal === "*"){
        sum = values[0] * values[1];
    }
    if(cal === "/"){
        sum = values[0] / values[1];
    }
    var total = document.querySelector("#display");
    total.innerText = sum;
}

function calculate(){
    var valTwo = parseFloat(disp);
    values.push(valTwo);
    calc(curFun);
    
}


function clr(elem){
    values = [];
    sum = 0;
    curFun = "";
    disp = "";
    var clearDisplay = document.querySelector("#display");
    clearDisplay.innerText = "0";
}
