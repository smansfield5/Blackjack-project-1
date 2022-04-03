/*----- constants -----*/
let playerHand = [];
let dealerHand = [];
const suits = ['s', 'c', 'd', 'h'];
const ranks = ['02', '03', '04', '05', '06', '07', '08', '09', '10', 'J', 'Q', 'K', 'A'];


/*----- app's state (variables) -----*/
let bank; //An object with the players money amount to play with
let results; //Determines which hand wins
let winner; // Checks 

/*----- cached element references -----*/
deck = [];

/*----- event listeners -----*/


/*----- functions -----*/
// init();
// function init() {
//     game = {
//         playerHand: [],
//         dealerHand: []
//     }

//     render()
// }

// render() {
//     //renderHand()
//     //renderBank()
// };

// function determineWinner() {
//     if (playerHand === dealerHand) {
//         return Draw
//     } else if (playerHand === 21 || dealerHand === 21) {
//         return Blackjack
//     } else if ()
// }

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

