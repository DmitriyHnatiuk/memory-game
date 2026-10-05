function createHeader() {

  const header = document.createElement('div');
  header.className = 'header';

  const title = document.createElement('h1');
  title.className = "title";
  title.textContent = 'Memory Game';

  const reset_btn = document.createElement('button');
  reset_btn.className = 'btn reset-btn';
  reset_btn.type = 'button';
  reset_btn.id = 'reset';
  reset_btn.textContent = 'New Game';

  const score_btn = document.createElement('button');
  score_btn.className = 'btn score-btn';
  score_btn.type = 'button';
  score_btn.textContent = 'Top Score';
  score_btn.id = 'score';

  const button_container = document.createElement('div');
  button_container.className = 'header__button__container';

  button_container.append(reset_btn, score_btn);

  const count_container = document.createElement('div');
  count_container.className = 'header__count__container';

  const steps_title = document.createElement('p');
  steps_title.className = 'steps--title';
  steps_title.textContent = 'Steps:';

  const steps = document.createElement('span');
  steps.className = 'u-text-m steps';
  steps.id = 'steps';
  steps.textContent = 0;

  steps_title.append(steps);


  const score_title = document.createElement('p');
  score_title.className = 'count--title';
  score_title.textContent = '/ 8';

  const count = document.createElement('span');
  count.className = 'count';
  count.id = 'score-count';
  count.textContent = '0';

  score_title.prepend(count);

  count_container.append(steps_title, score_title);

  header.append(title, button_container, count_container);

  return header;
}

function createBoard() {
  const board = document.createElement('ul');
  board.className = 'board';
  board.id = 'board';

  return board;
}

export function createCard(card) {
  const li = document.createElement('li');
  li.className = 'cell';
  li.dataset.id = card.id;
  li.dataset.uid = card.uniqueId;

  const frontElement = document.createElement('div');
  frontElement.classList.add('card-front');

  const emoji = document.createElement('span');
  emoji.className = 'card-emoji';
  emoji.textContent = card.emoji;

  const backElement = document.createElement('div');
  backElement.classList.add('card-back');

  frontElement.appendChild(emoji);

  li.append(frontElement, backElement);

  return li;
}


export function createMain(store) {
  const main = document.createElement('main');
  main.classList = 'main';

  const header = createHeader();
  const board = createBoard();

  const cards_list = store.cards.map(createCard);

  board.append(...cards_list);
  main.append(header, board);

  return main;
}


export default { createMain };