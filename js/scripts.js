let cardArray = [{
    text: '1',
    class: 'cardType-2'
}, {
    text: '2',
    class: 'cardType-1'
}, {
    text: '3',
    class: 'cardType-4'
}, {
    text: '4',
    class: 'cardType-1'
}, {
    text: '5',
    class: 'cardType-4'
}, {
    text: '6',
    class: 'cardType-3'
}, {
    text: '7',
    class: 'cardType-3'
}, {
    text: '8',
    class: 'cardType-2'
}, {
    text: '9',
    class: 'cardType-4'
}]
// declare glabal array with text and class name(do apply style and color to card)

function loadCards(array) {
    let cardsItem = ""
    array.map((item) =>
        cardsItem = cardsItem + `<div class ="card ${item.class}"><span class="cardText">${item.text}</span></div>`
    );
    document.getElementById("cards-holder").innerHTML = cardsItem;
}

function handleShuffle() {

    for (index = cardArray.length - 1; index > 0; index--) {
        const rand = Math.floor(Math.random() * (index + 1)); //get random number between zero and i
        [cardArray[index], cardArray[rand]] = [cardArray[rand], cardArray[index]]; // swap the values of index and randindex
    }

    loadCards(cardArray); // load the cards
}

function handleSort() {
    cardArray.sort((a, b) => (a.text) - (b.text)) // sort the array
    loadCards(cardArray); // load the cards
}


loadCards(cardArray);