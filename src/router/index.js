import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue';
import buyed from '../views/buyed.vue';
import stiBuy from '../views/stiBuy.vue';
import support from '../views/support.vue';
import privates from '../views/private.vue';
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/support',
            component: support
        },
        {
            path: '/private',
            component: privates
        },
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