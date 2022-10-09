var userName = document.getElementById("signUpName")
var signupEmail = document.getElementById("signUpEmail")
var signupPass = document.getElementById("signUpPass")
var cPass = document.getElementById("signUpCPass")
var nameReg = /^([a-zA-Z]{2,9}.[a-zA-Z]{2,9}|[a-zA-Z]{2,12})$/
var emailReg = /^[a-zA-Z0-9]{2,12}\@[a-zA-Z]{2,7}\.[a-zA-Z]{2,7}$/
var passReg = /^[a-zA-Z1-9@!#$%&]{6,16}$/
var userSignInfoBag =[]
if(JSON.parse(localStorage.getItem("log info")) != null){
  userSignInfoBag= JSON.parse(localStorage.getItem("log info"))
}
function saveInfo(){
  var signInfo ={
    name: userName.value,
    email: signupEmail.value,
    Pass: signupPass.value,
  }
  userSignInfoBag.push(signInfo)
  localStorage.setItem("log info", JSON.stringify(userSignInfoBag))
  window.location="index.html"
  
}

function checkInput(){
 var nameCheck= userName.value.trim();
 var emailCheck = signupEmail.value.trim();
 var passCheck = signupPass.value.trim();
 var cPassCheck = cPass.value.trim();
 if(nameReg.test(nameCheck) ==  false){
      document.getElementById("signUpName").style.borderColor = "red"
      document.querySelector(".wrongNamei").classList.remove("d-none")
      document.querySelector(".wrongNamep").classList.remove("d-none")
    } else{
      document.getElementById("signUpName").style.borderColor = "rgb(25,135,84)"
      document.querySelector(".wrongNamei").classList.add("d-none")
      document.querySelector(".wrongNamep").classList.add("d-none")
      document.querySelector(".nameSuc").classList.remove("d-none")
    }
 if(emailReg.test(emailCheck) ==  false){
     document.getElementById("signUpEmail").style.borderColor = "red"
      document.querySelector(".wrongEmaili").classList.remove("d-none")
      document.querySelector(".wrongEmailp").classList.remove("d-none")
    } else{
      document.getElementById("signUpEmail").style.borderColor = "rgb(25,135,84)"
      document.querySelector(".wrongEmaili").classList.add("d-none")
      document.querySelector(".wrongEmailp").classList.add("d-none")
      document.querySelector(".emailSuc").classList.remove("d-none")
    }
  if(passReg.test(passCheck)== false){
     document.getElementById("signUpPass").style.borderColor = "red"
      document.querySelector(".wrongPassi").classList.remove("d-none")
      document.querySelector(".wrongPassp").classList.remove("d-none")
    } else{
      document.getElementById("signUpPass").style.borderColor = "rgb(25,135,84)"
      document.querySelector(".wrongPassi").classList.add("d-none")
      document.querySelector(".wrongPassp").classList.add("d-none")
      document.querySelector(".passSuc").classList.remove("d-none")
    }
 if(passCheck != cPassCheck ){
      document.getElementById("signUpCPass").style.borderColor = "red"
      document.querySelector(".wrongCPassi").classList.remove("d-none")
      document.querySelector(".wrongCPassp").classList.remove("d-none")
    } else{
      document.getElementById("signUpCPass").style.borderColor = "#ced4da"
      document.querySelector(".wrongCPassi").classList.add("d-none")
      document.querySelector(".wrongCPassp").classList.add("d-none")
    }
  for(i=0 ; i<userSignInfoBag.length ; i++){
    if(emailCheck == userSignInfoBag[i].email){
      document.querySelector(".exEmail").classList.remove("d-none")
      document.querySelector(".emailSuc").classList.add("d-none")
      document.getElementById("signUpEmail").style.borderColor = "red"
      var x = false
    } else{
      document.querySelector(".exEmail").classList.add("d-none")
      x = true
    }
  }
  if(userSignInfoBag.length == 0){
    x=  true
  }
  if(nameReg.test(nameCheck) && emailReg.test(emailCheck) && passReg.test(passCheck) && passCheck == cPassCheck && x){
    saveInfo()
  }
 }

document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault()
  checkInput()
})

// function setInfo(){
//   if(window.href == "home.index"){
//   document.getElementById("information").innerHTML = `${signInfo.name}`
//   }
// }