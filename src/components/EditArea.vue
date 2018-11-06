<template>
    <div id="editArea">
        <ClearMessage ref="clearMessage" @confirmed-clear-text="confirmedClearText"/>

        <el-row>
            <Editor ref="editor"/>
        </el-row>
        <el-row type="flex" justify="space-around">
            <el-col :span="6"></el-col>
            <el-col :span="6">
                <ClearButton @pushed-clear-button="pushedClearButton"/>
            </el-col>
            <el-col :span="6">
                <ExecuteButton @pushed-execute-button="pushedExecuteButton"/>
            </el-col>
            <el-col :span="6"></el-col>
        </el-row>
    </div>
</template>

<script>

    import Editor from './Editor'
    import ClearButton from './ClearButton'
    import ExecuteButton from './ExecuteButton'
    import ClearMessage from './ClearMessage'

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
            'ClearMessage': ClearMessage
        },
        methods: {
            pushedClearButton: function(){
                this.$refs.clearMessage.confirm()
            },
            pushedExecuteButton: function(){
                const code = this.$refs.editor.getCode();
                this.$emit('update-text', code);
            },
            confirmedClearText: function(){
                this.$refs.editor.clear()
            },
            setCode: function(code){
                this.$refs.editor.setCode(code)
            }
        }
    }
</script>

<style scoped>

</style>
