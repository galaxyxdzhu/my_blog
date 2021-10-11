import './main.scss';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';

import routes from './routes';


Vue.use(ElementUI);
Vue.use(VueRouter);

const router = new VueRouter(routes);

new Vue({
    render: h => h(App),
    router
}).$mount('#app');

