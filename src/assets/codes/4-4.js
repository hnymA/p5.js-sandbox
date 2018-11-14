var r = 300; // 円の半径

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(255);
    ellipse(mouseX, mouseY, r, r);
}

function keyPressed() {     // キーが押されるたびに呼び出される関数
    r -= 10;                // 半径を小くする
    return;
}
