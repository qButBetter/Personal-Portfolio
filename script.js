// Easter Egg Clickables
var quagsireAud = new Audio("Sounds/quagsire.mp3");
var brickAud = new Audio("Sounds/brick-house.mp3")

document.getElementById("quagsire").addEventListener("click", function() {

    quagsireAud.play();
    console.log("Quagsire Clicked!")

});