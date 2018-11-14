function setup() {
    createCanvas(640, 480);
    noStroke();
    fill(255);  // 円は白で塗りつぶす
}

function draw() {
    // アルファ値は10
    // 背景を徐々に塗り替える
    background(0, 10);
    ellipse(mouseX, mouseY, 20, 20);
}
