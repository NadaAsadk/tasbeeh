const sobhan = document.querySelector(".sobhan button");
const hamd = document.querySelector(".hamd button");
const la = document.querySelector(".la button");
const akbar = document.querySelector(".akbar button");
const reset = document.querySelector(".reset");
let num = [0,0,0,0];
let buttons = [];
buttons.push(sobhan);
buttons.push(hamd);
buttons.push(la);
buttons.push(akbar);
function addcounter(){
    let current;
    for(let i=0;i<4;i++){
        current = buttons[i].nextSibling;
        current.textContent=num[i];
        console.log(current);
    }
    
}

addcounter();
sobhan.onclick = function(e){
    num[0]++;
    addcounter();
}
hamd.onclick = function(e){
    num[1]++;
    addcounter();
}
la.onclick = function(e){
    num[2]++;
    addcounter();
}
akbar.onclick = function(e){
    num[3]++;
    addcounter();
}
reset.onclick = function(){
    for(let i=0;i<4;i++)
    num[i]=0;
    addcounter();
}