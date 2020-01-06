let mobilenet;


let video;
let label = ' ';

function modelReady() {
    console.log('Model is ready !!!');
    mobilenet.predict(gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
//        console.log(results);
        label = results[0].label;
        mobilenet.predict(gotResult);

    }
}

//function imageReady() {
//    image(penguin, 0, 0, width, height);
//    console.log('image is ready!!!');
//}

function setup() {
    createCanvas(640, 550);
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
    background(0);
    image(video, 0, 0);
    fill(255);
    textSize(64);
    text(label, 10, height - 20);
}
