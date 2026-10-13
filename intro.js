const intro = document.getElementById("intro");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {

    intro.classList.add("hide");

    setTimeout(function() {
        window.location.href = "../bando/index.html";
    }, 2200);

});