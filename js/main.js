/*----- constants -----*/

const ranks = [
        { value: 11, card: "dA" },
        { value: 11, card: "hA" },
        { value: 11, card: "cA" },
        { value: 11, card: "sA" },
        { value: 2, card: "d02" },
        { value: 2, card: "h02" },
        { value: 2, card: "c02" },
        { value: 2, card: "s02" },
        { value: 3, card: "d03" },
        { value: 3, card: "h03" },
        { value: 3, card: "c03" },
        { value: 3, card: "s03" },
        { value: 4, card: "d04" },
        { value: 4, card: "h04" },
        { value: 4, card: "c04" },
        { value: 4, card: "s04" },
        { value: 5, card: "d05" },
        { value: 5, card: "h05" },
        { value: 5, card: "c05" },
        { value: 5, card: "s05" },
        { value: 6, card: "d06" },
        { value: 6, card: "h06" },
        { value: 6, card: "c06" },
        { value: 6, card: "s06" },
        { value: 7, card: "d07" },
        { value: 7, card: "h07" },
        { value: 7, card: "c07" },
        { value: 7, card: "s07" },
        { value: 8, card: "d08" },
        { value: 8, card: "h08" },
        { value: 8, card: "c08" },
        { value: 8, card: "s08" },
        { value: 9, card: "d09" },
        { value: 9, card: "h09" },
        { value: 9, card: "c09" },
        { value: 9, card: "s09" },
        { value: 10, card: "d10" },
        { value: 10, card: "h10" },
        { value: 10, card: "c10" },
        { value: 10, card: "s10" },
        { value: 10, card: "dJ" },
        { value: 10, card: "hJ" },
        { value: 10, card: "cJ" },
        { value: 10, card: "sJ" },
        { value: 10, card: "dQ" },
        { value: 10, card: "hQ" },
        { value: 10, card: "cQ" },
        { value: 10, card: "sQ" },
        { value: 10, card: "dK" },
        { value: 10, card: "hK" },
        { value: 10, card: "cK" },
        { value: 10, card: "sK" }
]


/*----- app's state (variables) -----*/
let bank = 2000; //An object with the players money amount to play with
let results; //Determines which hand wins
let winner; // Checks 
let playerHand = [];
let dealerHand = [];
let redChip = 500;
let yellowChip = 250;

/*----- cached element references -----*/
deck = [];

/*----- event listeners -----*/
hit.addEventListener('click', playerHit);
stay.addEventListener('click', playerStay);

/*----- functions -----*/
// init();
// function init() {
//     game = {
//         playerHand,
//         dealerHand
//     }

//     render()
// }

// function render() {
//     renderGame();
//     renderHand();
//     renderBank();
// }

// function renderGame() {

// }



// function determineWinner() {
//     if (playerHand === dealerHand) {
//         return Draw
//     } else if (playerHand === 21 || dealerHand === 21) {
//         return Blackjack
//     } else if ()
// }

function redBet() {
    balance -= 500;
}

function yellowBet() {
    balance -= 250;
}

function deal() {
    let rndDeck = ranks[Math.floor(Math.random() * ranks.length)];
    playerHand.push(rndDeck)
    rndDeck = ranks[Math.floor(Math.random() * ranks.length)];
    dealerHand.push(rndDeck)
    rndDeck = ranks[Math.floor(Math.random() * ranks.length)];
    playerHand.push(rndDeck)
    rndDeck = ranks[Math.floor(Math.random() * ranks.length)];
    dealerHand.push(rndDeck)
console.log(playerHand)
console.log(dealerHand)
}
deal()

function playerHit() {
    let rndDeck = ranks[Math.floor(Math.random() * ranks.length)];
    playerHand.push(rndDeck)
    console.log(playerHand)
}

function dealerHit() {
    rndDeck = ranks[Math.floor(Math.random() * ranks.length)];
    dealerHand.push(rndDeck)
}

function playerStay() {

}





// Build a 'master' deck of 'card' objects used to create shuffled decks
const masterDeck = buildMasterDeck();
renderDeckInContainer(masterDeck, document.getElementById('master-deck-container'));

/*----- app's state (variables) -----*/
let shuffledDeck;

/*----- cached element references -----*/
const shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/
document.querySelector('button').addEventListener('click', renderNewShuffledDeck);

/*----- functions -----*/
function getNewShuffledDeck() {
  // Create a copy of the masterDeck (leave masterDeck untouched!)
  const tempDeck = [...masterDeck];
  const newShuffledDeck = [];
  while (tempDeck.length) {
    // Get a random index for a card still in the tempDeck
    const rndIdx = Math.floor(Math.random() * tempDeck.length);
    // Note the [0] after splice - this is because splice always returns an array and we just want the card object in that array
    newShuffledDeck.push(tempDeck.splice(rndIdx, 1)[0]);
  }
  return newShuffledDeck;
}

function renderNewShuffledDeck() {
  // Create a copy of the masterDeck (leave masterDeck untouched!)
  shuffledDeck = getNewShuffledDeck();
  renderDeckInContainer(shuffledDeck, shuffledContainer);
}

function renderDeckInContainer(deck, container) {
  container.innerHTML = '';
  // Let's build the cards as a string of HTML
  let cardsHtml = '';
  deck.forEach(function(card) {
    cardsHtml += `<div class="card ${card.face}"></div>`;
  });
  // Or, use reduce to 'reduce' the array into a single thing - in this case a string of HTML markup 
  // const cardsHtml = deck.reduce(function(html, card) {
  //   return html + `<div class="card ${card.face}"></div>`;
  // }, '');
  container.innerHTML = cardsHtml;
}

function buildMasterDeck() {
  const deck = [];
  // Use nested forEach to generate card objects
  suits.forEach(function(suit) {
    ranks.forEach(function(rank) {
      deck.push({
        // The 'face' property maps to the library's CSS classes for cards
        face: `${suit}${rank}`,
        // Setting the 'value' property for game of blackjack, not war
        value: Number(rank) || (rank === 'A' ? 11 : 10)
      });
    });
  });
  return deck;
}

renderNewShuffledDeck();