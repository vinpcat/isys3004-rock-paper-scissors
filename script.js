let wins = 0;
let losses = 0;
let draws = 0;

function SyntaxError(TheMessage) {
    let msg = new SpeechSynthesisUtterance(TheMessage);
    speechSynthesis.speak(msg);
}

function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
        draws++;
    }
    if (user === 'paper') {
        result = "win";
        wins++;
    }
    if (user === 'scissors') {
        result = "lose";
        losses++;
    }
    alert("Computer chose rock, you " + result + "!" + 
        "\n\n" + wins + " wins" + 
        "\n" + losses + " losses" +
        "\n" + draws + " draws");
    alert(myMessage); // What is myMessage?
    say(Message); // What is Message?
}
