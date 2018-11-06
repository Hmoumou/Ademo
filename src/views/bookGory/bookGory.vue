<template>
    <div>
        <h1>分类管理</h1>
        <el-table
            :data="tabelData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="title"
            label="分类名"
            width="280">
            </el-table-column>
            <el-table-column
            prop="icon"
            label="分类图"
            width='180'
            >
           <template slot-scope="scope">
                <img :src="scope.row.icon" class="swiper-item-img">
           </template>
            </el-table-column>
             <el-table-column
            prop="index"
            label="index"
            width="180">
            </el-table-column>
            <el-table-column
            label="操作"
            width="400"
            >
            <template slot-scope="scope">
               <el-button @click="addbooks"  size='small' type="primary" >添加</el-button>
               <el-button @click="edit(scope.row._id)" size='small' type="primary" >编辑</el-button>
               <el-button @click="deleteGory(scope.row._id)" size='small' type="danger" >删除</el-button>
           </template>            
            </el-table-column>
            
        </el-table>
         <el-pagination
            :page-size="5"
            @current-change="pageChange"
            layout="prev, pager, next"
            :total="count">
         </el-pagination>
    </div>
</template>

<script>
    export default {
           
        name:'books',
        data(){
            return{
                tabelData:[],
                page:1,
                count:0
            }
        },
        methods:{
            pageChange(page){
               this.page = page 
               this.getGory()
            },   
           getGory(){
               this.$axios.get('/category',{pn:this.page,size:5}).then(res=>{
                   console.log(res);
                   this.tabelData = res.data
                   this.count = res.count
               })
           },
            addbooks(){
                this.$router.push('/layout/addbooks')
            },
            edit(){

            },
            deleteGory(){

            }

        },
        created(){
            this.getGory()
        }

    }
</script>

<style scoped>
.btn{
    width: 80px;
    height: 50px;
    border-radius: 4px;
}
.swiper-item-img{
    width: 180px;
    height: 100px;
}
</style>