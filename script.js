'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Replace repetitive code
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Event of right or wrong guess
document.querySelector('.check').addEventListener('click', function check() {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there's no input
  if (!guess) {
    /*   document.querySelector('.message').textContent = '❌ Escolha um número!'; */
    displayMessage('❌ Escolha um número!');

    // When player wins
  } else if (guess === secretNumber) {
    /*     document.querySelector('.message').textContent = '🎉 Número correto!'; */
    displayMessage('🎉 Número correto!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    // Chek highest score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score > 1) {
      /*       document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Muito alto!' : '📉 Muito baixo!'; */
      displayMessage(
        guess > secretNumber ? '📈 Muito alto!' : '📉 Muito baixo!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      /* document.querySelector('.message').textContent = '💥 Game over!'; */
      displayMessage('💥 Game over!');
    }
    // When guess is too high
  } /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Muito alto!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 Game over!';
    }

    // When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Muito baixo!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = '💥 Game over!';
    }
  } */
});

// Press the again button to restart the game
document.querySelector('.again').addEventListener('click', function again() {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  /*   document.querySelector('.message').textContent = 'Tente advinhar o número...'; */
  displayMessage('Tente advinhar o número...');
});
