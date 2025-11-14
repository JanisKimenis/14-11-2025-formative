inputField = document.getElementById("inputField")
button = document.getElementById("guess")
textElement = document.getElementById("texty")

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

guessValue = getRandomInt(1, 100)


button.addEventListener("click", function(){
    inputValue = inputField.value;
    if(inputValue >= 1){
        if(inputValue <= 100){
            if(inputValue > guessValue){
                textElement.innerHTML = "Your guess was too high!";
            } else if(inputValue < guessValue){
                textElement.innerHTML = "Your guess was too low!";
            } else if (inputValue == guessValue){
                textElement.innerHTML = "Congratulations you've guessed the number!";
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