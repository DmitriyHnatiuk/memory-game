const uniqueCards = ['🦁', '🍕', '🚀', '🎨', '👻', '🌵', '⚽', '💎'];

const gameGrid = uniqueCards.flatMap((card, index) => [
  { emoji: card, id: index, uniqueId: `a-${index}` },
  { emoji: card, id: index, uniqueId: `b-${index}` }
]);

function shuffle(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function checkMatch(card1, card2) {
  return !card1.uniqueId === card2.uniqueId && card1.id === card2.id;
}

export const store = {
  steps: 0,
  score: 0,

  timer: 1000,
  cards: gameGrid,

  get max_score(){ this.cards.length},

  setCards(cards) { this.cards = cards },
  shuffledDeck() { this.setCards(shuffle(this.cards)) },
  checkMatch,
  resetStor() {
    this.steps = 0;
    this.score = 0;
    this.timer = 1000;
    this.shuffledDeck();
  }
}


export function resetGame() {
  store.resetStor();
}