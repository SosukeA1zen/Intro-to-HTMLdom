function validate(e){
e.preventDefault()
const email=document.getElementById("email").value
const password=document.getElementById("password").value
const age=document.getElementById("age").value
const msgbox=document.getElementById("message")
let message=""
if(email==""){
    message="please enter email"
    msgbox.style.color="red"
}
else if(password==""){
    message="please enter password"
    msgbox.style.color="red"
}
else if(age==""){
    message="please enter age"
    msgbox.style.color="red"
}else{
     message="Login successfully"
    msgbox.style.color="green"
}
msgbox.innerText=message
}