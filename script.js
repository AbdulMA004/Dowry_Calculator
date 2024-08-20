document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show the slider
    document.getElementById('imageSlider').style.display = 'block';
    
    // Start the automatic slideshow
    showSlides(slideIndex);
    autoSlide();
});

let slideIndex = 0;

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
}

function autoSlide() {
    showSlides();
    setTimeout(autoSlide, 3000); // Change image every 3 seconds
}

// Close the slider when the user clicks on <span> (x)
document.querySelector('.close').onclick = function() {
    document.getElementById('imageSlider').style.display = 'none';
};

// Close the slider when the user clicks anywhere outside of the slider
window.onclick = function(event) {
    if (event.target == document.getElementById('imageSlider')) {
        document.getElementById('imageSlider').style.display = 'none';
    }
};
