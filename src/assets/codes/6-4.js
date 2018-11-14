var angle = 0;
var radius = 50;
var slider;       // 半径を変更するスライダー

function setup() {
    createCanvas(640, 480);
    noStroke();
    background('orange');

    // スライダーを作成
    // createSlider(最小値, 最大値, 初期値)
    slider = createSlider(0, 100, 50);

    // (30, 30)の位置にスライダーを設置
    slider.position(30, 30);
}

function draw() {
    background('orange');

    // 半径をスライダーの値に
    radius = slider.value();

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
