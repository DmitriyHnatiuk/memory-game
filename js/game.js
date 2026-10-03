
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

export const store = {
  steps: 0,
  score: 0,
  timer: 1000,
  timeoutId: null,
  cards: shuffle(gameGrid),

  isBoardLocked: false,

  firstCard: { id: null, uid: null },
  secondCard: { id: null, uid: null },

  max_score: uniqueCards.length,

  shuffledDeck() { this.cards = shuffle(this.cards) },

  checkMatch() {
    return this.firstCard.uid !== this.secondCard.uid &&
      this.firstCard.id === this.secondCard.id;
  },

  resetTurn() {
    this.firstCard = { id: null, uid: null };
    this.secondCard = { id: null, uid: null };
  },

  resetStor() {
    this.steps = 0;
    this.score = 0;
    this.isBoardLocked = false;
    this.shuffledDeck();
    this.resetTurn();
  }
}

function getTime() {
  const today = new Date();

  return today.toLocaleDateString('ru-RU', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit'
  })
}

function getWin() {
  if (store.score === store.max_score) {
    const winEvent = new CustomEvent('gameWin', { detail: { steps: store.steps, score: store.score } });
    document.dispatchEvent(winEvent);
    const score_list = JSON.parse(window.localStorage.getItem('score_list')) || [];

    const time = getTime();
    const newStorage = [...score_list, { score: store.steps, time }];

    window.localStorage.setItem('score_list', JSON.stringify(newStorage));
  }
}

function getLose(card) {
  const firstCard = document.querySelector(`[data-uid=${store.firstCard.uid}]`);
  store.isBoardLocked = true;

  store.timeoutId = setTimeout(() => {
    firstCard.classList.remove('flipped');
    card.classList.remove('flipped');

    store.isBoardLocked = false;
    store.resetTurn();
  }, store.timer);
}

export function onBoardClick({ target }) {
  if (store.isBoardLocked) return;

  const card = document.querySelector(`[data-uid=${target.offsetParent.dataset.uid}]`);

  if (!card) return;

  if (card.classList.contains('flipped') ||
    card.classList.contains('matched')) return;

  card.classList.add('flipped');

  if (!store.firstCard.id) {
    store.firstCard = { id: card.dataset.id, uid: card.dataset.uid };
    return;
  }
  const score = document.getElementById('score-count');
  const steps = document.getElementById('steps');

  store.secondCard = { id: card.dataset.id, uid: card.dataset.uid };
  store.steps++;
  steps.textContent = store.steps;
  const isMatch = store.checkMatch();

  function findMatch() {
    const first_card = document.querySelector(`[data-uid=${store.firstCard.uid}]`);
    first_card.classList.add('matched');
    card.classList.add('matched');

    const score = document.getElementById('score-count');

    store.score++;
    score.textContent = store.score;

    getWin();
  }

  isMatch ? findMatch() : getLose(card);


  store.resetTurn();
}

function updateBoard(cards, liElements) {

  [...liElements].map((li, index) => {
    const cardData = cards[index];

    li.className = 'cell';
    setTimeout(() => {
      const emojiSpan = li.querySelector('.card-emoji');
      if (emojiSpan) {
        emojiSpan.textContent = cardData.emoji;
      }
    }, 100);
    li.dataset.id = cardData.id;
    li.dataset.uniqueId = cardData.uniqueId;
  });
}

export function resetGame() {
  const board = document.getElementById('board');
  const score = document.getElementById('score-count');
  const steps = document.getElementById('steps');

  if (this.timeoutId) {
    clearTimeout(this.timeoutId);
    this.timeoutId = null;
  }

  score.textContent = 0;
  steps.textContent = 0;

  store.resetStor();

  updateBoard(store.cards, board.children);
}