 function onclickAverage(){
    debugger
    var telugu =Number(document.getElementById("txtTelugu").value);
    var hindi =Number(document.getElementById("txtHindi").value);
    var english =Number(document.getElementById("txtEnglish").value);
    var maths =Number(document.getElementById("txtMaths").value);
    var science =Number(document.getElementById("txtScience").value);
    var socialstudies =Number(document.getElementById("txtSocialStudies").value);
    average= (telugu +hindi+ english+ maths+ science+ socialstudies)/6
    document.getElementById("pResult").innerHTML = average ;
 }
 function onclickpercentage(){
    debugger
     var telugu =Number(document.getElementById("txtTelugu").value);
    var hindi =Number(document.getElementById("txtHindi").value);
    var english =Number(document.getElementById("txtEnglish").value);
    var maths =Number(document.getElementById("txtMaths").value);
    var science =Number(document.getElementById("txtScience").value);
    var socialstudies =Number(document.getElementById("txtSocialStudies").value);
    percentage= (telugu +hindi+ english+ maths+ science+ socialstudies)/600*100
    document.getElementById("pResult").innerHTML = percentage ;


 }
 