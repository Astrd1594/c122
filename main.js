var x = 0;
var y = 0;
var canvasx = 0;
var canvasy = 0;
var screen_width = 0;
var screen_height = 0;
var to_number = null;
var draw_apple = "";
var apple = 'apple.png';
var speak_data = null;
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function preload(){
    loadImage(x, y, apple);
}
function setup(){
    canvas = createCanvas(screen_width - 150, screen_height - 150);
    canvas.center();
    canvas.position(x, y);
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
}
function start() {
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}
recognition.onresult = function (event) {
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognized: " + content;
    to_number = Number(content);
    if(Number.isInteger(to_number)){
        document.getElementById("status").innerHTML = "Started drawing apple";
        draw_apple = "set";
    } else{
        document.getElementById("status").innerHTML = "Please say a number";
    }
}
function setup() {
    canvas = createCanvas(800, 600);
    canvas.center();
}
function draw() {
    if (draw_apple == "set") {
        document.getElementById("status").innerHTML = to_number + " Apples drawn";
        draw_apple = "";
    }
}
function speak() {
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    speak_data = "";
}