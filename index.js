import { createMain } from "./js/components.js";
import { createModal, openScoreModal, openWinModal } from './js/modal.js';

import { onBoardClick, resetGame, store } from './js/game.js';

document.addEventListener("DOMContentLoaded", () => {
  const main = createMain(store);
  const modal = createModal();

  document.body.append(main, modal);

  const score_btn = document.getElementById('score');
  const reset_btn = document.getElementById('reset');
  const board = document.getElementById('board');

  board.addEventListener('click', onBoardClick);
  score_btn.addEventListener('click', openScoreModal);
  reset_btn.addEventListener('click', resetGame);

  document.addEventListener('gameWin', () => openWinModal(store.score));
})