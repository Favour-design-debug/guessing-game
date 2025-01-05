'use strict';

// const randomNumber = Math.floor(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = randomNumber;
// console.log(document.querySelector('.number').textContent);

// let message = document.querySelector('.message');
// console.log(message);

// const checker = document.querySelector('.check');
// // function
// checker.addEventListener('click', function () {
//   const inputValue = Number(document.querySelector('.guess').value);
//   console.log(inputValue);

//   // conditionals
//   if (!inputValue) {
//     message.textContent = `⛔ No Number!`;
//   } else if (inputValue === randomNumber) {
//     message.textContent = `🎉 congratulations!`;
//     console.log(message.textContent);
//   }
// });

/* Quetions 
What is the game about? A guessing game.
How is the game played? 
Answer:
        put a number in the input(box) if it matches the random number 
        generated a message pops pop that u win if not a message that u 
        loss comes on.  And a number of tries are fixed that keeps decresing
        NB: A check box function is required to know if the user passed the 
        guessing game or not, along with other features trigerred like i.e
                -message pops
                -score reduces
                highscore BUG?


    lets start : manipulate the DOM and nest them in variables
                render them out using the text.content
                use the if else statement to set conditions on the 
                user values in the box
    
                */
/*
// getting random numbers for 1-20
const randomNumber = Math.floor(Math.random() * 20) + 1;
// manipulating the dom and equating to the random number

let message = document.querySelector('.message');
console.log(message);

let score = 20;
document.querySelector('.score').textContent = score;

const checker = document.querySelector('.check');
// Event listner
checker.addEventListener('click', function () {
  const inputValue = Number(document.querySelector('.guess').value);

  console.log(inputValue);

  if (!inputValue) {
    message.textContent = `No Number ⚠`;
  } else if (inputValue === randomNumber) {
    message.textContent = `🎉🍾 Congratulations!!`;

    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;
  } else if (inputValue > randomNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      message.textContent = `📈Too High!!`;
    } else {
      message.textContent = `sorry you lost the game`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (inputValue < randomNumber) {
    if (score > 1) {
      score = score - 1;
      document.querySelector('.score').textContent = score;
      message.textContent = `📉  Too low!!`;
    } else {
      message.textContent = `sorry you lost the game`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

const again = document.querySelector('.again');

again.addEventListener('click', function () {
  message = document.querySelector('.message').textContent;
});
*/

// manipulate the Dom for 'guess' and 'input' then compare to log a message.
// manipulate the Dom for 'message
// create a 'check function with an addeventlistner to list for clicks
// use th if else statment to set conditions for the game.
// set a score condtion that decrease as game is been played
//manipulate the Dom to set the width of the 'guess' box and style(bg-color) of the body
// manipulate the DOm for  the 'again' and set all values back to default.

//part 2 impport the input value to the addeventListenr to trigger the console

let randomNumber = Math.floor(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const checker = document.querySelector('.check');
checker.addEventListener('click', function () {
  let inputValue = Number(document.querySelector('.guess').value);

  if (!inputValue) {
    displayMessage(`Not a valid Number!⏹⛔`);
  } else if (inputValue === randomNumber) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('🍾🎉 congratulations! correct number');

    document.querySelector('.number').textContent = randomNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (inputValue !== randomNumber) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;

      displayMessage(
        inputValue > randomNumber ? `📈Too high!!` : ` Too low!!📉`
      );
    } else {
      displayMessage(`😭 No more points. Game over `);
    }
  }
});

const again = document.querySelector('.again');
again.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;

  displayMessage(`Start Guessing...`);
});
