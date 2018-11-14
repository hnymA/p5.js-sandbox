function setup() {
    createCanvas(640, 480);
    background(255);

    // 半透明な線を使用する
    stroke(0, 0, 0, 30);
}

function draw() {
    const radius = 200;

    push();
    // 図形を中央に
    translate(width/2, height/2);

    // 角度をランダムに決める
    var angle1 = random(0, 2 * PI);

    // 決めた角度に対する円周上の点を探す
    var xpos1 = radius * cos(angle1);
    var ypos1 = radius * sin(angle1);

    // 同様にもう一点
    var angle2 = random(0, 2 * PI);
    var xpos2 = radius * cos(angle2);
    var ypos2 = radius * sin(angle2);

    // 決めた２点の間で線を引く
    line(xpos1, ypos1, xpos2, ypos2);
    pop();
}
