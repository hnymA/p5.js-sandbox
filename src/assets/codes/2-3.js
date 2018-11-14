function setup() {
    createCanvas(640, 480);

    // colorMode(HSB) とすることで
    // HSBで色の指定を行う
    // 参考： https://ja.wikipedia.org/wiki/HSV%E8%89%B2%E7%A9%BA%E9%96%93

    // 指定方法をHSBに、上限を100に設定
    colorMode(HSB, 100);

    background(0, 100, 100);    // 赤色
    // background(50, 100, 100);   // 水色

    // background(0, 50, 100);     // 彩度を落とした薄い赤
    // background(0, 100, 50);     // 明度を落とした暗い赤
}
