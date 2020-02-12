

var randomNumber1 = Math.random(); //Generate 0 - 0.99 (but not 1)
randomNumber1 = randomNumber1 * 6; //Produces 0 - 5.99 (but not 6)
randomNumber1 = Math.floor(randomNumber1); //Truncs/turn it into whole randomNumber
randomNumber1++; //Now produces 1 - 6.

var randomNumber2 = (Math.floor( Math.random() *6)) + 1;

//displaying the respective images
document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");

document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");

//game logic
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins";
}

if (randomNumber2 > randomNumber1){
  document.querySelector("h1").textContent = "Player 2 Wins";
}

if (randomNumber1 == randomNumber2){
  document.querySelector("h1").textContent = "Draw";
}
