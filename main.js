var torchon = false
var email = document.getElementById("email");
var emailerror = document.getElementById("emailerror")
var password = document.getElementById("password");
var passworderror = document.getElementById("passworderror")
var icon = document.getElementById("iconpos")

function torch() {
    if (torchon) {
        document.querySelector('body').style.background = "url(bg2.jpg) right center / cover"
        document.getElementById("password").setAttribute("type","text")
        document.getElementById("icon").src = "button-black.png"
        document.getElementById("title").style.color = "black"
        document.getElementById("emaillabel").style.color = "black"
        document.getElementById("email").style.color = "black"
        document.getElementById("passwordlabel").style.color = "black"
        document.getElementById("password").style.color = "black"
        document.getElementById("signup").style.color = "white"
        document.getElementById("signup").style.backgroundColor = "black"
        torchon = false
    }
    else{
        document.querySelector('body').style.background = "url(bg1.jpg) right center / cover"
        document.getElementById("password").setAttribute("type","password")
        document.getElementById("icon").src = "button-white.png"
        document.getElementById("title").style.color = "white"
        document.getElementById("emaillabel").style.color = "white"
        document.getElementById("email").style.color = "white"
        document.getElementById("passwordlabel").style.color = "white"
        document.getElementById("password").style.color = "white"
        document.getElementById("signup").style.color = "black"
        document.getElementById("signup").style.backgroundColor = "white"
        
        torchon = true
    }
}

function emailcheck(){
    if(!email.value.match(/^([a-zA-Z0-9_\.]{2,50})@([a-zA-Z0-9]{2,10})\.([a-z]{2,10})(\.[a-z]{2,10})?$/)){
        emailerror.innerHTML = "Please enter a valid email.";
        email.style.borderBottomColor = "red";
        return false
    }
    else{
        emailerror.innerHTML = "";
        email.style.borderBottomColor = "green";
    }
}

function passwordcheck(){
    if(!password.value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/)){
        icon.style.top = "48.5%";
        icon.style.right = "39.5%";
        passworderror.innerHTML = "Password must be 8-16 characters and contain both numbers and letters.";
        password.style.borderBottomColor = "red";
        return false
    }
    else{
        icon.style.top = "51.5%";
        icon.style.right = "39.5%";
        passworderror.innerHTML = "";
        password.style.borderBottomColor = "green";
    }
}