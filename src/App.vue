<template>
    <div id="app">
        <el-container>
            <el-header>
                <Header/>
            </el-header>

            <el-main>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <EditArea ref="editArea" @update-text="updateText"/>
                    </el-col>
                    <el-col :span="12">
                        <Result ref="result"/>
                    </el-col>
                </el-row>

                <hr>

                <SampleProjectArea @set-code="setCode"/>

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
    import SampleProjectArea from './components/SampleProjectArea'

    export default {
        name: 'App',
        components: {
            HelloWorld,
            Header,
            Footer,
            Result,
            EditArea,
            SampleProjectArea
        },
        methods: {
            updateText: function (code) {
                this.$refs.result.updateText(code);
            },
            setCode: function (code) {
                this.$refs.editArea.setCode(code);
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
        margin-top: 30px;
    }
</style>
