import { createRouter, createWebHistory } from "vue-router";
import homePage from '../views/home_page.vue'

const routes = [
	{
		path: "/",
		component: homePage
	},
	{
		path: "/login",
		component: () => import('../views/login.vue')
	},
	{
		path: "/register",
		component: () => import('../views/register.vue')
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
