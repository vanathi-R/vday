document.getElementById("yesButton").addEventListener("click", function () {
    document.getElementById("responseSection").innerHTML = "<p>Yay! I’m so happy! ❤️ Let’s make this official! 😘</p>";

    // Add a little animation effect to the Yes button
    this.style.transform = "scale(1.3)";
    this.style.transition = "0.3s ease-in-out";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 300);
});

document.getElementById("noButton").addEventListener("mouseover", function () {
    // Move the "No" button to a random position
    let x = Math.random() * (window.innerWidth - this.clientWidth);
    let y = Math.random() * (window.innerHeight - this.clientHeight);

    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById("noButton").addEventListener("click", function () {
    document.getElementById("responseSection").innerHTML = "<p>Oh no... 😢 Maybe someday... <3</p>";
});
