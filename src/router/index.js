import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Index,
		},
		{
			path: '/page-1',
			name: 'page-1',
			component: () => import('../views/Page-1.vue'),
		},
		{
			path: '/page-2',
			name: 'page-2',
			component: () => import('../views/Page-2.vue'),
		},
		{
			path: '/page-3',
			name: 'page-3',
			component: () => import('../views/Page-3.vue'),
		},
		{
			path: '/page-4',
			name: 'page-4',
			component: () => import('../views/Page-4.vue'),
		},
		{
			path: '/page-5',
			name: 'page-5',
			component: () => import('../views/Page-5.vue'),
		},
		{
			path: '/page-6',
			name: 'page-6',
			component: () => import('../views/Page-6.vue'),
		},
		{
			path: '/page-7',
			name: 'page-7',
			component: () => import('../views/Page-7.vue'),
		},
	],
});

export default router;
