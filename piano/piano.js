const container = document.querySelector(".container");
console.log(container);
var lastOne;
var keyArray = document.querySelectorAll(".key");

container.addEventListener("click", (e) => {

    // console.log(e.target.attributes[1].nodeValue);
    for (var i = 0; i < keyArray.length; i++) {
        keyArray[i].classList.remove("grey");
    }
    const audio = document.querySelector(`audio[data-key="${e.target.attributes[1].nodeValue}"]`)
    const keyboard = document.querySelector(`div[data-key="${e.target.attributes[1].nodeValue}"]`)
    if (!audio) return;
    keyboard.classList.add("grey");
    audio.currentTime = 0;
    audio.play();



})
var soundArray = document.querySelectorAll("audio");
console.log(soundArray);
window.addEventListener("keydown", (e) => {
    for (var i = 0; i < keyArray.length; i++) {
        keyArray[i].classList.remove("grey");
    }
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const keyboard = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if (!audio) return;
    keyboard.classList.add("grey");
    audio.currentTime = 0;
    audio.play();
})

// var count = 1000;
// songArray = [soundArray[4], soundArray[2], soundArray[2], soundArray[3], soundArray[1], soundArray[1], soundArray[0], soundArray[1], soundArray[2], soundArray[3], soundArray[4], soundArray[4], soundArray[4]];
// for (let i = 0; i < songArray.length; i++) {
//     setTimeout(function () {
//         songArray[i].currentTime = 0;
//         songArray[i].play();
//     }, count += 200);
// }