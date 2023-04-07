function ExecuteOnClick(){
    var change_color = document.getElementsByClassName("ChangeColor");
    var change_size = document.getElementsByClassName("ChangeSize");
    var change_family = document.getElementsByClassName("ChangeFamily");

    var i=0;
    while(i<change_color.length){
        change_color[i].style.color ="red";
        i++;
    }
    i=0
    while(i<change_size.length){
        change_size[i].style.fontSize = 30;
        i++;
    }
    i=0
    while(i<change_family.length){
        change_family[i].style.fontFamily="monospace";
        i++;
    }
}