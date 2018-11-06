<template>
    <div id="sampleProjectArea">
        <el-collapse accordion>

            <el-collapse-item title="First Step" name="1">
                <el-row :gutter="20" type="flex" justify="space-around">
                    <el-col :span="4">
                        <SampleProjectButton id="1-1" title="Hello, p5.js!" @update-code="setCode"/>
                    </el-col>
                    <el-col :span="4">
                        <SampleProjectButton id="1-2" title="Movin' Square" @update-code="setCode"/>
                    </el-col>
                    <el-col :span="4">
                        <SampleProjectButton id="1-3" title="Mouse Interaction" @update-code="setCode"/>
                    </el-col>
                    <el-col :span="4">
                        <SampleProjectButton id="1-4" title="Width & Height" @update-code="setCode"/>
                    </el-col>
                </el-row>
            </el-collapse-item>

            <el-collapse-item title="Colors" name="2">
                <el-row :gutter="20" type="flex" justify="space-around">
                    <el-col :span="4">
                        <SampleProjectButton id="2-1" title="Gray scale" @update-code="setCode"/>
                    </el-col>
                    <el-col :span="4">
                        <SampleProjectButton id="2-2" title="Red, Green, Blue" @update-code="setCode"/>
                    </el-col>
                    <el-col :span="4">
                        <SampleProjectButton id="2-3" title="Hue, Saturation, Brightness" @update-code="setCode"/>
                    </el-col>
                    <el-col :span="4">
                        <SampleProjectButton id="2-4" title="Width & Height" @update-code="setCode"/>
                    </el-col>
                </el-row>
            </el-collapse-item>

        </el-collapse>
    </div>

</template>

<script>
    import SampleProjectButton from './SampleProjectCard'

    export default {
        data() {
            return {
                name: "SampleProjectArea",
                activeName: '1'
            }
        },
        methods: {
            setCode: function(code){
                this.$emit('set-code', code);
            }
        },
        components: {
            'SampleProjectButton': SampleProjectButton,
        },
    }
</script>

<style scoped>

</style>
