
import fs from 'fs';
import parseDeck from './parse';
import cardData from './cardData';
import shuffle from './shuffle';
import deal from './deal';

const filename = 'input.dec';

const deckData = fs.readFileSync(filename, 'utf8');

const parsed = parseDeck(deckData);

const shuffled1 = shuffle(parsed);
const hand1 = deal(shuffled1, 7).sort();

const shuffled2 = shuffle(parsed);
const hand2 = deal(shuffled2, 7).sort();

console.log(hand1);
console.log(hand2);

