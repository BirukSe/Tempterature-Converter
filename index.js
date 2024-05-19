window.alert("This is bura's Official Temperature Converter");
let temp;
document.getElementById("but").onclick=function(){
    event.preventDefault();
if(document.getElementById("inn").checked){
    
    temp=Number(document.getElementById("insa").value);
    temp=temp*9/5+32;
    temp=temp.toFixed(1)+"degree";
    document.getElementById("myh1").textContent=temp;

}
else{
    temp=Number(document.getElementById("insa").value);
    temp=(temp-32)*(5/9);
    temp=temp.toFixed(1)+"degree";
    document.getElementById("myh1").textContent=temp;

}
}