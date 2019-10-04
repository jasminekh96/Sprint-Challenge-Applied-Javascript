// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
	const headerCard = document.createElement('div'),
		dateCard = document.createElement('span'),
		titleCard = document.createElement('h1'),
		tempCard = document.createElement('span');

	headerCard.classList.add('header');
	dateCard.classList.add('date');
	tempCard.classList.add('temp');

	headerCard.textContent = 'LAMBDA TIMES';
	dateCard.textContent = 'SMARCH 28. 2019';
	tempCard.textContent = '98°';

	headerCard.appendChild(dateCard);
	headerCard.appendChild(titleCard);
	headerCard.appendChild(tempCard);

	return headerCard;
}
const headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());
