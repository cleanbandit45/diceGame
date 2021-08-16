var n1 = Math.random();
n1 = Math.floor(n1*6)+1;

var n2 = Math.random();
n2 = Math.floor(n2*6)+1;

if(n1 > n2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(n1 === n2){
  document.querySelector("h1").innerHTML = "Match Ties";
}
if(n1 < n2){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}

var image1 = "images/dice" + n1 + ".png";
var image2 = "images/dice" + n2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);
