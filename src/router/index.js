import {createRouter, createWebHistory} from 'vue-router';
import DashBoard from '../pages/master/DashBoard.vue';
import HomePageVue from '@/pages/HomePage.vue';
import ProfilePageVue from '@/pages/ProfilePage.vue';


const routes =[
 {
    name:'DashBoard',
    path:'/',
    component: DashBoard
 },
 {
    name:'HomePage',
    path:'/home',
    component: HomePageVue
 },
 {
    name:'ProfilePage',
    path:'/profile',
    component: ProfilePageVue
 }   
]

const router = Router();

export default router;

function Router (){
    const router = new createRouter({
        history:createWebHistory(process.env.BASE_URL),
        routes
    });
    return router;
}