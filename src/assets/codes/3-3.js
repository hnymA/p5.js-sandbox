function setup() {
    createCanvas(640, 480);
    background('teal');
    noStroke();

    fill(255, 0, 0, 127);
    rect(0, 0, 100, 100);

    push();
    rotate(PI/4);  // 45°回転 rotate(radians(45)); と同じ
    fill(0, 0, 255, 127);
    rect(0, 0, 100, 100);
    pop();
}
