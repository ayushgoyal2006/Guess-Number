let random = parseInt(Math.random()*100 + 1);
const submit = document.querySelector("#submit");
const userinput = document.querySelector("#guessField");
const guessslot = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const loworhigh = document.querySelector(".loworhigh")
const StartOver = document.querySelector(".result")

const p = document.createElement('p');

let prevguess = []
let numGuess = 5
let playGame = true

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userinput.value);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a Valid number!!!");
    }else if(guess<1){
        alert("Please enter a number greater than 1");
    }else if(guess > 100){
        alert("Please enter a number less than 100");
    }else{
        prevguess.push(guess);
        if(numGuess<=1){
            // numGuess--;
            displayguess(guess);
            displaymessage(`Game Over.<br> Random number was ${random}`);
            endgame();
        }else{
            displayguess(guess);
            checkGuess(guess);
        }
    }

}
function checkGuess(guess){
    if(guess === random){
        displaymessage(`Your guess is right.`);
        endgame();
    }else if(guess < random){
        displaymessage(`Number is TOO LOW`)
    }else if(guess > random){
        displaymessage(`Number is TOO HIGH`);
    }

}
function displayguess(guess){
    userinput.value = ''
    numGuess--;
    guessslot.innerHTML += `${guess}  `
    lastResult.innerHTML = `${numGuess}`
    
}
function displaymessage(message){
    loworhigh.innerHTML = `${message}`
}
function endgame(){
    userinput.value = ''
    userinput.setAttribute('disabled' , '')
    p.classList.add('button')
    p.innerHTML = `<button id='newGame'> Start New Game</button>`
    StartOver.appendChild(p)
    playGame = false
    newgame();

}
function newgame(){
    const newGame = document.querySelector('#newGame')
    newGame.addEventListener('click' , function(e){
        random = parseInt(Math.random()*100 + 1);
        prevguess = []
        numGuess = 5
        guessslot.innerHTML = ''
        lastResult.innerHTML = `${numGuess}`
        userinput.removeAttribute('disabled')
        StartOver.removeChild(p);
        playGame = true
    })
}