/*----- constants -----*/

const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];
const masterDeck = buildMasterDeck();
const newDeck = getNewShuffledDeck()

const player = {
  playerHand: [],
  bank: 3000,
  bets: 0
}

const dealer = {
  dealerHand: [],
}
/*----- app's state (variables) -----*/
//let bank = 2000; //An object with the players money amount to play with
let shuffledDeck;
let results; //Determines which hand wins
let winner; // Checks 
let redChip = 500;
let yellowChip = 250;
let playerCard;
let dealerCard;
let staying; //keeps track of when plays turn is over
let playerTotal;
let dealerTotal;
let gameInProgress;
let playerWinner;

/*----- cached element references -----*/
const shuffledContainer = document.getElementById('shuffled-deck-container');
const dealButton = document.getElementById('deal');
const playerCards = document.getElementById('player-cards');
const dealerCards = document.getElementById('dealer-cards');
const hitButton = document.getElementById('hit');
const stayButton = document.getElementById('stay');
const chipButton1 = document.getElementById('chips1');
const chipButton2 = document.getElementById('chips2');
const msgEl = document.getElementById('msg');
const bet = document.getElementById('betAmt');
const restart = document.getElementById('restart');

/*----- event listeners -----*/
hitButton.addEventListener('click', hit);
stayButton.addEventListener('click', stay);
dealButton.addEventListener('click', deal);
chipButton1.addEventListener('click', yellowBet);
chipButton2.addEventListener('click', redBet);
restart.addEventListener('click', restartGame);

/*----- functions -----*/
init();

function init() {
  getNewShuffledDeck()
  dealer.dealerHand = [];
  player.playerHand = [];
  staying = false;
  gameInProgress = true;
  playerWinner = false;
  bet = 0;
  dealButton.style.visibility = "visible";
  chipButton2.style.visibility = "visible";
  chipButton1.style.visibility = "visible";
  restart.style.visibility = "visible";
  render();

}

function render() {
  getNewShuffledDeck();
  renderHand();
  total();

}

function restartGame() {
  dealButton.style.visibility = "visible";
  clearHands()
  msgEl.innerText = '';
  init();

}

function renderHand() {
  clearHands();
  player.playerHand.forEach(function (card) {
    const cardEl = document.createElement('div');
    cardEl.className = `card ${card.face}`
    playerCards.appendChild(cardEl)
  });
  dealer.dealerHand.forEach(function (card, index) {
    const cardEl = document.createElement('div');
    cardEl.className = index === 0 || staying === true ? `card ${card.face}` : `card back`
    dealerCards.appendChild(cardEl)
  });

}

function redBet() {
  player.bank -= redChip;
  bank.innerHTML = player.bank;
  bet.innerHTML += redChip
}

function yellowBet() {
  player.bank -= yellowChip;
  bank.innerText = player.bank;


}

function deal() {
  playerCard = newDeck.pop();
  player.playerHand.push(playerCard);
  dealerCard = newDeck.pop();
  dealer.dealerHand.push(dealerCard);
  playerCard = newDeck.pop();
  player.playerHand.push(playerCard);
  dealerCard = newDeck.pop();
  dealer.dealerHand.push(dealerCard);
  dealButton.style.visibility = "hidden";
  chipButton2.style.visibility = "hidden";
  chipButton1.style.visibility = "hidden";
  render();
}

function hit() {
  clearHands();
  playerCard = newDeck.pop();
  player.playerHand.push(playerCard);
  player.playerHand.forEach(function (card) {
    const cardEl = document.createElement('div');
    cardEl.className = `card ${card.face}`
    playerCards.appendChild(cardEl)
  })
  render();

};

function clearHands() {
  Array.from(playerCards.children).forEach(function (card) {
    playerCards.removeChild(card);
  })
  Array.from(dealerCards.children).forEach(function (card) {
    dealerCards.removeChild(card);

  })
};

function stay() {
  staying = true;
  if (dealer.dealerHand < 17) {
    dealerCard = newDeck.pop();
    dealer.dealerHand.push(dealerCard);
  } else {
    staying = true;
  }
  render();
  dealerHit();
  determineWinner();
}

function dealerHit() {

  if (dealer.dealerHand < 17) {
    dealerCard = newDeck.pop();
    dealer.dealerHand.push(dealerCard);
  } else {
    staying = true;
  }

}



function total() {
  playerTotal = 0;
  for (let p = 0; p < player.playerHand.length; p++) {
    playerTotal += player.playerHand[p].value;
  }
  dealerTotal = 0;
  for (let d = 0; d < dealer.dealerHand.length; d++) {
    dealerTotal += dealer.dealerHand[d].value;
  }

}

function determineWinner() {

  if (playerTotal === dealerTotal) {
    msgEl.innerText = 'Draw';
  } else if (playerTotal === 21) {
    msgEl.innerText = `Player Blackjack! Dealer Has ${dealerTotal}`;
    gameInProgress = false;
    playerWinner = true;
  } else if (dealerTotal === 21) {
    msgEl.innerText = `Dealer Blackjack! Player has ${playerTotal}`;
    gameInProgress = false;
    playerWinner = false;
  } else if (playerTotal > 21) {
    msgEl.innerText = `Player Bust: Dealer has ${dealerTotal}`;
    gameInProgress = false;
    playerWinner = false;
  } else if (dealerTotal > 21) {
    msgEl.innerText = `Dealer Bust! Player has ${playerTotal}`;
    gameInProgress = false;
    playerWinner = true;
  } else if (playerTotal > dealerTotal) {
    msgEl.innerText = `Player Wins! Dealer has ${dealerTotal}`;
    gameInProgress = false;
    playerWinner = true;
  } else if (playerTotal < dealerTotal) {
    msgEl.innerText = `Dealer Wins! Player has ${playerTotal}`;
    gameInProgress = false;
    playerWinner = false;
  } else {
    msgEl.innerText = 'not working';
  }
  render();


};


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



function buildMasterDeck() {
  const deck = [];
  // Use nested forEach to generate card objects
  suits.forEach(function (suit) {
    ranks.forEach(function (rank) {
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

