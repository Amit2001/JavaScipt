function validation(){
    var id = document.getElementById("UName")
    var pass = document.getElementById("pass")

    if(id.value.trim()=="" || pass.value.trim()==""){
        alert("UserName or Passward should not be empty");
        return false;
    }
    else{
        return true;
    }
}