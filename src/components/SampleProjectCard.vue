<template>
    <div class="sampleProjectButton">
        <el-card :body-style="{padding: '0px'}">
            <img :src=img_src class="image">
            <div>
                <div class="title">
                    {{ title }}
                </div>
                <div class="content">
                    {{ this.getContent(id) }}
                </div>
                <div class="bottom clearfix">
                    <el-button class="button" type="success" @click="sendId(id)">Select</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                name: "SampleProjectButton",
                img_src: require("../assets/images/" + this.getId() + ".png")
            }
        },
        props: [
            'id',
            'title'
        ],
        methods: {
            getId: function(){
                return this.id;
            },
            getContent: function(id){
                switch (id) {
                    case '1-1':
                        return 'p5.js における図形の描画方法の基礎について勉強しましょう。';

                    case '1-2':
                        return 'ループを使った図形の移動について勉強しましょう。';

                    case '1-3':
                        return 'マウスを用いた図形の描画方法について勉強しましょう。';

                    case '1-4':
                        return 'WidthとHeightを用いた画面サイズの取得方法について勉強しましょう。';

                    case '2-1':
                        return 'グレースケールを用いた色の指定方法について勉強しましょう。';

                    case '2-2':
                        return 'RGB表記を用いた色の指定方法について勉強しましょう。';

                    case '2-3':
                        return 'HSB表記を用いた色の指定方法について勉強しましょう。';

                    case '2-4':
                        return 'CSSと同様の表記を用いた色の指定方法について勉強しましょう。';

                    case '2-5':
                        return 'アルファ値による透明度の指定方法について勉強しましょう。';

                    case '3-1':
                        return '図形の塗りつぶしと枠線について勉強しましょう。';

                    case '3-2':
                        return '図形の平行移動について勉強しましょう。';

                    case '3-3':
                        return '図形の回転について勉強しましょう。';

                    case '3-4':
                        return '図形の拡大・縮小について勉強しましょう。';

                    case '4-1':
                        return 'mouseIsPressed変数によるマウスのボタン判定について勉強しましょう。';

                    case '4-2':
                        return 'mousePressed関数によるマウスのボタン判定について勉強しましょう。';

                    case '4-3':
                        return 'keyIsPressed変数によるキーの判定について勉強しましょう。';

                    case '4-4':
                        return 'keyPressed関数によるキーの判定について勉強しましょう。';

                    case '5-1':
                        return 'random関数による乱数の生成方法について勉強しましょう。';

                    case '5-2':
                        return 'random関数による乱数の他の生成方法とメリハリの付け方について勉強しましょう。';

                    case '5-3':
                        return '乱数を色に応用する方法を勉強しましょう。';

                    case '5-4':
                        return '配色を偏らせてテーマを統一する方法を勉強しましょう。';

                    case '6-1':
                        return 'sin関数とcos関数の基本的な使い方を勉強しましょう。';

                    case '6-2':
                        return 'sin関数とcos関数の別の使用例を勉強しましょう。';

                    case '6-3':
                        return 'マウスとsin関数・cos関数を用いた図形の描画について勉強しましょう。';

                    case '6-4':
                        return '';

                    default:
                        return 'UNDEF';
                }
            },
            getCode: function(id){
                switch (id) {
                    case '1-1':
                        return '// 最初に1回だけ実行される処理\n' +
                            'function setup() {\n' +
                            '    //描画領域の設定\n' +
                            '    createCanvas(640, 480);\n' +
                            '}\n' +
                            '\n' +
                            '// その後に繰り返し実行される処理\n' +
                            'function draw() {\n' +
                            '    // 四角形の描画\n' +
                            '    // 左上のX座標, 左上のY座標, 右下のX座標, 右下のY座標）\n' +
                            '    rect(100, 100, 150, 150);\n' +
                            '}\n';

                    case '1-2':
                        return '// 四角形を動かすための変数を定義\n' +
                            'var x = 100;\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '\n' +
                            '    // 背景を黒で塗りつぶす\n' +
                            '    background(0);\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    rect(x, x, 150, 150);\n' +
                            '\n' +
                            '    // xの値を繰り返し増やしていく\n' +
                            '    x += 1;\n' +
                            '}\n';

                    case '1-3':
                        return 'function setup() {\n' +
                            '  createCanvas(640, 480);\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '  // 背景のクリア\n' +
                            '  // 白で塗りつぶす\n' +
                            '  background(255);\n' +
                            '\n' +
                            '  // mouseXとmouseYでマウスの位置を取得\n' +
                            '  // ellipseにより円を描画\n' +
                            '  ellipse(mouseX, mouseY, 80, 80);\n' +
                            '}\n';

                    case '1-4':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    // widthとheightで描画領域の情報を取得\n' +
                            '    // width: 描画領域の幅\n' +
                            '    // height: 描画領域の高さ\n' +
                            '\n' +
                            '    background(0);\n' +
                            '\n' +
                            '    // 描画領域の中央で円を描画\n' +
                            '    ellipse(width/2, height/2, 80, 80);\n' +
                            '}\n';

                    case '2-1':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '\n' +
                            '    // background(数字）とすることで\n' +
                            '    // グレースケールで色の指定を行う\n' +
                            '    // 0 - 255\n' +
                            '\n' +
                            '    background(0);   // 黒色\n' +
                            '    // background(127); // 灰色\n' +
                            '    // background(255); // 白色\n' +
                            '}\n';

                    case '2-2':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '\n' +
                            '    // background(数字, 数字, 数字）とすることで\n' +
                            '    // RGBで色の指定を行う\n' +
                            '    // 0 - 255\n' +
                            '\n' +
                            '    background(255, 0, 0);   // 赤色\n' +
                            '    // background(0, 255, 0);   // 緑色\n' +
                            '    // background(0, 0, 255);   // 青色\n' +
                            '\n' +
                            '    // background(255, 255, 0);    // 赤＋緑＝黄色\n' +
                            '    // background(0, 255, 255);    // 緑＋青＝水色\n' +
                            '    // background(255, 0, 255);    // 赤＋青＝ピンク色\n' +
                            '}\n';

                    case '2-3':
                        return 'function setup() {\n' +
                            '  createCanvas(640, 480);\n' +
                            '\n' +
                            '  // colorMode(HSB) とすることで\n' +
                            '  // HSBで色の指定を行う\n' +
                            '  // 参考： https://ja.wikipedia.org/wiki/HSV%E8%89%B2%E7%A9%BA%E9%96%93\n' +
                            '  \n' +
                            '  // 指定方法をHSBに、上限を100に設定\n' +
                            '  colorMode(HSB, 100); \n' +
                            '  \n' +
                            '  background(0, 100, 100);    // 赤色  \n' +
                            '  // background(50, 100, 100);   // 水色\n' +
                            '\n' +
                            '  // background(0, 50, 100);     // 彩度を落とした薄い赤\n' +
                            '  // background(0, 100, 50);     // 明度を落とした暗い赤\n' +
                            '}\n';

                    case '2-4':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '\n' +
                            '    // CSSと同様の表記を用いた\n' +
                            '    // 色の指定方法\n' +
                            '\n' +
                            '    background(\'red\');            // 色名による指定\n' +
                            '    // background(\'#ff0000\');        // 16進数による指定\n' +
                            '    // background(\'rgb(255, 0, 0)\'); // RGB表記による指定\n' +
                            '}';

                    case '2-5':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '\n' +
                            '    // アルファ値を記述することで\n' +
                            '    // 透明度を指定する\n' +
                            '    // アルファ値は最後に記述する\n' +
                            '\n' +
                            '    background(255, 0, 0, 127);\n' +
                            '    \n' +
                            '    // colorMode(HSB, 100);\n' +
                            '    // background(0, 100, 100, 50);\n' +
                            '\n' +
                            '    // background(\'rgba(255, 0, 0, 0.5)\');\n' +
                            '}\n';

                    case '3-1':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    background(\'teal\');\n' +
                            '\n' +
                            '    ellipse(50, 50, 100, 100);\n' +
                            '\n' +
                            '    noStroke();   // 図形の枠線をなしに\n' +
                            '    ellipse(100, 100, 100, 100);\n' +
                            '\n' +
                            '    fill(\'orange\');   // 図形の塗りつぶしをオレンジに\n' +
                            '    ellipse(150, 150, 100, 100);\n' +
                            '\n' +
                            '    stroke(\'purple\'); // 図形の枠線を紫色に\n' +
                            '    ellipse(200, 200, 100, 100);\n' +
                            '\n' +
                            '    noFill();         // 図形の塗りつぶしをなしに\n' +
                            '    ellipse(250, 250, 100, 100);\n' +
                            '\n' +
                            '    strokeWeight(5);  // 図形の枠線の太さを変更\n' +
                            '    ellipse(300, 300, 100, 100);\n' +
                            '}\n';

                    case '3-2':
                        return 'function setup() {\n' +
                            '    // 図形の変形をするにはpush()とpop()を用いる\n' +
                            '    // 変形前にpush() 変形後にpop()\n' +
                            '\n' +
                            '    createCanvas(640, 480);\n' +
                            '    background(\'teal\');\n' +
                            '    noStroke();\n' +
                            '\n' +
                            '    fill(255, 0, 0, 127);\n' +
                            '    rect(0, 0, 100, 100);\n' +
                            '\n' +
                            '    push();\n' +
                            '    translate(10, 10);  // 平行移動\n' +
                            '    fill(0, 0, 255, 127);\n' +
                            '    rect(0, 0, 100, 100);\n' +
                            '    pop();\n' +
                            '}\n';

                    case '3-3':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    background(\'teal\');\n' +
                            '    noStroke();\n' +
                            '\n' +
                            '    fill(255, 0, 0, 127);\n' +
                            '    rect(0, 0, 100, 100);\n' +
                            '\n' +
                            '    push();\n' +
                            '    rotate(PI/4);  // 45°回転 rotate(radians(45)); と同じ\n' +
                            '    fill(0, 0, 255, 127);\n' +
                            '    rect(0, 0, 100, 100);\n' +
                            '    pop();\n' +
                            '}\n';

                    case '3-4':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    background(\'teal\');\n' +
                            '    noStroke();\n' +
                            '\n' +
                            '    fill(255, 0, 0, 127);\n' +
                            '    rect(0, 0, 100, 100);\n' +
                            '\n' +
                            '    push();\n' +
                            '    scale(2, 0.5);  // 図形の拡大・縮小\n' +
                            '    fill(0, 0, 255, 127);\n' +
                            '    rect(0, 0, 100, 100);\n' +
                            '    pop();\n' +
                            '}\n';

                    case '4-1':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    background(255);\n' +
                            '\n' +
                            '    if(mouseIsPressed === true) { // マウスのボタンが押されていたら\n' +
                            '        fill(\'orange\');           // 塗りをオレンジに\n' +
                            '    } else {\n' +
                            '        fill(\'white\');            // そうでなければ塗りを白に\n' +
                            '    }\n' +
                            '\n' +
                            '    ellipse(mouseX, mouseY, 80, 80);\n' +
                            '}\n';

                    case '4-2':
                        return 'var r = 80; // 円の半径\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    background(255);\n' +
                            '    ellipse(mouseX, mouseY, r, r);\n' +
                            '}\n' +
                            '\n' +
                            'function mousePressed() { // ボタンが押されるたびに呼び出される関数\n' +
                            '    r += 10;                // 半径を大きくする\n' +
                            '    return;\n' +
                            '}';

                    case '4-3':
                        return 'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    background(255);\n' +
                            '\n' +
                            '    if(keyIsPressed === true) {   // 何らかのキーが押されていたら\n' +
                            '        fill(\'pink\');             // 塗りをピンクに\n' +
                            '    } else {\n' +
                            '        fill(\'white\');            // そうでなければ塗りを白に\n' +
                            '    }\n' +
                            '\n' +
                            '    ellipse(mouseX, mouseY, 80, 80);\n' +
                            '}\n';

                    case '4-4':
                        return 'var r = 300; // 円の半径\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    background(255);\n' +
                            '    ellipse(mouseX, mouseY, r, r);\n' +
                            '}\n' +
                            '\n' +
                            'function keyPressed() {     // キーが押されるたびに呼び出される関数\n' +
                            '    r -= 10;                // 半径を小くする\n' +
                            '    return;\n' +
                            '}';

                    case '5-1':
                        return 'var x, y, r;\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    noStroke();\n' +
                            '    background(\'orange\');\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    // random(数値)で\n' +
                            '    // 0から指定した数値までの乱数を得る\n' +
                            '    \n' +
                            '    x = random(width);\n' +
                            '    y = random(height);\n' +
                            '    r = random(10);\n' +
                            '    \n' +
                            '    ellipse(x, y, r);\n' +
                            '}\n';

                    case '5-2':
                        return 'var x, y, r;\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    noStroke();\n' +
                            '    background(\'orange\');\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    // random()で\n' +
                            '    // 0から1までの乱数を得る\n' +
                            '    \n' +
                            '    // random(n, m)で\n' +
                            '    // nからmまでの乱数を得る\n' +
                            '    \n' +
                            '    x = random(width);\n' +
                            '    y = random(height);\n' +
                            '    \n' +
                            '    if(random() < 0.95) { // 95%の確率で\n' +
                            '      r = random(10, 20); // 小さめの円\n' +
                            '    } else {\n' +
                            '      r = random(40, 50);\n' +
                            '    }\n' +
                            '    \n' +
                            '    ellipse(x, y, r);\n' +
                            '}\n';

                    case '5-3':
                        return 'var x, y, r;\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    noStroke();\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    x = random(width);\n' +
                            '    y = random(height);\n' +
                            '    r = random(30);\n' +
                            '    \n' +
                            '    // 塗りの色をランダムに指定\n' +
                            '    fill(random(255), random(255), random(255));\n' +
                            '    ellipse(x, y, r);\n' +
                            '}\n';

                    case '5-4':
                        return 'var x, y, r;\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    noStroke();\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    x = random(width);\n' +
                            '    y = random(height);\n' +
                            '    r = random(30);\n' +
                            '    \n' +
                            '    // red > green > blue なので\n' +
                            '    // 赤っぽい配色になる\n' +
                            '    red = random(255);\n' +
                            '    green = random(red);\n' +
                            '    blue = random(green);\n' +
                            '    \n' +
                            '    fill(red, green, blue);\n' +
                            '    ellipse(x, y, r);\n' +
                            '}\n';

                    case '6-1':
                        return 'var angle = 0;    // 角度\n' +
                            'var radius = 50;  // 半径\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    noStroke();\n' +
                            '    background(\'orange\');\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    push();\n' +
                            '    translate(width/2, height/2);     // 円の中心を画面中央に\n' +
                            '    x = sin(radians(angle)) * radius;\n' +
                            '    y = cos(radians(angle)) * radius;\n' +
                            '    ellipse(x, y, 10, 10);\n' +
                            '    pop();\n' +
                            '    \n' +
                            '    angle++;\n' +
                            '}\n';

                    case '6-2':
                        return 'var angle = 0;    // 角度\n' +
                            'var radius = 50;  // 半径\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    noStroke();\n' +
                            '    background(\'orange\');\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    background(\'orange\');\n' +
                            '    x = sin(radians(angle)) * radius;\n' +
                            '    y = cos(radians(angle)) * radius;\n' +
                            '\n' +
                            '    // 横方向\n' +
                            '    push();\n' +
                            '    fill(\'blue\');\n' +
                            '    translate(width/2, height/2);\n' +
                            '    ellipse(x, 0, 10, 10);\n' +
                            '    pop();\n' +
                            '    \n' +
                            '    // 縦方向\n' +
                            '    push();\n' +
                            '    fill(\'green\');\n' +
                            '    translate(width/2, height/2);\n' +
                            '    ellipse(0, y, 10, 10);\n' +
                            '    pop();\n' +
                            '    \n' +
                            '    angle += 3;\n' +
                            '}\n';

                    case '6-3':
                        return 'var angle = 0;    // 角度\n' +
                            'var radius = 50;  // 半径\n' +
                            '\n' +
                            'function setup() {\n' +
                            '    createCanvas(640, 480);\n' +
                            '    noStroke();\n' +
                            '    background(\'orange\');\n' +
                            '}\n' +
                            '\n' +
                            'function draw() {\n' +
                            '    background(\'orange\');\n' +
                            '    x = sin(radians(angle)) * radius;\n' +
                            '    y = cos(radians(angle)) * radius;\n' +
                            '\n' +
                            '    // 横方向\n' +
                            '    push();\n' +
                            '    fill(\'blue\');\n' +
                            '    translate(mouseX, mouseY);\n' +
                            '    ellipse(x, 0, 10, 10);\n' +
                            '    pop();\n' +
                            '    \n' +
                            '    // 縦方向\n' +
                            '    push();\n' +
                            '    fill(\'green\');\n' +
                            '    translate(mouseX, mouseY);\n' +
                            '    ellipse(0, y, 10, 10);\n' +
                            '    pop();\n' +
                            '    \n' +
                            '    angle += 5;\n' +
                            '}\n';

                    default:
                        return 'UNDEF';
                }

            },
            sendId: function(id){
                this.$emit('update-code', this.getCode(id));
            }
        },
    }
</script>

<style scoped>
    .title {
        font-size: 24px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        margin: 10px;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

</style>
