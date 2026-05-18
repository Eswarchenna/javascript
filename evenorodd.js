function onclickNumber() {
    debugger;
    var Numbers = Number(document.getElementById("txtinputNumber").value);
    var result = document.getElementById("pResult");
     
    if (Numbers % 2 == 0) {
        result.innerText = Numbers + " is Even";
    } 
    else {
        result.innerText = Numbers + " is Odd";
    }
}