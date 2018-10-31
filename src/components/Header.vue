<template>
    <div id="header">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
            return {
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
