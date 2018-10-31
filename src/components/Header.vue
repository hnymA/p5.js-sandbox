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
        mounted () {
            let sketch = function(p) {
                p.setup = function(){
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
                    p.textSize(40);
                    p.fill(0);
                    p.text('p5.js sandbox', width/2, height/2)
                }
            };
            new p5(sketch, 'headerCanvas');
        }
    }
</script>

<style scoped>

</style>
