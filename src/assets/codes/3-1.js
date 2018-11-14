function setup() {
    createCanvas(640, 480);
    background('teal');

    ellipse(50, 50, 100, 100);

    noStroke();   // 図形の枠線をなしに
    ellipse(100, 100, 100, 100);

    fill('orange');   // 図形の塗りつぶしをオレンジに
    ellipse(150, 150, 100, 100);

    stroke('purple'); // 図形の枠線を紫色に
    ellipse(200, 200, 100, 100);

    noFill();         // 図形の塗りつぶしをなしに
    ellipse(250, 250, 100, 100);

    strokeWeight(5);  // 図形の枠線の太さを変更
    ellipse(300, 300, 100, 100);
}
