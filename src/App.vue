<template>
  <div id="app">
   <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.v-500{
  width: 500px;
}
.img-item{
  width: 80px;
  height: 100px;
}
.clearfix::after{
  content: "";
  display: block;
  clear: both;
  width: 0;
  height: 0;

}
.fl{
  float: left;
}
.crumbs{
  background: pink;
  font-size: 16px;
  width: 220px;;
  border: 1px solid #e8e8e8;
  padding: 10px;
  margin-bottom: 10px;
}
/* .el-icon-back{
  float: left;
  display: inline-block;
} */
</style>
