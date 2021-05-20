import {
  createRouter,
  createWebHistory
} from "vue-router";

const routes = [{
    path: "/",
    name: "Homepage",
    component: () => import('@/views/pages/index/index'),
  },
  {
    path: "/article",
    name: "article",
    component: () =>
      import( /* webpackChunkName: "article" */ "@/views/pages/article/index"),
  },
  {
    path: "/forum",
    name: "forum",
    component: () =>
      import( /* webpackChunkName: "forum" */ "@/views/pages/forum/index"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;