// Easter Egg Clickables
var quagsireAud = new Audio("Sounds/quagsire.mp3");
var brickAud = new Audio("Sounds/brick-house.mp3")


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("quagsire").addEventListener("click", function() {

        quagsireAud.play();
        console.log("Quagsire Clicked!")
    
    });

    document.getElementById("brick-wall").addEventListener("click", function () {
        brickAud.play();
        console.log("Wall Clicked!");
    });
});