function ExecuteOnclick(){
    var para_tag_selected = document.getElementsByTagName("p");
    var i=0;
    while(i<para_tag_selected.length){
        para_tag_selected[i].style.color = "red";
        para_tag_selected[i].style.fontSize = 30;
        i++;
    }
}