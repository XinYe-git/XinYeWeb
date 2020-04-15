import Vue from 'vue'
import VueRouter from 'vue-router'

const Home=()=>import('../views/home/Home')
const Appreciate=()=>import('../views/appreciate/Appreciate')
const Contact=()=>import('../views/contact/Contact')
const Login=()=>import('../views/login/Login')
const Register=()=>import('../views/register/Register')
const Profile=()=>import('../views/profile/Profile')

//1.安装插件
Vue.use(VueRouter)
//2.创建路由对象
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home
  },
  {
    path:'/appreciate',
    component:Appreciate
  },
  {
    path:'/contact',
    component:Contact
  },
  {
    path:'/login',
    component:Login
  },{
    path:'/register',
    component:Register
  },{
    path:'/profile',
    component:Profile
  }
  // ,
  // {
  //   path:'/detail/:iid',
  //   component:Detail
  // }
]
const router=new VueRouter({
  routes,
  mode:'history'
})
//3.导出router
export default router
