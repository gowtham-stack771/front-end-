const images = [
    "image/slide1.jpg",
    "image/slide2.jpg",
    "image/slide3.jpg",
    "image/slide4.jpg",
    "image/slide5.jpg",
    "image/slide6.jpg"
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