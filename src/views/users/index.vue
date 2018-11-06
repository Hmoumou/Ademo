<template>
    <div class="user-manage">
       
        <div class="breadcrumb">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/layout/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
            </el-breadcrumb>
            <template>
                <el-table
                    :data="tableData"
                    border
                    style="width: 100%;margin-top:30px;">
                    <el-table-column
                    prop="nickname"
                    label="姓名"
                    width="120">
                    </el-table-column>
                    <el-table-column
                    prop="updatedTime"
                    label="日期"
                    width="200">
                    </el-table-column>
                    <el-table-column
                    prop="desc"
                    label="个性签名"
                    width="300">
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="用户头像"
                    width="200">
                    <template slot-scope="scope">
                        <img :src="scope.row.avatar" class="avatar">
                    </template>
                    </el-table-column>
                    <el-table-column
                    prop=""
                    label="操作"
                    width="300">
                    <template slot-scope="scope">
                        <el-button @click="handleDetails" size='small' type='primary'>
                            查看详细
                        </el-button>
                        <el-button @click="handleDetele(scope.row._id)" size='small' type='danger' >
                            删除
                        </el-button>
                    </template>
                    </el-table-column>
                </el-table>
                </template>
                <el-pagination
                background
                :page-size='7'
                @current-change="pageChange"
                layout="prev, pager, next"
                :total="count">
                </el-pagination>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                tableData:[],
                count:0,
                page:1
            }
        },
        methods:{
             pageChange(page){
               this.page = page 
               this.getData()
            },          
            getData(){
                this.$axios.get('/user',{pn:this.page,size:7}).then(res=>{
                    console.log(res);
                    if(res.code == 200){
                        this.count = res.count
                        this.tableData = res.data
                    }
                })
            },
            
            handleDetails(){
                this.$router.push('/layout/userDetails')
            },
            handleDetele(id){                
                    this.$confirm('此操作将永久删除该管理员, 是否继续?', '警告', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        this.$axios.post('/user/delete',{userIds:[id]}).then(res=>{
                                this.$message.success(res.msg)
                                this.getData()
                        })
                    }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });          
                    });
                 }
            },

         created(){
                this.getData()
            }
    }
</script>

<style scoped>
.avatar{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-left: 30px;
    }
</style>