// keep all the images in an array
let images = [
    "/img/img-1.jpeg",
    "/img/img-2.jpeg",
    "/img/img-3.jpeg",
    "/img/img-4.jpeg",
    "/img/img-5.jpeg",
];

// this would help declare a variable that'll keep track of the current event
let currentIndex = 0;

// create a function to handle the click event
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    // get the current image element
    let imageElement = document.getElementById("slider-image");
    imageElement.src = images[currentIndex];
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    // get the current image element
    let imageElement = document.getElementById("slider-image");
    imageElement.src = images[currentIndex];
}