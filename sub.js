function sumcalculations() {
    debugger
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    sum = firstNumber - secondNumber;
    document.getElementById("pResult").innerHTML = sum;
}