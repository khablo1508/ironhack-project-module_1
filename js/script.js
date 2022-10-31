/* 
================
Globals
================
*/
const popup = document.querySelector('.popup');
const gameStartButton = document.getElementById('game-start-button');
const canvas = document.getElementById('canvas');

/* 
================
Event Listeners
================
*/
gameStartButton.addEventListener('click', () => {
  popup.style.display = 'none';
  canvas.style.display = 'block';
});
