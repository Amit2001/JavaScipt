function validation(){
    var inpt = document.getElementById("input");
    var label = document.getElementById("label");
    var regex = /^[5-9]\D{8}0$/;

    if(regex.test(inpt.value)){
        label.style.color = "green";
        label.innerHTML = "<---Valid";
        label.style.visibility = "visible";
        inpt.style.border = "solid 2px green";
    }
    else{
        label.style.color = "red";
        label.innerHTML ="<---Invalid";
        label.style.visibility = "visible";
        inpt.style.border = "solid 2px red";
    }
}