<template>
    <div id="app">
        <el-container>
            <el-header style="height: 100px;">
                <Header/>
            </el-header>

            <el-main>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <EditArea @update-text="updateText"/>
                    </el-col>
                    <el-col :span="12">
                        <Result ref="result"/>
                    </el-col>
                </el-row>
            </el-main>

            <el-footer>
                <Footer/>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld'
    import Header from './components/Header'
    import Footer from './components/Footer'
    import Result from './components/Result'
    import EditArea from './components/EditArea'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Header,
            Footer,
            Result,
            EditArea
        },
        methods: {
            updateText: function(code){
                this.$refs.result.updateText(code);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
