 function signUp(){
    let name = document.getElementById("name").Value;
    let email = document.getElementById("email").Value;
    let password = document.getElementById("password").Value;

    if(name == "" || email == "" || password ==""){
        //name error
    if(name == ""){
        document.getElementById("nameerror").innerText = "Must Enter your Username";
    }else{
        document.getElementById("nameerror").innerText = "";
    }
     
       //email error
    if(email == ""){
        document.getElementById("emailerror").innerText = "Must Enter your Email";
    }else{
        document.getElementById("emailerror").innerText = "";
    }

        //password error
     if(email == ""){
        document.getElementById("passworderror").innerText = "Must Enter your password";
    }else{
        document.getElementById("passworderror").innerText = "";
    }
    }
    else{
        location.href ="navbar.html";

    }

}