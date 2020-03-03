import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Article from '../views/Article.vue'


Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/test',
    name: 'TestRedirect',
    redirect: '/about'
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/article',
    name : 'Article',
    component: Article
  },
  {
    path:'/user/:id',
    component: ()=>import('../views/User.vue'),
    children:[
      
      {
        path:'profile',
        component:{
          template:`<div>profile</div>`
        }
      },
      {
        path:'posts',
        component:{
          template:`<div>posts</div>`
        }
      },
      
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
