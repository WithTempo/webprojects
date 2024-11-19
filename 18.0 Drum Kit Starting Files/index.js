class Drum {
    constructor(sound, image) {
        this.sound = "sounds/" + sound + ".mp3";
        this.image = "images/" + image + ".png";
        this.audio = new Audio(this.sound);
        this.play = function () {
            this.audio.play();
        };
    }
}
var numOfDrums = document.querySelectorAll(".drum").length;
for(var x = 0; x < numOfDrums; x++){
    var letCont = document.querySelectorAll(".drum")[x];
    var letter = letCont.textContent;
    switch(letter){
        case "w":
            var w = new Drum("crash", "crash");
            break;
        case "a":
            var a = new Drum("kick-bass", "kick");
            break;
        case "s":
            var s = new Drum("snare", "snare");
            break;
        case "d":
            var d = new Drum("tom-1", "tom1");
            break;
        case "j":
            var j = new Drum("tom-2", "tom2");
            break;
        case "k":
            var k = new Drum("tom-3", "tom3");
            break;
        case "l":
            var l = new Drum("tom-4", "tom4");
            break;
    }
    
}

document.addEventListener("keydown", function(event){
    //global window object references variables by their strings
    //don't do this anymore, use objects or maps to avoid conflicts and maintain readability and scalability
    window[event.key].play();
})