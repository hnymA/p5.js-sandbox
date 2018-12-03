<template>
    <div id="result">
        <iframe id="resultFrame" frameborder="0" :srcdoc="htmlDoc"></iframe>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "Result",
                msg: 'Result',
                htmlDoc:
                    '<!DOCTYPE html>' +
                    '<html lang=\'ja\'>' +
                    '<head>' +
                    '<meta charset=\'utf-8\'>' +
                    '</head>' +
                    '<body>' +
                    '<script src=\'static/p5.js/p5.min.js\'\><\/script>' +
                    '<script src=\'static/p5.js/addons/p5.dom.min.js\'\><\/script>' +
                    '<script src=\'static/p5.js/addons/p5.sound.min.js\'\><\/script>' +
                    '<script><\/script>' +
                    '</body>'+
                    '</html>'
            }
        },
        methods: {
            updateText: function(text){
                const minified = text.replace(/\/\/.*\n/g, '').replace(/\r?\n/g,'');
                this.htmlDoc = this.htmlDoc.replace(/<script>[\s\S]*<\/script>/, '<script>' + minified + '<\/script>');
                this.$nextTick(function () {
                    this.$forceUpdate();
                })
            },
        }
    }
</script>

<style scoped>
    #result {
        border: solid black 3px;
        height: 600px;
    }

    #resultFrame {
        width: 100%;
        height: 100%;
    }
</style>
