<template>
    <div id="executeButton">
        <el-button type="primary" icon="el-icon-caret-right" @click="execute">{{ msg }}</el-button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "ExecuteButton",
                msg: "Execute!"
            }
        },
        methods: {
            execute: function () {
                this.$emit('pushed-execute-button')
            }
        }
    }
</script>

<style scoped>

</style>
