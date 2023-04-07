/*
  --> \D is used to represent all alphabets. i.e a-z and A-Z
  --> \d is used to represent all numbers i.e 0-9
  --> \s whitespace character example spaces and tabs
  --> \t maches a tab only
*/ 

function validation(){
    var number = document.getElementById("mobile_number");
    var regex = /^[6-9]\d{9}$/              // ^ represents start of the text and $ represents the end of the text . However if 6 is written inside the square brakcets[] then it will not include the text wtitten in square brackets to the text
    if(regex.test(number.value)){
        alert("A valid Number entered");
        number.style.border = "solid 2px green";
        document.getElementById("forvalidOrInvalid").style.visibility = "visible";
        document.getElementById("forvalidOrInvalid").style.color = "green";
        document.getElementById("forvalidOrInvalid").innerHTML = "visible";
        
        
    }
    else{
        alert("An Invalid Number Entered");
        number.style.border = "solid 1px red";
        document.getElementById("forvalidOrInvalid").style.visibility = "visible";
        document.getElementById("forvalidOrInvalid").style.color = "red";
        document.getElementById("forvalidOrInvalid").innerHTML = "Invisible"
    
    }   
}