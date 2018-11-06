import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  books:()=>import('@/views/books/books'),
  login: () => import ( '@/views/login/login' ),
  layout:()=>import('@/views/layout/layout'),
  index:()=>import('@/views/index/index'),
  users:()=>import('@/views/users/index'),
  addUser:()=>import('@/views/addUser/addUser'),
  uploadImg:()=>import('@/views/uploadImg/uploadImg'),
  userEdit:()=>import ('@/views/userEdit/userEdit'),
  swiper:()=>import ('@/views/swiper/index'),
  addSwiper:()=>import ('@/views/swiper/addSwiper'),
  addbooks:()=>import ('@/views/books/addbooks')
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/login' 
    },
    {
      path:'/login',
      name:'login',
      component: components.login
    },
    {
      path: '/layout',
      name: 'layout',
      component: components.layout,
      redirect:'/layout/index',
      meta:{
        title:'首页'
      },
      children:[
        {
          path: 'index',
          name: 'index',
          component: components.index
        },
        {
          path:'users',
          name:'usres',
          component:components.users
        },
        {
          path:'userEdit',
          name:'userEdit',
          component:components.userEdit
        },
        {
          path:'addUser',
          name:'addUsre',
          mete:{
            title:'添加管理员',
          },
          component:components.addUser
        },
        {
          path:'uploadImg',
          name:'uploadImg',
          mete:{
            title:'图片上传测试页',
          },
          component:components.uploadImg
        },
        
        {
          path:'swiper',
          name:'swiper',
          mete:{
            title:'轮播图页面'
                         },
          component:components.swiper
        },
        {
          path:'addSwiper',
          name:'addSwiper',
          mete:{
            title:'添加轮播图'
          },
          component:components.addSwiper
        },
        {
          path:'editSwiper',
          name:'editSwiper',
          mete:{
            title:'编辑轮播图'
          },
          component:components.addSwiper
        },
        {
          path:'books',
          name:'books',
          mete:{
            title:'图书管理'
          },
          component:components.books
        },
        {
          path:'addbooks',
          name:'addbooks',
          mete:{
            title:'图书管理'
          },
          component:components.addbooks
        },
      ]
    },


  ]
})
