var id =0;
var seconds =0;
function start(){
     //id=window.setTimeout(text,5000);
     id = window.setInterval(text,1000);
      
}
function stop(){
      window.clearInterval(id);
}

function text(){
    document.getElementById("general_text").innerHTML = seconds;
    seconds++;
}