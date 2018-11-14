var angle = 0;    // 角度
var radius = 50;  // 半径

function setup() {
    createCanvas(640, 480);
    noStroke();
    background('orange');
}

function draw() {
    background('orange');
    x = sin(radians(angle)) * radius;
    y = cos(radians(angle)) * radius;

    // 横方向
    push();
    fill('blue');
    translate(mouseX, mouseY);
    ellipse(x, 0, 10, 10);
    pop();

    // 縦方向
    push();
    fill('green');
    translate(mouseX, mouseY);
    ellipse(0, y, 10, 10);
    pop();

    angle += 5;
}
