// 四角形を動かすための変数を定義
var x = 100;

function setup() {
    createCanvas(640, 480);

    // 背景を黒で塗りつぶす
    background(0);
}

function draw() {
    rect(x, x, 150, 150);

    // xの値を繰り返し増やしていく
    x += 1;
}
