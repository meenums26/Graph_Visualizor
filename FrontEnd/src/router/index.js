import { createRouter, createWebHistory } from 'vue-router';
import GraphVisualization from '../components/GraphVisualization.vue';

const routes = [
  {
    path: '/',
    name: 'GraphVisualization',
    component: GraphVisualization,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
