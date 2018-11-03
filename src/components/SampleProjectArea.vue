<template>
    <div id="sampleProjectArea">
        <el-row :gutter="20" type="flex" justify="space-around">
            <el-col :span="4">
                <SampleProjectButton/>
            </el-col>
            <el-col :span="4">
                <SampleProjectButton/>
            </el-col>
            <el-col :span="4">
                <SampleProjectButton/>
            </el-col>
            <el-col :span="4">
                <SampleProjectButton/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import SampleProjectButton from './SampleProjectButton'

    export default {
        data() {
            return {
                name: "SampleProjectArea",
            }
        },
        components: {
            'SampleProjectButton': SampleProjectButton,
        },
    }
</script>

<style scoped>

</style>
