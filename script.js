function playSound() {
    const audio = new Audio("winning.mp3");
    audio.play();
}

document.getElementById("yes-button").addEventListener("click", playSound);