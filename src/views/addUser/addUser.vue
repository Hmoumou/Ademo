<template>
    <div class="add-user">
         <div class="crumbs">
            <!-- <i class="el-icon-back"></i> -->
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/layout/users' }">用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加管理员</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
         <h2>添加管理员</h2>
       <div class="form">
            <el-form :model="formData" label-position='left' label-width='120px'  size='small'>
            <el-form-item   label='用户名:' >
                <el-input v-model='formData.username'></el-input>
            </el-form-item>
            <el-form-item   label='管理员密码:'>
                <el-input v-model='formData.password'></el-input>
            </el-form-item>
            <el-form-item   label='再次确认密码:'>
                <el-input v-model='formData.againPassword'></el-input>
            </el-form-item>
            <el-form-item  label='昵称:'>
                <el-input v-model='formData.nickname'></el-input>
            </el-form-item>
            <el-form-item  label='邮箱:'>
                <el-input v-model='formData.email'></el-input>
            </el-form-item>
            <el-form-item  label='用户头像:'>
               <upload-img v-model="formData.avatar"></upload-img>
            </el-form-item>
            <el-form-item  label='个性签名:'>
                <el-input type='textarea' v-model='formData.desc'></el-input>
            </el-form-item>
            <el-button size='small' type='primary' @click="submitData">提交</el-button>
        </el-form>
       </div>
       
    </div>
</template>

<script>
    export default {
        data(){
            return{
               formData:{
                    username:'',
                    password:'',
                    nickname:'',
                    email:'',
                    desc:'',
                    avatar:'',
                    againPassword:''
               }
            }
        },
        methods:{
            submitData(){
                if(this.formData.password != this.formData.againPassword){
                    this.$message.error('两次输入密码不一致')
                }else{
                    this.$axios.post('/user',this.formData).then(res=>{
                        console.log(res);
                        if(res.code == 200){
                            this.$message.success(res.msg)
                        }
                    })
                }
                
            },
        }
    }
</script>

<style scoped>
.form{
    width: 600px;
    margin-top: 20px;
}
</style>