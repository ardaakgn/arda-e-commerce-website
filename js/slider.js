
    //! slider start
let sliderIndex=1;
showSlides(sliderIndex);

setInterval(function(){
    showSlides(sliderIndex+=1);
}, 4000);

function plusSlide(n){
    showSlides(sliderIndex+=n);
}

function currentSlide(n){
    showSlides(sliderIndex=n);
    
}

function showSlides(n){
    const slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");

    if (n>slides.length ){
        sliderIndex=1;
    }
    if (n < 1 ){
        sliderIndex=slides.length;
    }

    for(let i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }

    for(let i=0; i<dots.length; i++){
        dots[i].className=dots[i].className.replace(" active","");
    }

    slides[sliderIndex - 1].style.display="flex"; 
    dots[sliderIndex - 1].className+=" active";
}
//!slider end //


