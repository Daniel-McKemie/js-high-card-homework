const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
const deck = [];
let player1Card = null;
let player2Card = null;

function buildDeck() {
	let card = function(value, suit) {
		this.name = value + " of " + suit;
		this.value = value;
		this.suit = suit;

		return {
			Name: this.name,
			Value: this.value,
			Suit: this.suit
		}
	}
	for (let i=0; i<suits.length; i++) {
		for (let j=0; j<values.length; j++) {
			deck.push(card(values[j], suits[i]));
		}
	}	
}
buildDeck()


function dealCardsToPlayers() {
	let card1 = Math.floor(Math.random()*deck.length)
	player1Card = deck[card1];
		deck.splice(card1,1);
	let card2 = Math.floor(Math.random()*deck.length)
	player2Card = deck[card2];
		deck.splice(card2, 1);	 
	return deck;

}
dealCardsToPlayers()


function announceCards() {
	console.log(`Player 1 is showing the ${player1Card.Name}`)
	console.log(`Player 2 is showing the ${player2Card.Name}`)
	}
announceCards()


function cardToRank() {
    player1Rank = values.indexOf(player1Card.Value) + 2;
    player2Rank = values.indexOf(player2Card.Value) + 2;
}

cardToRank();


function announceWinner() {
	if (player1Rank > player2Rank) {
		console.log("Player 1 wins!")
	} else {console.log("Player 2 wins!")}
}

announceWinner()

function returnCardsToDeck() {
	deck.push(player1Card);
	deck.push(player2Card);
}

returnCardsToDeck()


function playGame() {
  dealCardsToPlayers();
  announceCards();
  announceWinner();
  returnCardsToDeck();
}





