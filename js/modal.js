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

  const btn_close = document.createElement('button');
  btn_close.className = 'btn btn-close';
  btn_close.type = 'button';
  btn_close.id = 'close-modal';
  btn_close.textContent = 'Close';

  const modal_content = document.createElement('div');
  modal_content.className = 'modal__content';
  modal_content.id = 'modal-content';


  modal.append(modal_content, btn_close);

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
  const modal_bg = document.getElementById('modal-bg');

  modal_container ?
    modal_container.classList.remove('is-hidden') :
    console.warn(' modal_container  not found!');

  document.documentElement.style.overflow = 'hidden';
  window.addEventListener('keydown', handleEsc);

  modal_bg.addEventListener('click', closeModal);
  close_modal.addEventListener('click', closeModal);
};

function createScoreList(data) {
  const score_list = document.createElement('ul');
  score_list.className = 'score__list';

  const items = data.map(item => ({...document.createElement('li'),className :'score--item',textContent:item}));

  score_list.append(items);
  return score_list;
}


export function renderScoreModal() {
  const modal_container = document.getElementById('modal-container');
  const storage_list = window.localStorage.getItem("score_list");

  const list = createScoreList(storage_list);


}