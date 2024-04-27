// Generate Dice Number
var dice = document.getElementById("dice");
var win_loss = document.getElementById("win_loss");
var dice_input = document.getElementById("dice_input");

// function generateDiceNumber() {
//   var userValue = dice_input.value;
//   if (userValue < 7) {
//     var diceNumber = Math.ceil(Math.random() * 6);
//     dice.innerText = diceNumber;
//     if (userValue == diceNumber) {
//       win_loss.innerText = "You win";
//       win_loss.style.color = "Green";
//     } else {
//       win_loss.innerText = "You loss, Try Again";
//       win_loss.style.color = "red";
//     }
//   } else {
//     win_loss.innerText = "Number sahi daalo!";
//     win_loss.style.color = "orange";
//   }
// }


        var dice = document.getElementById("dice");
        var win_loss = document.getElementById("win_loss");
        var input_dice = document.getElementById("input_dice");
        var turnsLeftDisplay = document.getElementById("turns_left");
        var correctAttemptsDisplay = document.getElementById("correct_attempts");
        var wrongAttemptsDisplay = document.getElementById("wrong_attempts");

        var attempts = 0;
        var correctAnswers = 0;
        var turnsLeft = 10;

        function updateUI() {
            turnsLeftDisplay.innerText = "Turns left: " + turnsLeft;
            correctAttemptsDisplay.innerText = "Correct attempts: " + correctAnswers;
            wrongAttemptsDisplay.innerText = "Wrong attempts: " + (attempts - correctAnswers);
        }

        function gendicenumber() {
            if (attempts < 10 && correctAnswers < 3) {
                var khiladiValue = input_dice.value;
                if (khiladiValue >= 1 && khiladiValue <= 6) {
                    var dicenumber = Math.ceil(Math.random() * 6);
                    dice.innerText = dicenumber;
                    attempts++;
                    turnsLeft--;
                    updateUI();
                    if (khiladiValue == dicenumber) {
                        correctAnswers++;
                        win_loss.innerText = "You win";
                        win_loss.className = "firework";
                        win_loss.style.color = "Green";
                    } else {
                        win_loss.innerText = "Bad Luck";
                        win_loss.style.color = "orange";
                    }
                } else {
                    win_loss.innerText = "Please enter a number between 1 and 6";
                    win_loss.style.color = "red";
                }
            }
            
            if (correctAnswers >= 3) {
                win_loss.innerText = "Congratulations! You've won!";
                win_loss.style.color = "Green";
            } else if (attempts >= 10) {
                win_loss.innerText = "Sorry, you've lost!";
                win_loss.style.color = "Red";
            }
            input_dice.value = "";
        }
