function one(val){
    document.getElementById("gainput").value +=val ;
}
function two(val){
    document.getElementById("gainput").value +=val;
}
function three(val){
    document.getElementById("gainput").value +=val;
}
function four(val){
    document.getElementById("gainput").value +=val;
}
function five(val){
    document.getElementById("gainput").value +=val;
}
function six(val){
    document.getElementById("gainput").value +=val;
}
function seven(val){
    document.getElementById("gainput").value +=val;
}
function eight(val){
    document.getElementById("gainput").value +=val;
}
function nine(val){
    document.getElementById("gainput").value +=val;
}
function zero(val){
    document.getElementById("gainput").value +=val;
}
function add(val){
    document.getElementById("gainput").value +=val;
}
function sub(val){
    document.getElementById("gainput").value +=val;
}
function mul(val){
    document.getElementById("gainput").value +=val;
}
function div(val){
    document.getElementById("gainput").value +=val;
}
function point(val){
    document.getElementById("gainput").value +=val;
}
function on(){
    document.getElementById("offbutton").style.display = "flex";
    document.getElementById("onbutton").style.display = "none";
    document.getElementById("gainput").style.color = "black";
    document.getElementById("gainput").value = "";
    document.getElementById("gainput").placeholder = " I am Ready...";
}
function off(){
    document.getElementById("offbutton").style.display = "none";
    document.getElementById("onbutton").style.display = "flex";
    document.getElementById("gainput").style.color = "white";
    document.getElementById("gainput").placeholder = "";
}
function clea(){
    document.getElementById("gainput").value="";
}
function cal(){
    let x = document.getElementById("gainput").value;
    let y = eval(x);
    document.getElementById("gainput").value = y;
}