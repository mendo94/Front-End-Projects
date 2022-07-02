'use strict';


// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = '🎊 Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess, typeof guess);


  // Runs if there is not an input
  if (!guess) {
    displayMessage('🚫 No Number!');
    // document.querySelector('.message').textContent = '🚫 No Number!';

  // Runs if player wins
  } else if (guess === secretNumber) {
    displayMessage("🎊 Correct Number!");
    // document.querySelector('.message').textContent = '🎊 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = 'rgb(28, 213, 47)';
    document.querySelector('.number').style.width = '30 rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When the guess is wrong
  } else if (guess !== secretNumber) {
      if (score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📈 Too Low!';
        displayMessage(guess > secretNumber ? '📈 Too High' : '📈 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage("💥 You lost the game!")
        // document.querySelector('.message').textContent = '💥 You lost the game!';
        document.querySelector('.score').textContent = 0;
      }
    }
    // Runs if guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High';
  //     score--;
  //     document.querySelector('.score').textContent =  score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     score--;
  //   }

  //   // Runs if guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too Low!';
  //     score--;
  //     document.querySelector('.score').textContent =  score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //     score--;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?'
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15 rem';
});