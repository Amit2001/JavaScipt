
function Validation(){
    var id = document.getElementById("UName");
    var pass = document.getElementById("Pass");

    if(id.value.trim()==""){
        id.style.border="solid 1px red"
        //alert("Feild Id is Empty");
        document.getElementById("toHide1").style.visibility = "visible";
        return false;
    }
    
    else if(pass.value.trim()==""){
        //alert("Feild Passward is Empty");
        pass.style.border="solid 1px red";
        document.getElementById("toHide2").style.visibility = "visible";
        return false;
    }
    else if(id.value.trim().length<8){
        //alert("Length User Name is less then 8");
        id.style.border="solid 1px red";
        document.getElementById("toHide1").style.visibility = "visible";
        return false;
    }
    else if(pass.value.trim().length<8){
       // alert("Passward User Name is less then 8");
        pass.style.border="solid 1px red";
        document.getElementById("toHide2").style.visibility = "visible";
        return false;
    }
    /*else if(pass.value.trim().includes("!" || "\"" || "#" || "$" || "%" || "&" || "'" || "(" || ")" || "*" || "+" || "," || "-" || "." || "/" || ":" || ";" || "<" || "=" || ">" || "?" || "@" || "[" || "\" || "^" || '_' || ']' || "`" || "{" || "|" || "}" || "~" )){}
        alert("Passward must contains a special character");
        return false;
    }*/
    else{
        return true;
    }
    
}