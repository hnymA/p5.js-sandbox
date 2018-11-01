<template>
    <div id="clearMessage">
        <el-dialog
                :visible.sync="centerDialogVisible"
                width="30%"
                center>
            <span slot="title"><i class="el-icon-warning"></i>  Warning</span>
            <span>エディタの内容を初期化します。よろしいですか？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="centerDialogVisible = false">キャンセル</el-button>
                <el-button type="primary" @click="clearText">OK</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                centerDialogVisible: false
            };
        },
        methods: {
            confirm: function () {
                this.centerDialogVisible = true;
            },
            clearText: function(){
                this.centerDialogVisible = false;
                this.$emit('confirmed-clear-text')
            }
        }
    };
</script>

<style scoped>

</style>
