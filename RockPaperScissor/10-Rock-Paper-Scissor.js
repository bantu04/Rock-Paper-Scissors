
  const score ={
    Wins: 0, 
    Losses: 0, 
    Ties:0
  };

  scoreUpdate();
  
  function loadScore(){
    let storeScore = JSON.parse(localStorage.getItem('score'));
    if(storeScore){
      score.Wins = storeScore.Wins;
      score.Losses = storeScore.Losses;
      score.Ties = storeScore.Ties;
    }
  }
  loadScore();

  /* ------------------------------------------------- */
  function pickMove(){
    const randomNumber = Math.random();

    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
      computerMove = 'rock';
    } 
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
      computerMove = 'paper';
    }
    else if(randomNumber >=2/3 && randomNumber < 1){
      computerMove ='scissors';
    }
    return computerMove;
  }
  
  
  /* ------------------------------------------------- */
  function playGame(playerMove){

    const computerMove = pickMove();
    let result = '';

    if(playerMove === 'scissors'){
      if(computerMove === 'rock'){
      result = 'You Loose';
      }
      else if(computerMove === 'paper'){
        result = 'You Win';
      }
      else if(computerMove === 'scissors'){
        result = 'Tie';
      }
    }
    /* ------------------------------------------------- */
    else if(playerMove === 'paper'){
      if(computerMove === 'rock'){
        result = 'You Win';
      }
      else if(computerMove === 'paper'){
        result = 'Tie';
      }
      else if(computerMove === 'scissors'){
        result = 'You Loose';
      }
    }
    /* ------------------------------------------------- */
    else if(playerMove === 'rock'){
      if(computerMove === 'rock'){
        result = 'Tie';
      }
      else if(computerMove === 'paper'){
        result = 'You Loose';
      }
      else if(computerMove === 'scissors'){
        result = 'You Win';
      }
    }

    if(result === 'You Win'){
      score.Wins += 1;

    }else if(result === 'You Loose'){
      score.Losses += 1;

    }else if(result === 'Tie'){
      score.Ties += 1;
    }

    function saveScore(){
      localStorage.setItem('score', JSON.stringify(score));
    }
    saveScore();

    scoreUpdate();

    document.querySelector('.js-result').innerHTML = `${result}`;

    document.querySelector('.js-move').innerHTML = `You picked <img src="Images/${playerMove}-emoji.png" class="move-icon">
    computer picked <img src="Images/${computerMove}-emoji.png" class="move-icon">`;          

  }
  /* ------------------------------------------------- */
  function reset(){
    score.Wins = 0,
    score.Losses = 0,
    score.Ties = 0
    
    localStorage.removeItem('score');
    scoreUpdate();

  }

  function scoreUpdate(){
      document.querySelector('.js-score').innerHTML = ` Wins: ${score.Wins}, Loses: ${score.Losses}, Tie: ${score.Ties}`;
  }