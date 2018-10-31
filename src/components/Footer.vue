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
                msg: 'Copyright © 2018 Kaisei Hanayama. All Rights Reserved.'
            }
        },
        mounted () {
            let sketch = function(p) {
                p.setup = function(){
                    p.createCanvas(document.getElementById('footer').offsetWidth, 60);
                    const height = 60
                    const width = document.getElementById('header').offsetWidth
                    p.createCanvas(width, height);
                    p.noStroke();
                    p.fill(255);

                    const step = 20;
                    for(let i = 0; i < 300; i++){
                        const size = p.random(5, step);

                        p.fill(p.random(255), p.random(255), p.random(255));
                        p.ellipse(p.random(0, width), p.random(0, height), size, size);
                    }

                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(20);
                    p.fill(0);
                    p.text('Copyright © 2018 Kaisei Hanayama. All Rights Reserved.', width/2, height/2)
                }
            };
            new p5(sketch, 'footerCanvas');
        }
    }
</script>

<style scoped>
    h1 {
        background-color: tomato;
    }
</style>
