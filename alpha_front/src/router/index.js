import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import EweTableFarmer from '@/components/EweTableFarmer';
import EweCard from '@/components/EweCard/EweCard';
import FarmerAccount from '@/components/FarmerAccount';
import HomePageFarmer from '@/views/HomePageFarmer';
import EwesOverviewAIC from '@/views/EwesOverviewAIC';
import FarmersOverviewAIC from '@/views/FarmersOverviewAIC';
import EwesManagementFarmer from '@/views/EwesManagementFarmer';

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
            path: '/farmer/ewesManagement',
            name: 'EweManagementFarmer',
            component: EwesManagementFarmer,
        },
        {
            path: '/ewes',
            name: 'EweCard',
            component: EweCard,
        },
        {
            path: '/aic',
            path: '/farmer/account',
            name: 'FarmerAccount',
            component: FarmerAccount,
        },
        {
            path: '/dev',
            name: 'EweTableAIC',
            component: EwesOverviewAIC,
        },
        {
            path: '/aic/farmers',
            name: 'FarmersOverviewAIC',
            component: FarmersOverviewAIC,
        },
        {
            path: '*',
            redirect: '/',
        },
    ],
    mode: 'history',
});

export default router;
