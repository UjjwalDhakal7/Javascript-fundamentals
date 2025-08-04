'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number !';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let defaultScore = 20;
let highscore = 0;

// wrote function to display message as it had repitition in multiple places.
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// Resetting the game to initial !!
document.querySelector('.again').addEventListener('click', function () {
  const reset = document.querySelector('.again');

  if (reset) {
    defaultScore = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = defaultScore;
    document.querySelector('.guess').value = '';
  }
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Condition = No Input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number !';
    displayMessage('No Number !');

    // Condition = player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number !');
    document.querySelector('.number').textContent = secretNumber;

    // Change background color to green and increase width when user guess is correct !!
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';

    // Record High Score
    if (defaultScore > highscore) {
      highscore = defaultScore;
      console.log(highscore);
      document.querySelector('.highscore').textContent = highscore;
    }

    // Condition guess is wrong i.e. too high
    // } else if (guess > secretNumber) {
    //   if (defaultScore > 1) {
    //     // Change background color to yellow when guess is wrong !!
    //     document.querySelector('body').style.backgroundColor = '#80720e';
    //     document.querySelector('.message').textContent = 'Too High !';
    //     defaultScore--;
    //     document.querySelector('.score').textContent = defaultScore;
    //   } else {
    //     // Change background color to red when user loses !!
    //     document.querySelector('body').style.backgroundColor = 'red';
    //     document.querySelector('.message').textContent = 'You Lost !!';
    //     document.querySelector('.score').textContent = 0;
    //   }

    //   // Condition guess is wrong i.e. too low
    // } else if (guess < secretNumber) {
    //   if (defaultScore > 1) {
    //     // Change background color to yellow when guess is wrong !!
    //     document.querySelector('body').style.backgroundColor = '#80720e';
    //     document.querySelector('.message').textContent = 'Too Low !';
    //     defaultScore--;
    //     document.querySelector('.score').textContent = defaultScore;
    //   } else {
    //     // Change background color to red when user loses !!
    //     document.querySelector('body').style.backgroundColor = 'red';
    //     document.querySelector('.message').textContent = 'You Lost !!';
    //     document.querySelector('.score').textContent = 0;
    //   }
    // }

    // Condition when guess is wrong. Refactored code from above condition !!
  } else if (guess !== secretNumber) {
    if (defaultScore > 1) {
      // Change background color to yellow when guess is wrong !!
      document.querySelector('body').style.backgroundColor = '#80720e';
      displayMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');
      defaultScore--;
      document.querySelector('.score').textContent = defaultScore;
    } else {
      // Change background color to red when user loses !!
      document.querySelector('body').style.backgroundColor = 'red';
      displayMessage('You Lost !!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
