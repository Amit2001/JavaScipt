function ButtonClick(){
    
     
    var UserName = document.getElementById("ID").value;
    var Passward = document.getElementById("PASS").value;

    if(UserName==Passward){
        alert("Moving to next page, as Authentication is Successfull");
    }
    else{
        alert("Ohh can't move to next page, as Authentication is UnSuccessfull");
    }
}
