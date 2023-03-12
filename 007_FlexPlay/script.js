const container = document.querySelector('.container');
const direction = document.querySelector('#selection');
const JustifyContent = document.querySelector('#jc')

let JC = "" ;
let flexDir = ""; 
direction.addEventListener("change", function () {
    flexDir = direction.value;
    console.log(flexDir);
    container.style.flexDirection = flexDir;
    if (flexDir == "column" || flexDir == "column-reverse") {
        container.style.margin = "0 auto"
        container.style.width = "max-content"
        container.style.height = "150vh";
    } else if(flexDir == "row" || flexDir == "row-reverse"){
        container.style.margin = "imherit"
        container.style.width = "inherit"
        container.style.height = "inherit";
    }
});

JustifyContent.addEventListener("change", function () {
    JC = JustifyContent.value;
    container.style.justifyContent = JC;
    console.log(JC);
})