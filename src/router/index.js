import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import testcomponent from "../components/testcomponent";
import plot from '../components/plot'
import chat from "../components/chat"
import aarea from "../components/aarea"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/test',
      name: 'testcomponent',
      component: testcomponent
    },{
      path: '/chatroom',
      name: 'chatroom',
      component: chat
    },{
      path: '/plot',
      name: plot,
      component: plot
    },{
      path: '/area',
      name: aarea,
      component: aarea
    }
  ]
})
