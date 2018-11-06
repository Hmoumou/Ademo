<template>
    <div class="uploadImg">
        <h2>上传图片测试页</h2>
         <!-- <checkBox v-model="myCheckBox"></checkBox> -->
        <!-- <h2>传统表单上传</h2>
        <form action="https://upload-z1.qiniup.com" method='post' enctype="multipart/form-data">
            <input type="file" name="file">
            <br>
            <input type="text" name="token" v-model="token">
            <br>
            <button >
                提交
            </button>
        </form> -->

        <h2>axios上传</h2>
        <input type="file" @change = 'handleChange'>
        <!-- <img :src="imgData"> -->
       
        <!-- <uploadCom @success='uploadImg'></uploadCom> -->
        <div style="border:1px solid #111;width:100px;height:100px;">
           <img :src="imgData" style="width:100px;height:100px">
        </div> 
        

    </div>
</template>

<script>
import checkBox from '@/components/checkbox-com'
import uploadCom from '@/components/upload-com'
import axios from 'axios'
    export default {
        name:'uploadImg',
        data(){
            return{
                token:'',
                file:'',
                imgData:'',
                myCheckBox:''
            }
        },
        methods:{
            getToken(){
                axios.get('http://upload.yaojunrong.com/getToken').then(res=>{
                    this.token = res.data.data

                })
            },
            handleChange(e){
               let file = e.target.files[0]

               let formData = new FormData()
               //第一个file是列明
               //第二个file是文件
               //第三个file是文件名
               formData.append('file',file,file.name)
               formData.append('token',this.token)
               axios.post('https://upload-z1.qiniup.com',formData,{
                   headers:{
                       //可设置可不设置 axios升级了哟~
                       'Content-Type':'multipart/form-data',
                    //    'Content-Type':'application/x-www-form-urlencoded',
                    //    'Content-Type':'application/json',
                   }
               }).then(res=>{
                   this.imgData = res.data.url
               })
            },
            uploadImg(url){
                this.imgData = url
            }
        },
        components:{
            uploadCom,
            checkBox
        },
        
        created(){
            this.getToken()
        }
    }
</script>

<style scoped>

</style>