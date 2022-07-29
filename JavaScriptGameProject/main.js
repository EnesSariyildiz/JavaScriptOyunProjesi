let character = document.getElementById("character");
let block = document.getElementById("block");
function jump() {
    character.classList.add("animate");
    setTimeout(Function(){
        character.classList.remove("animate")
    }, 500);
}