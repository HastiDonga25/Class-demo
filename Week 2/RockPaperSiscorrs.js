const prompt = require('prompt');

// Start the prompt
prompt.start();

// Get user input
prompt.get(['userSelection'], function (err, result) {
    if (err) {
        console.error(err);
        return;
    }

    let userSelection = result.userSelection.toUpperCase();
    console.log(`User selected: ${userSelection}`);

    // Generate computer selection
    const computerSelection = Math.random();
    let computerChoice;

    if (computerSelection < 0.34) {
        computerChoice = 'PAPER';
    } else if (computerSelection <= 0.67) {
        computerChoice = 'SCISSORS';
    } else {
        computerChoice = 'ROCK';
    }

    console.log(`Computer selected: ${computerChoice}`);

    // Determine the winner
    if (userSelection === computerChoice) {
        console.log("It's a tie");
    } else if ((userSelection === 'ROCK' && computerChoice === 'SCISSORS') ||
               (userSelection === 'PAPER' && computerChoice === 'ROCK') ||
               (userSelection === 'SCISSORS' && computerChoice === 'PAPER')) {
        console.log("User Wins");
    } else {
        console.log("Computer Wins");
    }
});
