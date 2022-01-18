import { createRouter, createWebHistory } from "vue-router";
import homePage from '../views/home_page.vue'

const routes = [
	{
		path: "/",
		component: homePage,
		meta: {
			title: "FA GamesSales"
		}
	},
	{
		path: "/login",
		component: () => import('../views/login.vue'),
		meta: {
			title: "Login"
		}
	},
	{
		path: "/register",
		component: () => import('../views/register.vue'),
		meta: {
			title: "Register"
		}
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title}`;
	next();
});

export default router;
