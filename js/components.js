function createHeader() {

  const header = document.createElement('div');
  header.className = 'header';

  const title = document.createElement('h1');
  title.className = "title";
  title.textContent = 'Memory Game';

  const reset_btn = document.createElement('button');
  reset_btn.className = 'btn reset-btn';
  reset_btn.type = 'button'
  reset_btn.id = 'reset'
  reset_btn.textContent = 'New Game';

  const score_btn = document.createElement('button');
  score_btn.className = 'btn score-btn';
  score_btn.type = 'button'
  score_btn.textContent = 'Top Score';
  score_btn.id = 'score';

  const button_container = document.createElement('div');
  button_container.className = 'header__button__container';

  button_container.append(reset_btn, score_btn);

  const count_container = document.createElement('div');
  count_container.className = 'header__count__container';

  const steps_title = document.createElement('p');
  steps_title.className = 'steps--title'
  steps_title.textContent = 'Steps:'

  const steps = document.createElement('span');
  steps.className = 'u-text-m steps'
  steps.id = 'steps'
  steps.textContent = 0;

  steps_title.append(steps);


  const score_title = document.createElement('p');
  score_title.className = 'count--title';
  score_title.textContent = '/ 8';

  const count = document.createElement('span');
  count.className = 'count'
  count.id = 'steps'
  count.textContent = '0';

  score_title.prepend(count);

  count_container.append(steps_title, score_title);

  header.append(title, button_container, count_container);

  return header;
}

function createBoard() {
  const board = document.createElement('div');
  board.className = 'board';

  return board;
}

export function createMain() {
  const main = document.createElement('main');
  main.classList = 'main';

  const header = createHeader();
  const board = createBoard();

  main.append(header, board);

  return main;
}


export default { createMain };