var randomnum1 = Math.floor(Math.random()*6 +1);
document.body.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomnum1+".png");
var randomnum2 = Math.floor(Math.random()*6 +1);
document.body.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomnum2+".png");
if(randomnum1>randomnum2){
  document.body.querySelector("h1").textContent = "🏁 Player 1 Wins!!";
}
else if (randomnum1<randomnum2){
  document.body.querySelector("h1").textContent = "Player 2 Wins!! 🏁";
}
else{
  document.body.querySelector("h1").textContent = "Its a draw!!";
}
