<template>
    <div id="ClearButton">
        <el-button icon="el-icon-delete" v-on:click="clear">{{ msg }}</el-button>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "ClearButton",
                msg: "Clear"
            }
        },
        methods: {
            clear: function () {
                this.$emit('clear-text')
            }
        }
    }
</script>

<style scoped>

</style>
