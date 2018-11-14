var x, y, r;

function setup() {
    createCanvas(640, 480);
    noStroke();
}

function draw() {
    x = random(width);
    y = random(height);
    r = random(30);

    // 塗りの色をランダムに指定
    fill(random(255), random(255), random(255));
    ellipse(x, y, r);
}
