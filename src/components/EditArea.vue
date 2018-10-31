<template>
    <div id="editArea">
        <el-row>
            <Editor ref="editor"/>
        </el-row>
        <el-row type="flex" justify="space-around">
            <el-col :span="6"></el-col>
            <el-col :span="6">
                <ClearButton @clear-text="clearText"/>
            </el-col>
            <el-col :span="6">
                <ExecuteButton @execute-program="executeProgram"/>
            </el-col>
            <el-col :span="6"></el-col>
        </el-row>
    </div>
</template>

<script>

    import Editor from './Editor'
    import ClearButton from './ClearButton'
    import ExecuteButton from './ExecuteButton'

    export default {
        data () {
            return {
                name: "EditArea",
            }
        },
        components: {
            'Editor': Editor,
            'ClearButton': ClearButton,
            'ExecuteButton': ExecuteButton,
        },
        methods: {
            clearText: function(){
                this.$refs.editor.clear();
            },
            executeProgram: function(){
                const code = this.$refs.editor.getText();
                this.$emit('update-text', code);
            }
        }
    }
</script>

<style scoped>

</style>
