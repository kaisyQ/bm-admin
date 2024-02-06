import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Comments from "@/components/Comments/CommentsContainer.vue";
import Products from "@/components/Products/ProductsContainer.vue";
import Categories from "@/components/Categories/CategoriesContainer.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reviews',
      name: 'reviews',
      component: Comments
    },
    {
      path: '/products',
      name: 'products',
      component: Products
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    }
  ]
});

export default router;
