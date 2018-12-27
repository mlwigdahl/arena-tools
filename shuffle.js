
export default function shuffle(deck) {
    const len = deck.length;
    let s = [];
    deck.forEach((v, i) => {
        s.push(deck[i]);
    });

    const steps = Math.floor((Math.random() * 1000)) + 100000;

    for(let i = 0;i<steps;i++) {
        const ind1 = Math.floor(Math.random() * len);
        const ind2 = Math.floor(Math.random() * len);

        if (ind1 == ind2) continue;

        const interim = s[ind2];
        s[ind2] = s[ind1];
        s[ind1] = interim;
    }

    return s;
}