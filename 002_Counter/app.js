let incBtn = document.querySelector(".inc");
let decBtn = document.querySelector(".dec");
let rstBtn = document.querySelector(".rst");
let output = document.querySelector("#value")
// I am doing it by making a addEventListener for every button as it is not the best way to make it. but for now i only have this idea.

incBtn.addEventListener("click", () => {
    output.innerHTML = parseInt(output.innerHTML) + 1;
})      //I have to mae the output innerhtml as Int then its working
decBtn.addEventListener("click", () => {
    output.innerHTML = output.innerHTML - 1;
})      // It is working fyn, IDK why it is taking the value already as number. maybe because string doesnt have the subtract as they have ADD.  
rstBtn.addEventListener("click", () => {
    output.innerHTML = 0;
})      // This too seems fyn


// OI have done this using simple way. May be too simple but not the best yet.

