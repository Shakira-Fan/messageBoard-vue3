import { createRouter, createWebHistory } from "vue-router";
import EditorView from "../views/EditorView.vue";
import BackEndView from "../views/BackEndView.vue";

const routes = [
  {
    path: "/",
    name: "editor",
    component: EditorView,
  },
  {
    path: "/backend",
    name: "backend",
    component: BackEndView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
