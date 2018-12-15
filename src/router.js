import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Category from '@/components/Category/Category'
import Profile from '@/components/Profile/Profile'
import jx from '@/components/Home/shoppingList/jx'
import yh from '@/components/Home/shoppingList/yh'
import ht from '@/components/Home/shoppingList/ht'
import fx from '@/components/Home/shoppingList/fx'
import yc from '@/components/Home/shoppingList/yc'
import loginPage from '@/components/Profile/login/loginPage/loginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:"/home",
      component:Home,
      name:"首页",
      children:[
        {path:"/home",redirect:"jx"},
        {path:"jx",component:jx,name:"精选"},
        {path:"yh",component:yh,name:"优惠"},
        {path:"ht",component:ht,name:"海淘"},
        {path:"fx",component:fx,name:"发现"},
        {path:"yc",component:yc,name:"原创"}
      ]
    },
    {
      path:"/category",
      component:Category,
      name:"分类"
    },
    {
      path:"/profile",
      component:Profile,
      name:"我的",
      children:[
        // {
        //   path:"/login",component:login,name:"登陆",
          // children:[
            {path:"loginPage",component:loginPage,name:"登陆页面"}
        //   ]
        // }
      ]
    }
   
  ]
})
