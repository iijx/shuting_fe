import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue';
import buyed from '../views/buyed.vue';
import stiBuy from '../views/stiBuy.vue';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            component: index
        },
        {
            path: '/buyed',
            component: buyed
        },
        {
            path: '/stiBuy',
            component: stiBuy
        }
    ]
})