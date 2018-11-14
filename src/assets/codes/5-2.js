var x, y, r;

function setup() {
    createCanvas(640, 480);
    noStroke();
    background('orange');
}

function draw() {
    // random()で
    // 0から1までの乱数を得る

    // random(n, m)で
    // nからmまでの乱数を得る

    x = random(width);
    y = random(height);

    if(random() < 0.95) { // 95%の確率で
        r = random(10, 20); // 小さめの円
    } else {
        r = random(40, 50);
    }

    ellipse(x, y, r);
}
