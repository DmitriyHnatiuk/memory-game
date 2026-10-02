import { createMain } from "./js/components.js";
import { createModal, openModal } from './js/modal.js';

import { resetGame, store } from './js/game.js';

document.addEventListener("DOMContentLoaded", () => {
  const main = createMain(store);
  const modal = createModal();

  document.body.append(main, modal);


  const score_btn = document.getElementById('score');
  const reset_btn = document.getElementById('reset');

  score_btn.addEventListener('click', openModal);
  reset_btn.addEventListener('click', resetGame);
})