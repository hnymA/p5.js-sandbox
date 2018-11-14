var squareButton;
var ellipseButton;

var sizeOfSquare;
var sizeOfEllipse;

var isPushedSquare = false;
var isPushedEllipse = false;

function setup() {
    createCanvas(640, 480);

    squareButton = createButton('□');
    ellipseButton = createButton('○');

    squareButton.position(width/3, height/2);
    squareButton.mousePressed(createSquare);

    ellipseButton.position((width/3) * 2, height/2);
    ellipseButton.mousePressed(createEllipse);

    ellipseMode(CENTER);
    rectMode(CENTER);

    noFill();
    stroke(255);
}

function draw() {
    background(0);

    if(isPushedSquare) {
        rect(width/3, height/2, sizeOfSquare, sizeOfSquare);
    }

    if(isPushedEllipse) {
        ellipse((width/3) * 2, height/2, sizeOfEllipse);
    }

    sizeOfSquare += 5;
    sizeOfEllipse += 5;
}

function createSquare() {
    sizeOfSquare = 0;
    isPushedSquare = true;
}

function createEllipse() {
    sizeOfEllipse = 0;
    isPushedEllipse = true;
}
