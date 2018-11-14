function setup() {
    // 図形の変形をするにはpush()とpop()を用いる
    // 変形前にpush() 変形後にpop()

    createCanvas(640, 480);
    background('teal');
    noStroke();

    fill(255, 0, 0, 127);
    rect(0, 0, 100, 100);

    push();
    translate(10, 10);  // 平行移動
    fill(0, 0, 255, 127);
    rect(0, 0, 100, 100);
    pop();
}
