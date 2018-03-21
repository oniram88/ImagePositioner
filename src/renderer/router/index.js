import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'image_selector',
      component: require('@/components/ImageSelector').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
