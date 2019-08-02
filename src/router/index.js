import Vue from 'vue'
import Router from 'vue-router'
import Blog from '@/components/Blog'
import BlogPost from '@/components/BlogPost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: Blog
    },
    {
      path: '/read/:post',
      name: 'post',
      props: true,
      component: BlogPost
    }
  ],
  mode: 'history'
})
