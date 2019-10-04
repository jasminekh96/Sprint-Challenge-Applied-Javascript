// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const card = document.querySelector('.cards-container');
function Card(cards) {
	const mainCard = document.createElement('div'),
		titleCard = document.createElement('div'),
		authorCard = document.createElement('div'),
		imageCard = document.createElement('div'),
		imageCardImg = document.createElement('img'),
		nameCard = document.createElement('span');

	titleCard.textContent = cards.headline;
	imageCardImg.src = cards.authorPhoto;
	nameCard.textContent = cards.authorName;

	mainCard.classList.add('card');
	mainCard.classList.add('headline');
	mainCard.classList.add('author');
	mainCard.classList.add('img-container');

	mainCard.appendChild(titleCard);
	mainCard.appendChild(authorCard);
	mainCard.appendChild(imageCard);
	mainCard.appendChild(imageCardImg);
	mainCard.appendChild(nameCard);

	return mainCard;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles').then((response) => {
	const articles = response.data.articles;
	console.log(articles);
	for (topic in articles) {
		articles[topic].forEach((cards) => {
			card.appendChild(Card(cards));
		});
	}
});

// axios.get('https://lambda-times-backend.herokuapp.com/articles').then((response) => {
// 	console.log(response.data.card);
// 	response.data.card.forEach((cards) => {
// 		card.appendChild(Card(cards));
// 	});
// });
