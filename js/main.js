/*----- constants -----*/

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const masterDeck = buildMasterDeck();
const newDeck = getNewShuffledDeck()

const player = {
    playerHand: [],
    bank: 3000

}

const dealer = {
    dealerHand: [],
}
/*----- app's state (variables) -----*/
//let bank = 2000; //An object with the players money amount to play with
let results; //Determines which hand wins
let winner; // Checks 
let redChip = 500;
let yellowChip = 250;
let playerCard;
let dealerCard;

/*----- cached element references -----*/
const dealButton = document.getElementById('deal');
const playerCards = document.getElementById('player-cards');
const dealerCards = document.getElementById('dealer-cards');
const hitButton = document.getElementById('hit');
const stayButton = document.getElementById('stay');
const chipButton1 = document.getElementById('chips1')
const chipButton2 = document.getElementById('chips2')

/*----- event listeners -----*/
hitButton.addEventListener('click', hit);
stayButton.addEventListener('click', stay);
dealButton.addEventListener('click', deal);
chipButton1.addEventListener('click', yellowBet)
chipButton2.addEventListener('click', redBet)

/*----- functions -----*/
init();
function init() {
  
  
    render()
}

function render() {
    getNewShuffledDeck();
    renderGame();
    renderHand();
    //renderPlayerHand();
    redBet();
    yellowBet();
    //renderDealerHand();
    
    //hit()
}

function renderGame() {
    
}

function renderHand() {
  
  player.playerHand.forEach(function(card) {
    const cardEl = document.createElement('div');
    cardEl.className = `card ${card.face}`
    playerCards.appendChild(cardEl)
})
  dealer.dealerHand.forEach(function(card, index) {
    const cardEl = document.createElement('div');
    cardEl.className = index === 0 ? `card ${card.face}` : `card back`
    dealerCards.appendChild(cardEl)
});

}



// function determineWinner() {
//     if (playerHand === dealerHand) {
//         return Draw
//     } else if (playerHand === 21 || dealerHand === 21) {
//         return Blackjack
//     } else if ()
// }

function redBet() {
    
    bank.innerHTML = player.bank; 
    player.bank -= redChip;
}

function yellowBet() {
    bank.innerHTML = player.bank
    player.bank -= yellowChip;
}



function deal() {
    //console.log('hello')
    
    //console.log(shuffledDeck)
    playerCard = newDeck.pop();
    player.playerHand.push(playerCard);
    dealerCard = newDeck.pop();
    dealer.dealerHand.push(dealerCard)
    playerCard = newDeck.pop();
    player.playerHand.push(playerCard);
    dealerCard = newDeck.pop();
    dealer.dealerHand.push(dealerCard)
    console.log(player.playerHand)
    console.log('dealer')
    console.log(dealer.dealerHand)
    render()
}

function hit() {
    playerCard = newDeck.pop();
    player.playerHand.push(playerCard);
    console.log(player.playerHand)
}

function dealerHit() {
 if (dealerCards < 17){
    dealerCard = newDeck.pop();
    dealer.dealerHand.push(dealerCard)
  }
}

function stay() {

}




// Build a 'master' deck of 'card' objects used to create shuffled decks



/*----- app's state (variables) -----*/
let shuffledDeck;

/*----- cached element references -----*/
const shuffledContainer = document.getElementById('shuffled-deck-container');

/*----- event listeners -----*/


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
  console.log(newShuffledDeck)
  return newShuffledDeck;
}

function renderNewShuffledDeck() {
  // Create a copy of the masterDeck (leave masterDeck untouched!)
  shuffledDeck = getNewShuffledDeck();
  renderDeckInContainer(shuffledDeck, shuffledContainer);
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
        value: Number(rank) || (rank === 'A' ? 11 : 1)
      });
    });
  });
  return deck;
}

