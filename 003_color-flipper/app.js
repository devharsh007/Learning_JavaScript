const colors = ["orange", "blue", "ghostwhite", "green", "red", "rgba(133,122,200)", "#f15025", "aqua"];
btn = document.querySelector("#btn")
appliedColor = document.querySelector("#color");
var randomNum;
var randomColor;

function randomColors() {
    randomColor = colors[Math.floor(Math.random() * colors.length)]
    console.log(randomColor)
}


btn.addEventListener("click", function () {
    randomColors();
    document.body.style.backgroundColor = randomColor;
    appliedColor.innerHTML = randomColor;
});










