import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

// 使用vue-router
Vue.use(VueRouter);

// const router = new VueRouter();

// router.beforeEach((to,from,next) =>{
//   document.title = to.meta.title?to.meta.title : "猫眼电影"
// })

const routes = [
  {
    path:'/',
    redirect:'/index'
  },
  {
    path: '/index',
    component: () => import('../views/Index.vue'),
    children:[
      {
        path: '/index',
        redirect: '/hot'
      },
      {
        path:'/hot',
        component:()=>import('../components/index/Hot.vue')
      },
      {
        path:'/cinema',
        component:()=>import('../components/index/Cinema.vue')
      },{
        path:'/classics',
        component:()=>import('../components/index/Classics.vue')
      },
      {
        path:'/wait',
        component:()=>import('../components/index/Wait.vue')
      }
    ]
    
  },
  {
    path: '/video',
    component: () => import('../views/Video.vue'),
    


  },
  {
    path: '/mini-video',
    component: () => import('../views/MiniVideo.vue'),
    
  },
  {
    path: '/show',
    component: () => import('../views/Show.vue'),
    

  },
  {
    path: '/minex',
    component: () => import('../views/Mine.vue')
  },
  {
    path:'/detail/:id',
    name:'detail',
    component:()=>import('../views/Detail.vue')
  },
  {
    path:'/cities',
    component:()=>import('../views/Cities.vue')
  }
  
  
]

const router = new VueRouter({
  routes
});

export default router