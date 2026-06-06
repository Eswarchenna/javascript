var balance = 0;
function onclickCreditAmount() {
    var amount = Number(document.getElementById("txtAmount").value);
    balance = balance + amount;
    document.getElementById("pResult").innerHTML = "Bank Balance :" + balance;
}
function onclickDebitAmount() {
    var amount = Number(document.getElementById("txtAmount").value);
    if (amount > balance) {
        alert("insufficient balance")
    }
    else {
        balance = balance - amount;
        document.getElementById("pResult").innerHTML = "Bank Balance :" + balance;
    }

}

