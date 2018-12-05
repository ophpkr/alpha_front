import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import HomePageFarmer from '../views/HomePageFarmer';
import EweTableFarmer from '@/components/EweTableFarmer';

Vue.use(Router);

const router = new Router({
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
        {
            path: '/ewe',
            name: 'EweTableFarmer',
            component: EweTableFarmer,
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
});

export default router;
