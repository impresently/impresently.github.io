window.onload = function ()
{

	var slideArray = ["A", "B", "C", "D", "E"];

var slideTimer = 100

var activeSlide = 0;

var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);

var slide = document.getElementById("slide");
    slide.className="activeSlide";

var slideInterval = setInterval(next,slideTimer);

function next() {
  slide.innerHTML = slideArray[activeSlide];
  activeSlide++;
  if (activeSlide > (slideArray.length - 1)) {
    activeSlide = 0;
  }
  slide.style.backgroundColor=randomColor;
}



}