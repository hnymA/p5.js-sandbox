<template>
    <div id="footer">
        <div id="footerCanvas"></div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "Footer",
            }
        },
        methods: {
            setFooter: function (mode) {
                let sketch = function (p) {
                    p.setup = function () {
                        const HEIGHT = 60;
                        const WIDTH = document.getElementById('header').offsetWidth;
                        p.createCanvas(WIDTH, HEIGHT);

                        switch (mode) {
                            case 1:
                                p.noStroke();

                                const UPPER = 20;
                                for (let i = 0; i < 300; i++) {
                                    const size = p.random(5, UPPER);

                                    p.fill(p.random(255), p.random(255), p.random(255));
                                    p.ellipse(p.random(0, WIDTH), p.random(0, HEIGHT), size, size);
                                }
                                break;

                            case 2:
                                p.background(0);

                                p.fill(0);
                                p.strokeWeight(5);
                                p.stroke(255);

                                for (let i = 0; i < 10; i++) {
                                    const size = 100;

                                    p.rect(p.random(0, WIDTH), p.random(0, HEIGHT), size, size);
                                }
                                break;

                            case 3:
                                p.background('lemonchiffon');

                                let x = 0.0;
                                const INC = p.TWO_PI / 50.0;
                                p.strokeWeight(1.0);

                                for (let i = 0; i < WIDTH; i += 4) {
                                    p.stroke('tomato');
                                    p.line(i, HEIGHT/2, i, HEIGHT/2 + p.tan(x) * 2.0);
                                    x = x + INC;
                                }

                                x = 0.0;
                                for (let i = 0; i < WIDTH; i += 4) {
                                    p.stroke('steelblue');
                                    p.line(i, HEIGHT/2, i, HEIGHT/2 + p.sin(x) * 20.0);
                                    x = x + INC;
                                }

                                p.strokeWeight(0.5);
                                break;
                        }
                    }
                };
                new p5(sketch, 'footerCanvas');
            }
        },
    }
</script>

<style scoped>
    h1 {
        background-color: tomato;
    }
</style>
