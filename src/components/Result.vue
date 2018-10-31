<template>
    <div class="result">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Result",
        data () {
            return {
                msg: 'Result'
            }
        }
    }
</script>

<style scoped>
    .result {
        border: solid black 3px;
    }
</style>
