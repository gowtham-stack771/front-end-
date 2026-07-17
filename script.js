const images = [
    "slide1.jpg",
    "slide2.jpg",
    "slide3.jpg",
    "slide4.jpg",
    "slide5.jpg",
    "slide6.jpg"
];

let index = 0;

const slide = document.getElementById("slide");
function nextSlide(){

    index++;

    if(index == images.length){
        index = 0;
    }

    slide.src = images[index];

}
function prevSlide(){

    index--;

    if(index < 0){
        index = images.length - 1;
    }

    slide.src = images[index];

}
setInterval(nextSlide,3000);
