let mobilenet;


let penguin;

function modelReady() {
    console.log('Model is ready !!!');
    mobilenet.predict(penguin, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        let label = results[0].label;
        let proba = results[0].confidence;
        fill(0);
        textSize(64);
        text(label,10,height - 320);
        createP(label);
        createP(proba);
    }
}

function imageReady() {
    image(penguin, 0, 0, width, height);
    console.log('image is ready!!!');
}

function setup() {
    createCanvas(400, 400);
    penguin = createImg('images/penguin.jpg', imageReady);
    penguin.hide();
    background(0);
    mobilenet = ml5.imageClassifier('MobileNet', modelReady);

}