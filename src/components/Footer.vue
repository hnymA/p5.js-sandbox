<template>
    <div class="footer">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data () {
            return {
                msg: 'Copyright © 2018 Kaisei Hanayama. All Rights Reserved.'
            }
        }
    }
</script>

<style scoped>
    h1 {
        background-color: tomato;
    }
</style>
