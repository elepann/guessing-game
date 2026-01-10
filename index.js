#!/usr/bin/env node 

const prompt = require('prompt-sync')();

function randint(min, max){
    return Math.floor(Math.random() * (max - min + 1));
}

while (true){
    const welcomingMessege = 'Welcome to the Number Guessing Game!\nIm thingking of a number between 1 and 100.\nYou have 5 change to guess the correct number.\n\nPlease select the difficulty level:\n1. Easy (10 Changes)\n2. Medium (5 Changes)\n3. Hard (3 Changes)\n\n';

    console.log(welcomingMessege);

    const choiceMenu = prompt('Enter Your Choice:  ');
    let level;
    let usedAttemps = 0;
    let totalAttemps = 0;
    if(Number(choiceMenu) === 1){
        level = 'Easy';
        totalAttemps = 10;
    }else if(Number(choiceMenu) === 2){
        level = "Medium";
        totalAttemps = 5
    }else if(Number(choiceMenu) === 3){
        level = "Hard";
        totalAttemps = 3
    }else {
        console.log("enter the available choices");
    };

    console.log(`\nGreat! You Have Selected the ${level} Difficulty Level.\nLets Start the Game.\n`);

    const angka = randint(1, 100); //permisalan: angka 50
    let guess = Number(prompt('Enter Your Guess:  ')); //permisalan tebakan 90

    while(true){
        if(guess > angka){
            console.log(`Incorrect! the number is less than ${guess}`);
            guess = Number(prompt("\nEnter Your Guess:  "))
            //perlu di ganti...;
            usedAttemps += 1;
            if(usedAttemps === (totalAttemps)){
                console.log('failed, you ran out of attemps...');
                process.exit();
            }
        }else if(guess < angka){
            console.log(`Incorrect!! the number is greater than ${guess}`);
            guess = Number(prompt("\nEnter Your Guess:  "))
            usedAttemps += 1;
            if(usedAttemps === (totalAttemps)){
                console.log("You Ran Out of Attemps.");
                process.exit();
            }
        }else {
            console.log(`congrats, menang\nused ${usedAttemps} attemps`);
            process.exit();
        }
    }
}
