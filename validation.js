var alphaExp = /^[a-zA-Z/s]+$/;
var emailExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,3})?$/;      //regex
var alphaAddExp = /^[a-zA-Z0-9\s,.'-]{3,}$/;

function validateData(){
    let n = document.getElementById('name').value;
    if(n == ""){
        alert("please enter full name")
        document.getElementById('name').focus();
        return false;                                   //name validation
    }else if(!n.match(alphaExp)){                   
        alert("your name should be only in character")
        document.getElementById("name").focus();
        return false;
    }



    var e = document.getElementById('email').value
    if(e == ""){
        alert("please enter email")
        document.getElementById('email').focus();       //email validation
        return false;
    }else if(!e.match(emailExp)){
        alert("your email is inncorrect")
        document.getElementById("email").focus();
        return false;
    }


    var q = document.getElementById('query').value
    if(q == ""){
        alert("please enter your query")                   //query validation
        document.getElementById('query').focus();
        return false;
    }
}

