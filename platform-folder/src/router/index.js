import { createRouter, createWebHistory } from "vue-router";
import homePage from '../views/home_page.vue'

const routes = [
	{
		path: "/",
		title: "FAGgames",
		component: homePage
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
