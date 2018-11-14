var r = 80; // 円の半径

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(255);
    ellipse(mouseX, mouseY, r, r);
}

function mousePressed() { // ボタンが押されるたびに呼び出される関数
    r += 10;                // 半径を大きくする
    return;
}
