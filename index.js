// Code your solutions in this file

const writeCards= ["Guadalupe", "Ollie", "Aki"];

function writecards(cards) {
    for(let i=0; i < cards.length; i+++) {
        console.log('Thank You, ${cards[i]}, for the wonderful surprise gift');
        debugger;
    }

    return cards;
}

writecards(cards);

function countdown() {
    let countdown = 0;
    while (countdown <10) {
        console.log(countdown++)
    }
}