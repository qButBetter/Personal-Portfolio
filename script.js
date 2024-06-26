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

let iterator2 = 0;
document.addEventListener("DOMContentLoaded", function () {

    let carouselImg2 = ['Images/dunkle2.jpg', 'Images/phil.png', 'Images/kimchi1.jpg'];

    document.getElementById("cat-container").innerHTML = `<img src='${carouselImg2[iterator2]}' alt="One of many cats from the VAC Fearl Yard">`;
    let carouselClick2 = 0;

    document.getElementById("cat-btn").addEventListener("click", function () {
        iterator2++;
        carouselClick2++;

        if (iterator2 > 2) {
            iterator2 = 0;
        }

        document.getElementById("cat-container").innerHTML = `<img src='${carouselImg2[iterator2]}' alt="One of many cats from the VAC Fearl Yard">`;
    });
});

function addSlide() {
    document.getElementById("james-1").classList.add("slide");
}

function removeSlide() {
    document.getElementById("james-1").classList.remove("slide");
}

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("james-1").addEventListener("click", function () {

    
        addSlide();
        // Count for 5 seconds, then remove class slide
        setTimeout(removeSlide, 5000);
    });
});

// // Fading in function
// document.addEventListener("DOMContentLoaded", function () {
//     let window_height = window.innerHeight;
//     let center_position = window_height / 2.9;

//     document.addEventListener("scroll", function () {
//         let boxes = document.getElementsByClassName("container");
//         [...boxes].forEach(element => {
//             let box_position = element.getBoundingClientRect().top;
//             let opacity = 1 - Math.abs(box_position - center_position) / center_position;
//             element.style.opacity = opacity.toFixed(2);
//         });
//     });
// });