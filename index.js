var yourLink = document.getElementById("your-link")
var newLink = document.getElementById("new-link")

var btn = document.querySelector("[type='button']")
btn.addEventListener("click", removeRef)

function removeRef() {
  input = yourLink.value
  parts = input.split("?")
  result = parts[0]
  newLink.value = result 
}
