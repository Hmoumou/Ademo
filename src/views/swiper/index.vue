<template>
    <div>
        <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="title"
            label="轮播图标题"
            width="280">
            </el-table-column>
            <el-table-column
            prop="book.title"
            label="图书头图"
            width='180'
            >
           <template slot-scope="scope">
                <img :src="scope.row.book.img" class="swiper-item-img">
           </template>
            </el-table-column>
             <el-table-column
            prop="index"
            label="排序"
            width="180">
            </el-table-column>
            <el-table-column
            label="操作"
            width="400"
            >
            <template slot-scope="scope">
               <el-button @click="addSwiper"  size='small' type="primary" >添加</el-button>
               <el-button @click="edit(scope.row._id)" size='small' type="primary" >编辑</el-button>
               <el-button @click="deleteSwiper(scope.row._id)" size='small' type="danger" >删除</el-button>
           </template>            
            </el-table-column>
           
        </el-table>
         <el-pagination
            :page-size="10"
            @current-change="pageChange"
            layout="prev, pager, next"
            :total="count">
            </el-pagination>
        
    </div>
    
</template>

<script>
import axios from 'axios'
    export default {
        name:'swiper',
        data(){
           return{
                tableData:[],
                page:1,
                count:0,
                
           }
        },
        methods:{
           
             pageChange(page){
               this.page = page 
               this.getSwiper()
            },      
            addSwiper(){
                this.$router.push('./addSwiper')
            },
            deleteSwiper(id){
                 this.$confirm('此操作将永久删除该轮播图, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    this.$axios.post("/swiper/delete",{ids:[id]}).then(res=>{
                        if(res.code == 200){
                              this.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                            this.getSwiper()
                        }
                    })
             
                }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
                });
            },
            edit(id){
                this.$router.push({name:'editSwiper',query:{id}})
                  
            },
            getSwiper(){
                this.$axios.get("/swiper",{pn:this.page,size:10}).then(res=>{
                    this.tableData = res.data
                    this.count = res.count
                    console.log(res);
                })
            }
        },
        created(){
             this.getSwiper()
       
        }
    }
</script>

<style scoped>
.swiper-item-img{
    width: 80px;
    height: 100px;
}
</style>