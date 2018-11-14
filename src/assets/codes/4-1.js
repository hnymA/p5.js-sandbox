function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(255);

    if(mouseIsPressed === true) { // マウスのボタンが押されていたら
        fill('orange');           // 塗りをオレンジに
    } else {
        fill('white');            // そうでなければ塗りを白に
    }

    ellipse(mouseX, mouseY, 80, 80);
}
