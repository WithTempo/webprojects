/*button_array = [".w", ".a", ".s", ".d", ".j", ".k", ".l"];

function handleClick() {
    alert("I got clicked!");
}

button_array.forEach(x => {
    document.querySelector(x).addEventListener("click", handleClick)
});

*/

var numberOfDrumButtons = document.querySelectorAll(".drum").length; // = int 7

for (var i=0; i<numberOfDrumButtons; i++){ // i = 0-6
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML) {
            case 'w':
                var audio = new Audio("sounds/crash.mp3");
                audio.play();
            break;
            case 'a':
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
            break;
            case 's':
                var audio = new Audio("sounds/snare.mp3");
                audio.play();
            break;
            case 'd':
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
            break;
            case 'j':
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
            break;
            case 'k':
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
            break;
            case 'l':
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
            break;
        }
    })
}

function play_audio(key){
    var audio = new Audio("sounds/$key.mp3");
        audio.play();
}
