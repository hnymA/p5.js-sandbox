<template>
    <div id="editor">
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "Editor",
           }
        },
        mounted () {
            this.editor = window.ace.edit("editor");
            this.editor.setTheme("ace/theme/monokai");
            this.editor.setFontSize(20);
            this.editor.getSession().setMode("ace/mode/javascript");
            this.editor.getSession().setUseWrapMode(true);
            this.editor.getSession().setTabSize(4);
        },
        methods: {
            clear: function () {
                this.editor.setValue("");
            },
            getCode: function () {
                return this.editor.getValue();
            },
            setCode: function (code) {
                this.editor.setValue(code);
            }
        }
    }
</script>

<style scoped>
    #editor {
        border: solid black 3px;
        height: 600px;
    }
</style>
