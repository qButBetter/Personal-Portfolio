// Easter Egg Clickables
var quagsireAud = new Audio("Sounds/quagsire.mp3");
var brickAud = new Audio("Sounds/brick-house.mp3")


document.addEventListener("DOMContentLoaded", function () {

    let quagCount = 0;

    document.getElementById("quagsire").addEventListener("click", function () {

        quagsireAud.play();
        console.log("Quagsire Clicked!");
        quagCount++;
        console.log("Quagsire Counter: " + quagCount);

        if (quagCount > 99) {
            // Do something silly with this! ;-;
            window.open("https://www.tacobell.com/");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("brick-wall").addEventListener("click", function () {
        brickAud.play();
        console.log("Wall Clicked!");
    });
});