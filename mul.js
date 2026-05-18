function mulcalculations() {
    debugger
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    mul = firstNumber * secondNumber;
    document.getElementById("pResult").innerHTML = mul;
}