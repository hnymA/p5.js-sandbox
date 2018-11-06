function setup() {
    createCanvas(640, 480);
}

function draw() {
    // widthとheightで描画領域の情報を取得
    // width: 描画領域の幅
    // height: 描画領域の高さ

    background(0);

    // 描画領域の中央で円を描画
    ellipse(width/2, height/2, 80, 80);
}
