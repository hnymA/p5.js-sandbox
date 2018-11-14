function setup() {
    createCanvas(640, 480);
    noStroke();
    fill(255);
}

function draw() {
    background(0);

    // グリッドの大きさ
    const step = 20;

    for (let x = 0; x <= width; x += step) {
        for (let y = 0; y <= height; y += step) {

            // 各点とポインタとの距離
            const d = dist(x, y, mouseX, mouseY);
            const r = d / 10;

            // 半径固定の場合（グリッド）
            ellipse(x, y, 10, 10);

            // 半径に距離を使った場合
            // ellipse(x, y, r, r);
        }
    }
}
