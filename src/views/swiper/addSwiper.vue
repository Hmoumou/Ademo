<template>

    <div class="add-swiper">
        <div class="crumbs">
            <!-- <i class="el-icon-back"></i> -->
        <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/layout/swiper' }">轮播图页面</el-breadcrumb-item>
        <el-breadcrumb-item>轮播图信息</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <el-form :model="formData" label-position='left' label-width='90px'  size='small'>
            <el-form-item label='轮播图标题:'>
                <el-input v-model="formData.title"></el-input>
            </el-form-item>
            <el-form-item label="轮播图书籍:">
                 <el-select v-model="formData.cateGory" @change='changeCategory'  placeholder="请选择">
                    <el-option
                    v-for="(item,index) in cateGoryData"
                    :key="index"
                    :label="item.title"
                    :value="item._id">
                    </el-option>
                </el-select>
                <div class="book-item clearfix::after" v-if="getBookItem[0]">
                    <div class="img-wrap">
                        <img :src="getBookItem[0].img" >
                    </div>
                    <div class="book-desc">
                        <div class="title">
                            {{getBookItem[0].title}}
                        </div>
                        <div class="author">
                             作者:{{getBookItem[0].author}}
                        </div>
                    </div>
                </div>
            </el-form-item>
           
            <el-form-item label='轮播图头图:'>
                 <upload-img class="fl"  v-model="formData.img"></upload-img>
            </el-form-item>
            <el-form-item label='轮播图排序:'>
                 <el-input-number v-model="formData.index" @change="handleChange" :min="1" :max="9999" label="轮播图排序"></el-input-number>
            </el-form-item>
            <el-form-item>
                <el-button type='primary' @click='handleSubmit' v-if="$route.name=='addSwiper'">
                    提交
                </el-button>
                 <el-button type='primary' @click='handleSaveEdit' v-else>
                    保存更改
                </el-button>
            </el-form-item>
        </el-form>
         <!-- 弹框start -->
            <el-dialog title="书籍列表" :visible.sync="isShowDialog">
            <el-table :data="bookData">
                <el-table-column property="title" label="书名" width="150"></el-table-column>
                <el-table-column  label="书籍头图" width="120">
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="img-item" >
                    </template>
                </el-table-column>
                <el-table-column property="author" label="作者"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type='primary' size='small' @click="handelAddBook(scope.row._id)">
                            添加
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
            </el-dialog>
            <!-- 弹框end -->
    </div>
</template>

<script>
    export default {
        name:'addSwiper',
        data(){
            return{
                formData:{
                    title:'',
                    book:'',
                    img:'',
                    index:1,
                    cateGory:''
                },
                cateGoryData:[],
                isShowDialog: false,
                booCount:0,
                bookData:[],
               
            }
            
        },
        methods:{
             getInitData(id){
                this.$axios.get(`/swiper/${this.$route.query.id}`).then(res=>{
                    this.getBookData()
                   this.formData={
                        ...this.formData,
                        ...res.data,
                        book:res.data.book._id,
                        cateGory:res.data.book.type
                    }
                   
                })
            },
            handleSaveEdit(){
                let isCanSubmit = true
                for(let key in this.formData){
                    if(!this.formData[key]){
                        isCanSubmit = false
                    }
                }

                if(isCanSubmit){
                    this.$axios.put(`/swiper/${this.$route.query.id}`,this.formData).then(res=>{
                        console.log(res);
                       if(res.code == 200){
                            this.$message.success(res.msg)
                            this.$router.push({name:'swiper'})
                       }
                    })
                }else{
                    this.$message.error('缺少必要参数')
                }
            },
            handleSubmit(){
                let isCanSubmit = true
                for(let key in this.formData){
                    if(!this.formData[key]){
                        isCanSubmit = false
                    }
                }

                if(isCanSubmit){
                    this.$axios.post('/swiper',this.formData).then(res=>{
                        console.log(res);
                       if(res.code == 200){
                            this.$message.success(res.msg)
                            this.$router.push({name:'swiper'})
                       }
                    })
                }else{
                    this.$message.error('缺少必要参数')
                }
            },
            handelAddBook(id){
                this.formData.book = id
                this.isShowDialog = false
            },
            getcateGory(){
                this.$axios.get('/category').then(res=>{
                    this.cateGoryData = res.data
                })
            },
            handleChange(){

            },
             async getBookData(){
             const res = await this.$axios.get(`/category/${this.formData.cateGory}/books`)
                this.bookData = res.data.books
                this.booCount = res.count 
             },
            changeCategory(){
                 this.isShowDialog=true     
                 this.getBookData()
                         
            }
        },
       
        created(){
            this.getcateGory()
                 if(this.$route.name == 'addSwiper'){
               this.formData={
                     title:'',
                    book:'',
                    img:'',
                    index:1,
                    cateGory:''
               }
            }else{
                this.getInitData()
            }
        },
        computed:{
            getBookItem(){
                //如果有值则用户已经选择了一本书
                if(this.formData.book){
                    return this.bookData.filter(item=>item._id == this.formData.book)
                }else{
                    return[]
                }
            }
        },
        
    }
</script>

<style scoped lang='scss'>
.add-swiper{
    width: 600px;
    margin-left: 10px;
}
.book-item{
    border-radius: 6px;
    margin-top: 20px;
    width: 430px;
    height: 140px;
    border: 1px solid #e8e8e8;
    .img-wrap{
            float: left;
            width: 100px;
            height: 140px;
        img{
            margin:15px 0 0 15px;
            width: 70px;
            height: 110px;
            line-height: 110px;
            border-right: 1px solid #e8e8e8;
           
        }
    }  
    .book-desc{
        margin-top: 10px;
        overflow: hidden;
        float: left;
        width: 240px;
        height: 140px;
        line-height: 1.7;
        .title{
            font-size: 14px;
            font-weight: 700;
        }
        .author{
            color:#333;
        }
    }
}
</style>