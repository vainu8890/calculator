var num = document.getElementById("num");
var hidden = document.getElementById("hidden");



let operator ; 

function sign(x){
  
hidden.value = num.value ;
num.value = "";

operator = x; 
num.focus();
   
}

function equal (){
console.log(operator);
    if(operator=="+"){
       num.value =  parseInt(hidden.value) + parseInt(num.value); 
    }
    if(operator=="-"){
        num.value =  parseInt(hidden.value) - parseInt(num.value); 
     }
     if(operator=="*"){
        num.value =  parseInt(hidden.value) * parseInt(num.value); 
     }
     if(operator=="/"){
        num.value =  parseInt(hidden.value) / parseInt(num.value); 
     }
}



