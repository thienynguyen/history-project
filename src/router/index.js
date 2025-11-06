import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReadingListView from "@/views/ReadingListView.vue";
import PlayView from "@/views/PlayView.vue";
import ReadingView from "@/views/ReadingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/readings',
      name: 'readings',
      component: ReadingListView,
    },
    {
      path: '/play',
      name: 'play',
      component: PlayView,
    },
    {
      path: '/readings/:id',
      name: 'reading',
      component: ReadingView,
    },
  ],
})

export default router
