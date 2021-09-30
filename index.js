var num = document.getElementById("num");
var hidden = document.getElementById("hidden");



let operator ; 

function sign(x){
   equal();
hidden.value = num.value ;
num.value = "";

operator = x; 
num.focus();
   
}

function equal (){
console.log(operator);
    if(operator=="+"){
       num.value =  parseFloat(hidden.value) + parseFloat(num.value); 
    }
    if(operator=="-"){
        num.value =  parseFloat(hidden.value) - parseFloat(num.value); 
     }
     if(operator=="*"){
        num.value =  parseFloat(hidden.value) * parseFloat(num.value); 
     }
     if(operator=="/"){
        num.value =  parseFloat(hidden.value) / parseFloat(num.value); 
     }
}



