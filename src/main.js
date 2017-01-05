import Vue from 'vue'
import VueRouter from 'vue-router'

import configRouter from './configRouter'
import app from './components/app.vue'

Vue.use(VueRouter);

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { app }
// })
//创建用来映射路由的路由对象
const router = new VueRouter({
    history: true,
    saveScrollPosition: true
});
//配置路由
configRouter(router);
//启动应用
router.start(app,'#app');
