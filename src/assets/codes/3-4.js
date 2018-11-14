function setup() {
    createCanvas(640, 480);
    background('teal');
    noStroke();

    fill(255, 0, 0, 127);
    rect(0, 0, 100, 100);

    push();
    scale(2, 0.5);  // 図形の拡大・縮小
    fill(0, 0, 255, 127);
    rect(0, 0, 100, 100);
    pop();
}
