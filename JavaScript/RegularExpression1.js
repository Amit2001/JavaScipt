function Execute(){
     var inp = document.getElementById("Uname");

     var regex =/@/i;

     if(regex.test(inp.value)){
        alert("correct UserName");
     }
     else{
        inp.style.border = "solid 1px red"
        alert("Incorrect UserName"); 
     }

}