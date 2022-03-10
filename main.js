video = "";
status = "";

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
}

function preload() {
    video = createVideo('video.mp4');
    video.hide();

}

function draw() {
    image(video,0,0,380,380);
}

function start() {
    detect = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status = detecting object";
    detect = "input";
}
function modelLoaded() {
    console.log("modeloaded")
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}