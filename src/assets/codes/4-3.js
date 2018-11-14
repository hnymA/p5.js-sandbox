function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(255);

    if(keyIsPressed === true) {   // 何らかのキーが押されていたら
        fill('pink');             // 塗りをピンクに
    } else {
        fill('white');            // そうでなければ塗りを白に
    }

    ellipse(mouseX, mouseY, 80, 80);
}
