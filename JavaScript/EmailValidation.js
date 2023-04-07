function validation(){
    var email = document.getElementById("email");
    var label = document.getElementsByTagName("label")
    
    //first part of email address could be anything a set of numbers charactes . or -,
    var regex = /^([a-zA-Z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,20}).([a-z]{2,10})?$/
    //in first part of email address we use \* as if we use * only then it means that any character can be written in place of star , also we have used a plus(+) sign in order to let user fill the email of any size.  
    //in my third part i have used 2-20 as we are giving a range that the length of fourth part will not exceed 20 and is not less then 2
    // the ? in the end is used to make the last element of the text optional
    if(regex.test(email.value)){
        label[0].style.color = "green";
        label[0].style.visibility = "visible"
        label[0].innerHTML= "<---Valid";
        email.style.border ="solid 2px green";

    }
    else{
        label[0].style.color = "red";
        label[0].style.visibility = "visible"
        label[0].innerHTML= "<---InValid";
        email.style.border ="solid 2px red";
    }
}