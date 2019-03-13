import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/fixed'
    },
    {
      path:'/fixed',
      name:'fixed',
      component:()=>import('./views/fixed'),
      children:[
        {

            path:'/left',
            name:'left',
            component:()=>import('./views/fixed/left')
        },
        {
            path:'/right',
            name:'right',
            component:()=>import('./views/fixed/right')
        }
      ],
      redirect:'/left'
    },
    {
      path:'/that',
      name:'that',
      component:()=>import('./views/that')
    },

    {
      path:"*",
      redirect:"/"
    },




    
    // 模板
    {
      path:'/swiperBannerModule',
      name:'swiperBannerModule',
      component:()=>import ('./views/swiper/SwiperBannerModule')
    },
    {
      path:'/Echarts',
      name:'Echarts',
      component:()=>import ('./views/ec/Echarts')
    },

     
  ],
  mode:"history"
    
})
