<template>
    <div id="header">
        <div id="headerCanvas"></div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "Header",
                msg: 'p5.js sandbox'
            }
        },
        methods: {
            setHeader: function(mode){
                let sketch = function(p) {
                    p.setup = function(){
                        const HEIGHT = 60;
                        const WIDTH = document.getElementById('header').offsetWidth;
                        p.createCanvas(WIDTH, HEIGHT);

                        let fontColor;

                        switch(mode) {
                            case 1:
                                p.noStroke();

                                const UPPER = 20;
                                for(let i = 0; i < 150; i++){
                                    const size = p.random(5, UPPER);

                                    p.fill(p.random(255), p.random(255), p.random(255));
                                    p.ellipse(p.random(0, WIDTH/3), p.random(0, HEIGHT), size, size);
                                    p.ellipse(p.random(2*WIDTH/3, WIDTH), p.random(0, HEIGHT), size, size);
                                }

                                fontColor = 0;
                                break;

                            case 2:
                                p.background(0);

                                p.fill(0);
                                p.strokeWeight(5);
                                p.stroke(255);

                                for(let i = 0; i < 5; i++){
                                    const size = 100;

                                    p.rect(p.random(0, WIDTH/3), p.random(0, HEIGHT/3), size, size);
                                    p.rect(p.random(2*WIDTH/3, WIDTH), p.random(0, HEIGHT/3), size, size);
                                }

                                fontColor = 255;
                                p.strokeWeight(0.5);
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

                                fontColor = 'olive';
                                p.stroke('olive');
                                p.strokeWeight(0.5);
                                break;
                        }

                        p.textAlign(p.CENTER, p.CENTER);
                        p.textSize(40);
                        p.fill(fontColor);
                        p.text('p5.js sandbox', WIDTH/2, HEIGHT/2)
                    }
                };
                new p5(sketch, 'headerCanvas');
            },
        },
    }
</script>

<style scoped>

</style>
