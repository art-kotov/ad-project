import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/components/Home";
import Ad from "@/components/Ads/Ad";
import AdList from "@/components/Ads/AdList";
import NewAd from "@/components/Ads/NewAd";
import Login from "@/components/Auth/Login";
import Registration from "@/components/Auth/Registration";
import Orders from "@/components/User/Orders";
import AuthGuard from "./auth-guard"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', name: 'home', component: Home},
    {path: '/ad/:id', name: 'ad', props: true, component: Ad, beforeEnter: AuthGuard},
    {path: '/list', name: 'list', component: AdList, beforeEnter: AuthGuard},
    {path: '/new', name: 'newAd', component: NewAd, beforeEnter: AuthGuard},
    {path: '/login', name: 'login', component: Login},
    {path: '/registration', name: 'registration', component: Registration},
    {path: '/orders', name: 'orders', component: Orders, beforeEnter: AuthGuard},
  ]
})

export default router
