let fName = document.getElementById("name")
let uEmail = document.getElementById("email")
let message = document.getElementById("info")
let subMit = document.getElementById("sbt-btn")
function validate(){
    if (fName.value === "") {
        alert('Enter name')
    } else if (uEmail.value === "") {
        alert('Enter Email')
    } else if (message.value ==="") {
        alert("Enter message to send")
    } else {
        alert(`Hello ${fName.value}, your message was sent Succesfully. `)   
    }
}
subMit.addEventListener("click",function(){
    validate()
})
