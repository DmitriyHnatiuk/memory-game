export function createModal() {

  const modal_container = document.createElement('section');
  modal_container.className = 'modal__container is-hidden'
  modal_container.id = 'modal-container';

  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.id = 'modal';

  const modal_bg = document.createElement('span');
  modal_bg.textContent = '&nbsp;'
  modal_bg.className = 'modal__background'
  modal_bg.id = "modal-bg"

  const modal_buttons = document.createElement('div');
  modal_buttons.className = 'modal__buttons';
  modal_buttons.id = 'modal_buttons';

  const reset_btn = document.createElement('button');
  reset_btn.className = 'btn reset--btn is-hidden';
  reset_btn.type = 'button';
  reset_btn.id = 'new_game';
  reset_btn.textContent = 'New Game';

  const close_btn = document.createElement('button');
  close_btn.className = 'btn btn--close';
  close_btn.type = 'button';
  close_btn.id = 'close-modal';
  close_btn.textContent = 'Close';

  modal_buttons.append(reset_btn, close_btn)

  const modal_content = document.createElement('div');
  modal_content.className = 'modal__content';
  modal_content.id = 'modal-content';


  modal.append(modal_content, modal_buttons);

  modal_container.append(modal_bg, modal)

  return modal_container;
}

const handleEsc = (e) => {
  if (e.key === 'Escape') closeModal();
};

function closeModal() {
  const modal_container = document.getElementById('modal-container');
  const modal_content = document.getElementById('modal-content');

  modal_container ?
    modal_container.classList.add('is-hidden') :
    console.warn(' modal_container  not found!');

  document.documentElement.style.overflow = '';
  window.removeEventListener('keydown', handleEsc);
  modal_content.replaceChildren();
}


export function openModal() {
  const modal_container = document.getElementById('modal-container');
  const close_modal = document.getElementById('close-modal');
  const new_game_btn = document.getElementById('new_game');
  const modal_bg = document.getElementById('modal-bg');

  modal_container ?
    modal_container.classList.remove('is-hidden') :
    console.warn(' modal_container  not found!');

  document.documentElement.style.overflow = 'hidden';
  window.addEventListener('keydown', handleEsc);

  modal_bg.addEventListener('click', closeModal);
  close_modal.addEventListener('click', closeModal);

  new_game_btn.addEventListener('click', () => {
    new_game_btn.classList.add('is-hidden');
    closeModal()
  })
};

const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('.');
  return new Date(year, month - 1, day);
};

function createScoreList(data) {
  const score_list = document.createElement('ul');
  score_list.className = 'u-text-m score__list';

  const sorted_list = data.sort((a, b) => {
    return (a.score !== b.score) ? a.score - b.score :
      parseDate(a.time) - parseDate(b.time);
  }).slice(0, 10);

  const items = sorted_list.map(item => {
    if (!item) return '';

    const li = document.createElement('li');
    li.className = 'score--item';
    li.textContent = item.score

    const span = document.createElement('span');
    span.className = 'score--time';
    span.textContent = item.time;

    li.appendChild(span);

    return li
  });

  score_list.append(...items);
  return score_list;
}

export function openScoreModal() {
  renderScoreModal();
  openModal();
}


export function renderScoreModal() {
  const modal_container = document.getElementById('modal-content');
  const storage_list = window.localStorage.getItem("score_list");
  const score_list = JSON.parse(storage_list);

  if (!score_list) {
    const text = document.createElement('p');
    text.className = 'u-text-m';
    text.textContent = 'No winners!';

    modal_container.append(text);

    return;
  }

  const score_list_title = document.createElement('h3');
  score_list_title.className = 'u-text-l score__list-title';
  score_list_title.textContent = 'Top 10'
  const list = createScoreList(score_list);

  modal_container.append(score_list_title, list);
}


function renderWinModal() {
  const modal_container = document.getElementById('modal-content');
  const count = document.getElementById('steps');

  const container = document.createElement('div');
  container.className = 'container__win';

  const title = document.createElement('h2');
  title.className = 'title__win';
  title.textContent = 'Win!!!..'

  const score = document.createElement('p');
  score.className = 'score__win';
  score.textContent = 'Score :'

  const span = document.createElement('span');
  span.className = 'span__win';
  span.textContent = count.textContent;

  score.appendChild(span);

  container.append(title, score);
  modal_container.append(container);
}

export function openWinModal(score) {
  const new_game_btn = document.getElementById('new_game');
  new_game_btn.classList.remove('is-hidden');

  renderWinModal(score);
  openModal();
}