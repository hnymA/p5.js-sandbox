var x, y, r;

function setup() {
    createCanvas(640, 480);
    noStroke();
    background('orange');
}

function draw() {
    // random(数値)で
    // 0から指定した数値までの乱数を得る

    x = random(width);
    y = random(height);
    r = random(10);

    ellipse(x, y, r);
}
