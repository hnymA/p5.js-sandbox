<template>
    <div id="result">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: "Result",
                msg: 'Result'
            }
        }
    }
</script>

<style scoped>
    #result {
        border: solid black 3px;
        height: 600px;
    }
</style>
