var loginEmail = document.querySelector(".loginEmail")
var loginPass = document.querySelector(".loginPass")
var emailLog= ""
var passLog= ""

var userSignInfoBag =[]
if(JSON.parse(localStorage.getItem("log info")) != null){
  userSignInfoBag = JSON.parse(localStorage.getItem("log info"))
}

function login(){
  emailLog = loginEmail.value;
  passLog = loginPass.value;
  checkInputLog()
      if(userSignInfoBag.length == 0){
      alert("please Sign Up Frist")
  }
  }  
function checkInputLog(){
    for(i=0 ; i<userSignInfoBag.length ; i++){
    if(emailLog.toLowerCase() == userSignInfoBag[i].email.toLowerCase() && passLog == userSignInfoBag[i].Pass){
            window.location.href = 'home.html';
    }
    if(emailLog.toLowerCase() != userSignInfoBag[i].email.toLowerCase()){
      document.querySelector(".loginEmail").style.borderColor = "red"
      document.querySelector(".wrongEmaili").classList.remove("d-none")
      document.querySelector(".wrongEmailp").classList.remove("d-none")
    } else {
      document.querySelector(".loginEmail").style.borderColor = "white"
      document.querySelector(".wrongEmaili").classList.add("d-none")
      document.querySelector(".wrongEmailp").classList.add("d-none")
    }
    if(passLog != userSignInfoBag[i].pass){
      document.querySelector(".loginPass").style.borderColor = "red"
      document.querySelector(".wrongLogPassi").classList.remove("d-none")
      document.querySelector(".wrongLogPassp").classList.remove("d-none")
    } else {
      document.querySelector(".loginPass").style.borderColor = "#ced4da"
      document.querySelector(".wrongLogPassi").classList.add("d-none")
      document.querySelector(".wrongLogPassp").classList.add("d-none")
    } 

  }
}

document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault()
  checkInputLog()
})


