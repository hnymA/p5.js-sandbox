var x, y, r;

function setup() {
    createCanvas(640, 480);
    noStroke();
}

function draw() {
    x = random(width);
    y = random(height);
    r = random(30);

    // red > green > blue なので
    // 赤っぽい配色になる
    red = random(255);
    green = random(red);
    blue = random(green);

    fill(red, green, blue);
    ellipse(x, y, r);
}
