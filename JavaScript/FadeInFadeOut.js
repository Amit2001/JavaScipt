var opacity = 1
var id1=0;
var id2=0;
function fadeIn(){
      window.setInterval(execute,500);
}

function fadeOut(){
     id1=window.setInterval(execute1,500);

}
function execute(){
    var image = document.getElementById("image");
    image.style.opacity = opacity;
    opacity=opacity-0.2;
    if(opacity<=0){
        clearInterval(id1);
        return;
    }
}
function execute1(){
    var image = document.getElementById("image");
    image.style.opacity = opacity;
    opacity=opacity+0.2;
    if(opacity>=1){
        clearInterval(id2);
        return;
    }
}