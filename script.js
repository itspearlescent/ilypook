function playSound() {
    const audio = new Audio("winning.mp3");
    audio.play();
}

document.getElementById("yes-button").addEventListener("click", function() {
    playSound();

    document.getElementById("yes-button").style.display = "none";
    document.getElementById("no-button").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("bear").style.display = "none";

    document.getElementById("hearts").style.display = "block";
    document.getElementById("answer").style.display = "block";
});
