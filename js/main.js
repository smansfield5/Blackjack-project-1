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
    balance -= 250;s
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