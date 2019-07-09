
//===================== ADDITION ===================== 

var plus = document.getElementById("plus");
plus.addEventListener("click", function(){
    var input1 = Number(document.getElementById("input1").value);
    var input2 = Number(document.getElementById("input2").value);
    check(input1,input2)? add(input1,input2): valError();
});
function add(input1, input2){var sum = input1 + input2;answer(sum);}

//===================== SUBTRACTION ===================== 

var minus = document.getElementById("minus");
minus.addEventListener("click", function(){
    var input1 = Number(document.getElementById("input1").value);
    var input2 = Number(document.getElementById("input2").value);
    check(input1,input2)? subtract(input1,input2): valError();
});
function subtract(input1, input2){var diff = input1 - input2;answer(diff);}

//===================== MULTIPLICATION ===================== 

var times = document.getElementById("times");
times.addEventListener("click", function(){
    var input1 = Number(document.getElementById("input1").value);
    var input2 = Number(document.getElementById("input2").value);
    check(input1,input2)? multiply(input1,input2): valError();
});
function multiply(input1, input2){var product = input1 * input2;answer(product);}

//===================== DIVISION ===================== 

var divide = document.getElementById("divide");
divide.addEventListener("click", function(){
    var input1 = Number(document.getElementById("input1").value);
    var input2 = Number(document.getElementById("input2").value);
    check(input1,input2)? division(input1,input2): valError();
});
function division(input1, input2){var quotient = input1 / input2;answer(quotient);}

//===================== OTHER ===================== 

function check(input1,input2){if( input1 =="" || input2 =="" ){return false;}else{return true;}}

function valError(){
    document.getElementById("answer").innerHTML = "Error incomplete values";
    document.getElementById("answer").style.color = "red";
}

function answer(data){
    document.getElementById("answer").innerHTML = data;
    document.getElementById("answer").style.color = "black";
}
