var angle = 0;    // 角度
var radius = 50;  // 半径

function setup() {
    createCanvas(640, 480);
    noStroke();
    background('orange');
}

function draw() {
    push();
    translate(width/2, height/2);     // 円の中心を画面中央に
    x = sin(radians(angle)) * radius;
    y = cos(radians(angle)) * radius;
    ellipse(x, y, 10, 10);
    pop();

    angle++;
}
