import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/views/Login'
import FirstPage from '@/views/FirstPage'
import TopicGd from '@/views/TopicGd'
import Topic04 from '@/views/Topic04'
import Test from '@/views/Test'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/firstpage',
            name: 'FirstPage',
            component: FirstPage
        },
        {
            path: '/topicgd',
            name: 'TopicGd',
            component: TopicGd
        },
        {
            path: '/topic04',
            name: 'Topic04',
            component: Topic04
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        }
    ],
    mode: "history"
})