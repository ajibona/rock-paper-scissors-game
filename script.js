const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const resetBtn = document.getElementById('reset')
const pElement = document.querySelector('.score')
const resultElement = document.querySelector('.result')
const moveElement = document.querySelector('.move')


rockBtn.addEventListener('click', function(){
  playGame('rock')
})

paperBtn.addEventListener('click', function(){
  playGame('paper')
})

scissorsBtn.addEventListener('click', function(){
  playGame('scissors')
})

resetBtn.addEventListener('click', function(){
  score.wins = 0
  score.losses = 0
  score.tie = 0

  pElement.textContent = `Wins: ${score.wins}  Lose: ${score.losses}  Tie: ${score.tie}`;
})

const score = JSON.parse(localStorage.getItem('score'))
/*
{
  wins: 0,
  losses: 0,
  tie: 0  
}
  */

console.log(score)


function computerPlay(){
  const randomNumber = Math.random();

  let computerMove;

  if(randomNumber >= 0 && randomNumber <= 1/3){
      computerMove = 'rock'
  }else if(randomNumber >= 1/3 && randomNumber <= 2/3){
      computerMove = 'paper'
  }else if(randomNumber >= 2/3 && randomNumber <= 1){
      computerMove = 'scissors'
  }

  return computerMove;
}

console.log(computerPlay())

function playGame(playerMove){
  const computerMovement = computerPlay();

  let result;

  if(playerMove === 'rock'){
    if(computerMovement === 'rock'){
      result = 'Tie.'
    }else if(computerMovement === 'scissors'){
      result = 'You win.'
    }else if(computerMovement === 'paper'){
      result = 'You lose.'
    }

  }else if(playerMove === 'scissors'){
    if(computerMovement === 'rock'){
      result = 'You lose.'
    }else if(computerMovement === 'scissors'){
      result = 'Tie.'
    }else if(computerMovement === 'paper'){
      result = 'You win.'
    }
  }

  else if(playerMove === 'paper'){
    if(computerMovement === 'rock'){
      result = 'You win.'
    }else if(computerMovement === 'scissors'){
      result = 'You lose.'
    }else if(computerMovement === 'paper'){
      result = 'Tie.'
    }
  }

  if(result === 'You win.'){
    score.wins += 1
  }else if(result === 'You lose.'){
    score.losses += 1
  }else if(result === 'Tie.'){
    score.tie += 1
  }

 

  localStorage.setItem('score', JSON.stringify(score))

   resultElement.innerHTML = `${result}`
  moveElement.innerHTML = `You <img src="images/${playerMove}-emoji.png" alt=""  class="image-icon"> : <img src="images/${computerMovement}-emoji.png" alt=""  class="image-icon"> Computer`

  pElement.innerHTML = `Wins: ${score.wins}  Lose: ${score.losses}  Tie: ${score.tie}`;

  console.log(`You pick :${playerMove} and Computer picked :${computerMovement} the result is :${result}
Wins: ${score.wins}  Lose: ${score.losses}  Tie: ${score.tie}` );
}

pElement.textContent = `Wins: ${score.wins}  Lose: ${score.losses}  Tie: ${score.tie}`;


