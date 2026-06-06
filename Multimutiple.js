var result=1
function onclickMultiple(){
    debugger
    var number =Number(document.getElementById("txtnumber").value);
    result = result  * number
     document.getElementById("pResult").innerHTML = "result" + result;


  
}
function onclickDivided(){
    debugger
    var number =Number(document.getElementById("txtnumber").value);
    result = result  / number
     document.getElementById("pResult").innerHTML = "result" + result;


  
}
    
    