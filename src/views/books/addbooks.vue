<template>
    <div class="v-500">
       <div class="crumbs">
            <!-- <i class="el-icon-back"></i> -->
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/layout/books' }">图书分类管理</el-breadcrumb-item>
        <el-breadcrumb-item>添加图书</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-form :model='formData'>
            <el-form-item label='网址'>
                <el-input v-model="formData.url"></el-input>
            </el-form-item>
            <el-form-item label='作者'>
                <el-input v-model="formData.author"></el-input>
            </el-form-item>
            <el-form-item label='书籍头图'>
               <el-switch
                class="dian"
                v-model="isUpload"
                 active-text="手动上传"
                 inactive-text="头图网址">
                </el-switch>
                <upload-img  style="" v-model="formData.img" v-if="isUpload"></upload-img>
                 <el-input v-model="formData.img" v-else></el-input>
            </el-form-item>
            <el-form-item label='分类'>
                <el-select v-model="formData.typeId">
                    <el-option 
                    v-for="(item, index) in catagoryData"
                    :key='index'
                    :label="item.title"
                    :value="item._id"
                    ></el-option>
                </el-select>
            </el-form-item>
            <el-button @click="handleSubmit" type='primary' >提交</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name:'addbooks',
        data(){
            return{
                formData:{
                    url:'',
                    author:'',
                    img:'',
                    typeId:''

                },
                catagoryData:[],
                isUpload:false
            }
        },
        methods:{
             handleSubmit(){
                 this.$axios.post('/book',this.formData).then(res=>{
                   if(res.code == 200){
                       this.$message.success(res.msg)
                   }
               })
            },
        async  getcatagoryData(){
               const res = await  this.$axios.get('/category')
               this.catagoryData = res.data
            },
           
        },
        created(){
            this.getcatagoryData()
        }
    }
</script>

<style scoped>

</style>