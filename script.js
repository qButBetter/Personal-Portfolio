// Easter Egg Clickables
var quagsireAud = new Audio("Sounds/quagsire.mp3");
var brickAud = new Audio("Sounds/brick-house.mp3");

document.addEventListener("DOMContentLoaded", function () {

    let quagCount = 0;

    document.getElementById("quagsire").addEventListener("click", function () {

        quagsireAud.play();
        quagCount++;

        if (quagCount > 99) {
            // Do something silly with this! ;-;
            window.open("https://www.tacobell.com/");
            quagCount = 0;
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("brick-wall").addEventListener("click", function () {
        brickAud.play();
        console.log("Wall Clicked!");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("noBtn").addEventListener("click", function () {
        window.close();
        window.open("pickle.html");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pickle-btn").addEventListener("click", function () {
        window.close();
        window.open("home.html");
    });
});

// Carousel JS
let iterator = 0;
document.addEventListener("DOMContentLoaded", function () {

    let carouselImg = ['Images/age-caro1.jpg', 'Images/age-caro2.jpg', 'Images/age-caro3.png'];

    document.getElementById("dossier-container").innerHTML = `<img src='${carouselImg[iterator]}' alt="A Spinosaurus Image">`;
    let carouselClick = 0;

    document.getElementById("carousel-btn").addEventListener("click", function () {
        iterator++;
        carouselClick++;

        if (iterator > 2) {
            iterator = 0;
        }

        document.getElementById("dossier-container").innerHTML = `<img src='${carouselImg[iterator]}' alt="A Spinosaurus Image">`;

        if (carouselClick > 99) {
            document.getElementById("dossier-container").innerHTML = `<img src='Images/hames.png' alt="Janice image">`;
        }
    });
});