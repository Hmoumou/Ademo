<template>
    <div class="layout">
        <div class="header">
            <h1 class="title">
                欢迎来到后台管理系统
            </h1>
        </div>
        <div class="side-bar">
            <el-menu
            :router='true'
            background-color="#545c64"
            text-color='#fff'	>
              <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">用户管理</template>
                  <!-- <el-menu-item index='/layout/uploadImg'>上传图片测试页</el-menu-item> -->
                  <el-menu-item index="/layout/index">首页</el-menu-item>
                  <el-menu-item index='/layout/books'>图书管理</el-menu-item>

                  <el-menu-item index="/login">登录</el-menu-item>
                  <el-menu-item index="/layout/users">用户管理页面</el-menu-item>
                  <el-menu-item index="/layout/userEdit">修改用户信息</el-menu-item>
                  <el-menu-item index='/layout/addUser'>添加管理员</el-menu-item>
                  <el-menu-item index='/layout/swiper'>轮播图页面</el-menu-item>

                </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
            
            </el-menu>

        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

};
</script>

<style scoped lang='scss'>
//scope 作用域  
.header {
  .title {
      color: #fff;
    background: rgb(32, 41, 71);;
    margin-left: 200px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-weight: normal;
    border-bottom: 1px solid #f1f1f1;
  }
}
.main-content {
  margin-left: 200px;
}
.side-bar {
 
    top:0;
    left: 0;
    bottom: 0;
    position: fixed;
     background: #545c64;
    width: 200px;
    border: 1px solid #f1f1f1; 
    overflow: hidden;  
    //深度选择器
    /deep/{
      .el-menu{
        border-right: none;
      }
    }
}
.main-content{
  padding: 15px;
}
</style>