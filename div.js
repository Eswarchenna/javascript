function divcalculations() {
    debugger
    var firstNumber = Number(document.getElementById("txtFirstNumber").value);
    var secondNumber = Number(document.getElementById("txtSecondNumber").value);
    div = firstNumber / secondNumber;
    document.getElementById("pResult").innerHTML = div;
}