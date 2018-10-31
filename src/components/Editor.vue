<template>
    <div class="editor">
        <h2>{{ msg }}</h2>
    </div>
</template>

<script>
    export default {
        name: "Editor",
        data () {
            return {
                msg: 'Editor'
            }
        }
    }
</script>

<style scoped>
    .editor {
        border: solid black 3px;
    }
</style>
