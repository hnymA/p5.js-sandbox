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
                        return ;

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
