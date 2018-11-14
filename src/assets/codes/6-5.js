var angle = 0;
var radius = 50;
var button;   // 半径を変更するボタン

function setup() {
    createCanvas(640, 480);
    noStroke();
    background('orange');

    // ボタンを作成
    button = createButton('Add Radius');
    button.position(30, 30);

    // ボタンが押されたときに呼び出される関数を指定
    button.mousePressed(addRadius);
}

function draw() {
    background('orange');
    x = sin(radians(angle)) * radius;
    y = cos(radians(angle)) * radius;

    // 横方向
    push();
    fill('blue');
    translate(width/2, height/2);
    ellipse(x, 0, 10, 10);
    pop();

    // 縦方向
    push();
    fill('green');
    translate(width/2, height/2);
    ellipse(0, y, 10, 10);
    pop();

    angle += 3;
}

function addRadius() {
    radius += random(1, 10);
}

