
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let player =
{
    name: "Vatsal",
    chips: 200

}

let playername = "Vatsal"
let playerchips = 145

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getrandomcard() {
    let number = Math.floor(Math.random() * 13) + 1
    if (number > 10) {
        return 10
    }
    else if (number === 11) {
        return 11
    }
    else {
        return number

    }

}

console.log(messageEl)

function startgame() {

    isAlive = true
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    rendergame()
}

function rendergame() {

    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }


    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "🥳Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }

    messageEl.textContent = message



} function newcard() {
    console.log("Drawing a new card from the deck!")


    if (isAlive === true && hasBlackJack === false) {
        let card = getrandomcard()
        sum += card
        cards.push(card)
        rendergame()
    }
}
function newgame() {

    sum = ""
    cards = []
    rendergame()

}

