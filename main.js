x = 0;
y = 0;
drawrect= "";
drawcircle = "";
var speechrecognition = window.webkitSpeechRecognition;
var recogniton = new speechrecognition();
function start() {
    document.getElementById("status").innerHTML="System is listening, please speak.";
    recogniton.start();
}
recogniton.onresult= function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognised as  "+ content;
    if (content == "circle") {
        x= Math.floor(Math.random() * 900);
        y= Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML="Started drawing circle";
        drawcircle="set";
    }
    if (content == "rectangle") {
        x= Math.floor(Math.random() * 900);
        y= Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML="Started drawing rectangle";
        drawrect="set";
    }
}
function setup() {
    canvas=createCanvas(900, 600);
}
function draw() {
    if (drawcircle=="set") {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML="Circle is drawn.";
        drawcircle="";
    }
    if (drawrect=="set") {
        rect(x, y, 70, 50);
        document.getElementById("status").innerHTML="Rectangle is drawn.";
        drawrect="";
    }
}