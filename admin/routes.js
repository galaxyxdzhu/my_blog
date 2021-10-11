import Login from './src/page/login.vue';
import Main from './src/page/main.vue';

export default  {
    routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            component: Main
        },
        {
            path: '/login',
            component: Login
        }
    ]
}