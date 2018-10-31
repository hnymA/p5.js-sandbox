<template>
    <div id="header">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "Header",
                msg: 'p5.js sandbox'
            }
        }
    }
</script>

<style scoped>
    h1 {
        background-color: mediumpurple;
    }
</style>
