<template>
    <div class="sampleProjectButton">
        <el-card :body-style="{padding: '0px'}">
            <img :src="img_src" class="image">
            <div>
                <div class="title">
                    Vue.js logo
                </div>
                <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <div class="bottom clearfix">
                    <el-button class="button" type="success">Select</el-button>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "SampleProjectButton",
                img_src: require("../assets/logo.png")
            }
        },

    }
</script>

<style scoped>
    .title {
        font-size: 24px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        margin: 10px;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

</style>
