// This Script Code is simple and for understanding All of uss but you can refactor this code.
// Dice 1
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

// Dice 2
var randomNumber2=Math.floor((Math.random()*6)+1);
var randomDiceImage2="dice"+randomNumber2+".png";
var randomImageSource2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

// If Math is Draw
if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerHTML="Match is Draw.<br>☂</br>";
}

// Player1 is Won
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="⛳ Player 1 is Won";
}

// Player2 is Won
else
{
    document.querySelector("h1").innerHTML="Player 2 is Won ⛳";
}