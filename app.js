inputField = document.getElementById("inputField")
button = document.getElementById("guess")
random = document.getElementById("random")
textElement = document.getElementById("texty")
historye = document.getElementById("history")
haveGuessed = 0;
guessCount = 0;

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

guessValue = getRandomInt(1, 100)


random.addEventListener("click",function(){
    if (haveGuessed == 1){
        haveGuessed = 0;
    }
    guessCount = 0;

    guessValue = getRandomInt(1, 100)
}
)

button.addEventListener("click", function(){
    inputValue = inputField.value;
    guessCount = guessCount + 1;
    if(inputValue >= 1){
        if(inputValue <= 100){
            if(inputValue > guessValue){
                textElement.innerHTML = "Your guess was too high!";
            } else if(inputValue < guessValue){
                textElement.innerHTML = "Your guess was too low!";
            } else if (inputValue == guessValue){
                textElement.innerHTML = "Congratulations you've guessed the number within " + guessCount +" guesses! You can continiue by pressing 'Generate new number'!";
                haveGuessed = 1;

                document.historye.appendChild(latestHistory = document.createElement("li"));
                document.latestHistory.appendChild(historyText = document.createElement("p"));
                

                historyText.innerHTML = "The number here was " + guessValue + " and you guessed it, with " + guessCount + " guesses.";

                
            } else {
                textElement.innerHTML = "Something went wrong!";
            }
        }else{
            textElement.innerHTML = "Your number is not within the boundries of 1 and 100";
        }
    }else{
        textElement.innerHTML = "Your number is not within the boundries of 1 and 100";
    }
}
)

