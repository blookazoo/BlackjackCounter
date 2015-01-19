// starting the game
var curDeck = null;
var count = 0;
var curCard = null;

function cardArrives(card) {
	if (card.value >= 2 && card.value <= 6)  {
		count += 1;
	} else if (card.value >= 10) {
		count -= 1;
	}
}
document.getElementById("startGame").onclick = function() {
	count = 0;
	curDeck = new Deck();
	curDeck.shuffle();
	curCard = curDeck.next();
	document.getElementById("card").src = "cards/" + curCard.toString() + ".png";
	cardArrives(card);
}

document.getElementById("nextCard").onclick = function() {
	curCard = curDeck.next();
	document.getElementById("card").src = "cards/" + curCard.toString() + ".png";
	cardArrives(curCard);
};

document.getElementById("showCount").onclick = function() {
	alert("count is: " + count);
};

document.getElementById("shuffle").onclick = function() {
	curDeck.shuffle();
}