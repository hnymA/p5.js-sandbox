<template>
    <div id="executeButton">
        <el-button type="primary" icon="el-icon-caret-right" v-on:click="execute">{{ msg }}</el-button>
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
                this.$emit('execute-program')
            }
        }
    }
</script>

<style scoped>

</style>
