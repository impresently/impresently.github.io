
var $slides = $('#slidesContainer div');
var slidesArr = [];
slidesArr[0] = $('#a');
slidesArr[1] = $('#b');
slidesArr[2] = $('#c');
slidesArr[3] = $('#d');
slidesArr[4] = $('#e');

var currentSlideIndex = 0;
var slideTimer = 1000
var playInterval = setInterval(autoplay,slideTimer);
var randomColorIndex = 0;
var pauseBtn = document.getElementById('pause');
var playBtn = document.getElementById('play');
var nextBtn = document.getElementById('next');
var previousBtn = document.getElementById('previous');

pauseBtn.addEventListener("click", pauseSlider);
playBtn.addEventListener("click", playSlider);
nextBtn.addEventListener("click", nextSlide);
previousBtn.addEventListener("click", previousSlide);


function generateRandomColor() {
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

for(var i=0; i<slidesArr.length; i++) {
	var randomColor = slidesArr[randomColorIndex];
	randomColorIndex++;
  	randomColor.css('background-color', generateRandomColor());
};

function showCurrentSlide () {
    $slides.hide();
    slidesArr[currentSlideIndex].show();
};

function autoplay() {
    currentSlideIndex++;
    if(currentSlideIndex === slidesArr.length) {
        currentSlideIndex = 0;
    };
	showCurrentSlide();
};

function pauseSlider() {
	clearInterval(playInterval);
};

function playSlider() {
	playInterval = setInterval(autoplay,slideTimer);
};

function nextSlide () {
	currentSlideIndex++;
	if(currentSlideIndex === slidesArr.length) {
        currentSlideIndex = 0;
    };
	showCurrentSlide();
};

function previousSlide () {
	if(currentSlideIndex === 0) {
        currentSlideIndex = slidesArr.length;
    };
	currentSlideIndex--;
	showCurrentSlide();
};





	
	









