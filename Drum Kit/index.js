
// using handleClick() will straight away call the function and not wait for the click
var allButtons = document.querySelectorAll(".drum");

// function DrumKit(drum){
//   this.drum = drum;
// }

for (var i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click",handleClick);
}

function handleClick(){
  alert("Clicked!!!");
  var a = this.style;
  console.log(a);
}
