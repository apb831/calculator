$(document).ready(function(){
    $("#plus,#minus,#times,#divide,#one,#two,#three,#four,#five,#six,#seven,#eight,#nine,#zero,#clear,#equals,#point,#percent").click(function(){
    var btn = $(this).attr("id");
        switch(btn){
            case "plus":
            document.calculator.ans.value += '+';break;

            case "minus":
                document.calculator.ans.value += '-';break;

            case "times":
                document.calculator.ans.value += '*';break;

            case "divide":
                document.calculator.ans.value += '/';break;

            case "zero":
                document.calculator.ans.value += '0';break;

            case "one":
                document.calculator.ans.value += '1';break;

            case "two":
                document.calculator.ans.value += '2';break;

            case "three":
                document.calculator.ans.value += '3';break;

            case "four":
                document.calculator.ans.value += '4';break;

            case "five":
                document.calculator.ans.value += '5';break;

            case "six":
                document.calculator.ans.value += '6';break;

            case "seven":
                document.calculator.ans.value += '7';break;

            case "eight":
                document.calculator.ans.value += '8';break;

            case "nine":
            document.calculator.ans.value += '9';break;

            case "point":
                    document.calculator.ans.value += '.';break;

            case "percent":
            document.calculator.ans.value += '%';break;

            case "equals":
                document.calculator.ans.value=eval(document.calculator.ans.value);break;
        }
    });
});





