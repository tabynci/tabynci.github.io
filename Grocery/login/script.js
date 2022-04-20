
function myFunction() {
    var username = document.getElementById("fname").value;
    document.getElementById("demo").innerHTML=username;
    var password = document.getElementById("psw").value;
    document.getElementById("demo").innerHTML=password;
    alert("welcome " +username);
    hide();
    
    }
    function hide(){
    const form=document.getElementById('form');
    
    
    
    
    
    if(form.style.visibility==='hidden'){
    
    
    
    form.style.visibility ='visible';
    
    
    
    }else {
    
    
    
    form.style.visibility ='hidden';
    
    
    
    }
    
    
    
    
    }