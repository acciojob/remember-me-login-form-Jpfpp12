//your JS code here. If required.
let click = document.getElementById("submit")
const checkbox = document.getElementById("checkbox")
const username= document.getElementById("username")
const password =document.getElementById("password")
click.addEventListener("click",()=>{
	alert("Logged in as " ,username)
})
if(checkbox.checked){
	localStorage.setItem("username",username)
}