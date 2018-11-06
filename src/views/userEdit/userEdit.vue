<template>
    <div>
        <h2>修改个人信息</h2>
       <div class="form">
            <el-form v-model="formData" label-position='left' label-width='80px'  size='small'>
            <el-form-item   label='用户名:' :disabled="true">
                <el-input v-model='formData.username'></el-input>
            </el-form-item>
            <el-form-item  label='昵称:'>
                <el-input v-model='formData.nickname'></el-input>
            </el-form-item>
            <el-form-item  label='邮箱:'>
                <el-input v-model='formData.email'></el-input>
            </el-form-item>
            <el-form-item  label='用户头像:'>
               <upload-img v-model='formData.avatar'></upload-img>
            </el-form-item>
            <el-form-item  label='个性签名:'>
                <el-input type='textarea' v-model='formData.desc'></el-input>
            </el-form-item>
            <el-button size='small' type='primary' @click="handleClick">保存更改</el-button>
        </el-form>
       </div>
    </div>
</template>

<script>
import uploadImg from '@/components/upload-com'
    export default {
        name:'userEdit',
        components:{
            uploadImg,
        },
        
        data(){
            return{
                formData:{
                    username:'',
                    nickname:'',
                    email:'',
                    desc:'',
                    avatar:'',
                    // data:{
                    //     token:''b
                    // }
                }
            }
        },
       methods:{
            //初始化数据
            initData(){
                this.formData = {
                    ...this.$store.state.userinfo
                }    
                console.log(this.formData);        
            },
            handleClick(){
                this.$axios.put('/user/userInfo',this.formData).then(res=>{
                   
                    if(res.code == 200){
                        let userinfo = res.data
                        this.$store.commit('CHANGE_USERINFO',userinfo)
                        this.initData()
                        this.$message.success(res.msg)
                    }
                })
            }
        },
        created(){
            this.initData()
        },
       
    }
</script>

<style scoped>
.form{
    width: 600px;
    margin-top: 20px;
}

</style>