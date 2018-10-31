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
                htmlDoc: ''
            }
        },
        methods: {
            updateText: function(text){
                this.htmlDoc = text;
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
