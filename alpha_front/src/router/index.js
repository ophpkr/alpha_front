import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import EweTableFarmer from '@/components/EweTableFarmer';
import HomePageFarmer from '../views/HomePageFarmer';


Vue.use(VueRouter);

const router = new VueRouter({
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
    mode: 'history',
});

export default router;
