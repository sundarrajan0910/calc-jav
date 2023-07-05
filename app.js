function convert() {


    var val1 = parseFloat(document.getElementById("num1").value);
    var val2 = parseFloat(document.getElementById("num2").value);
    var val3 = document.getElementById('operator').value;
    // var result;
    console.log("num1=",val1);
    console.log("num2=",val2);
    console.log("operator",val3);

    if (val3 == '+') {
        result = val1 + val2;
        console.log("result=val1+val2",result);
    } else if (val3 == '-') {
        result = val1 - val2;
        console.log("result=val1-val2",result);
    } else if (val3 == '*') {
        result = val1 * val2;
        console.log("result=val1*val2",result);
    } else if (val3 == '/')  {
        result = val1 / val2;
        console.log("result=val1/val2",result);
    } else{
        console.log("not found");
    }
    document.getElementById("result").value = result;
 
   
}



