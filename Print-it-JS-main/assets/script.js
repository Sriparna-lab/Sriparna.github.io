const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Global variables //
const bannerImg = document.querySelector(".banner-img");
const bannerTagline = document.querySelector("#banner p")
const arrow_left = document.querySelector(".arrow_left");
const arrow_right = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
// Counter//
let i=0

// Added the event listener for left arrow//
arrow_left.addEventListener("click" ,  ()  => {
	const dot_selected = document.querySelectorAll (".dot");
    dot_selected[i].classList.remove("dot_selected");
	i--;
	// Added the if condition to setup infinite scrolling //
	if (i <0)  {
		i= slides.length -1;
	}
	// When clicked on the left arrow the the last image will appear. Text will change accordingly//
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerTagline.innerHTML = slides[i].tagLine;
	// dot corresponding to the image wil be highlighted //
	dot_selected[i].classList.add("dot_selected");
});

// Added the event listener for right arrow//
arrow_right.addEventListener("click" ,  () => {
	const dot_selected = document.querySelectorAll (".dot");
	dot_selected[i].classList.remove("dot_selected");
	i++;
	// Added the if condition to setup infinite scrolling //
	if (i > slides.length -1) {
		i=0;
	}
	// When clicked on the right arrow the the next image will appear. Text will change accordingly//
	bannerImg.src = `./assets/images/slideshow/${slides[i].image}`;
	bannerTagline.innerHTML = slides[i].tagLine;
	// dot corresponding to the image wil be highlighted //
	dot_selected[i].classList.add("dot_selected");
});

// Added the dots //
function displayDots() {
	   for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
		// differentiate the first dot for the first slide //
		if (i == 0) {
			dot.classList.add("dot_selected");
        }
		}
}
displayDots()

