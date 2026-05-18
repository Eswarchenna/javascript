function onclickNumber() {
    debugger;
    var Numbers = Number(document.getElementById("txtinputNumber").value);
    var result = document.getElementById("pResult");

    if (Numbers == 2) {
        result.innerText = "The number is Two";
    }
    else if (Numbers == 3) {
        result.innerText = " The number is Three";
    }
    else if (Numbers == 4) {
        result.innerText = " The number is Four";
    }
    else if (Numbers == 5) {
        result.innerText = " The number is Five";
    }
    else if (Numbers == 6) {
        result.innerText = " The number is Six";
    }
    else {
        result.innerText = "The is number is another number";
    }
}