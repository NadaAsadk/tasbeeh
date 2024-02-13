
function addcounter(name){

    var element = document.getElementById(name).textContent;
    element++;
    document.getElementById(name).textContent=element;

}

function reset(name){
    var element = document.getElementById(name).textContent;
    element=0;
    document.getElementById(name).textContent=element;

}
