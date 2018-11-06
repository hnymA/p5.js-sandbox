function setup() {
    createCanvas(640, 480);
}

function draw() {
    // 背景のクリア
    // 白で塗りつぶす
    background(255);

    // mouseXとmouseYでマウスの位置を取得
    // ellipseにより円を描画
    ellipse(mouseX, mouseY, 80, 80);
}
