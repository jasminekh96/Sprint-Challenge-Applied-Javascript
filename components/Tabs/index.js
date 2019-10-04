// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
const topics = document.querySelector('.topics');
function Tab(topic) {
	const topicCard = document.createElement('div');

	topicCard.classList.add('Library');

	topicCard.textContent = topic;

	return topicCard;
}
axios.get('https://lambda-times-backend.herokuapp.com/topics').then((response) => {
	console.log(response.data.topics);
	response.data.topics.forEach((topic) => {
		topics.appendChild(Tab(topic));
	});
});
