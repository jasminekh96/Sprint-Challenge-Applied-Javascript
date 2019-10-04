/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
var slideIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName('carousel');
	for (i = 0; i < x.length; i++) {
		x[i].style.display = 'none';
	}
	slideIndex++;
	if (slideIndex > x.length) {
		slideIndex = 1;
	}
	x[slideIndex - 1].style.display = 'block';
	setTimeout(carousel, 2000); // Change image every 2 seconds
}

const carousels = document.querySelector('.carousel');
function Carousel(images) {
	const classCard = document.createElement('div'),
		buttonLeft = document.createElement('div'),
		imageOne = document.createElement('img'),
		imageTwo = document.createElement('img'),
		imageThree = document.createElement('img'),
		imageFour = document.createElement('img'),
		buttonRight = document.createElement('div');

	imageOne.src;
	imageTwo.src;
	imageThree.src;
	imageFour.src;

	classCard.classList.add('carousel');
	classCard.classList.add('left-button');
	classCard.classList.add('right-button');

	classCard.appendChild(buttonLeft);
	classCard.appendChild(imageOne);
	classCard.appendChild(imageTwo);
	classCard.appendChild(imageThree);
	classCard.appendChild(imageFour);
	classCard.appendChild(buttonRight);

	return Carousel;
}
/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
