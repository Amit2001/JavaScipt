function ExecuteOnClick(){
    var select = document.getElementById("SelectStatement");
    alert("selected value is : "+select.options[select.selectedIndex].value);
}