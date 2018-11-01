<template>
    <div id="ClearButton">
        <el-button icon="el-icon-delete" @click="clear">{{ msg }}</el-button>
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
                this.$emit('pushed-clear-button')
            }
        }
    }
</script>

<style scoped>

</style>
