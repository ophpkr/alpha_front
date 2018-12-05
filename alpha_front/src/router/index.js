import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HomePageFarmer from '../views/HomePageFarmer';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
        },
        {
            path: '/farmer',
            name: 'HomePageFarmer',
            component: HomePageFarmer,
        },
    ],
});
