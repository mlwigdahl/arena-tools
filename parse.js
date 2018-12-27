

export default function parseDeck(deck) {
    let parsed = [];
    deck.split('\r\n').forEach(v => {
        let line = v.split(' ');
        const count = parseInt(line[0]);
        line.shift();
        const card = line.join(' ');
        for(let i = 0; i < count; i++) {
            parsed.push(card);
        }
    });
    return parsed;
}