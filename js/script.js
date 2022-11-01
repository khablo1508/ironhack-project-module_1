/* 
================
Globals
================
*/
const popup = document.querySelector('.popup');
const winner = document.querySelector('.winner');
const gameStartButton = document.getElementById('game-start-button');
const restartButton = document.getElementById('restart-button');
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
restartButton.addEventListener('click', () => {
  popup.style.display = 'none';
  canvas.style.display = 'block';
  winner.style.display = 'none';
});

if (canvas.style.display === 'none') {
  winner.style.display = 'flex';
}
