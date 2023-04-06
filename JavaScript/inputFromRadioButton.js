function ExecuteOnClick(){
    var dog = document.getElementById("dog")
    var cat = document.getElementById("cat")
    var cow = document.getElementById("cow")

    if(dog.checked==true){
        alert("Selected item is : "+dog.value);
    }
    else if(cat.checked==true){
        alert("Selected item is : "+cat.value);
    }
    else if(cow.checked==true){
        alert("Selected item is : "+cow.value);
    }
    else{
        alert("No element selected.");
    }
}