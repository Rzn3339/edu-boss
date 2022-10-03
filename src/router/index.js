import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 路由规则
const routes = [
  {
    path: "/login",
    name: "login",
    component: () =>
      // 路由懒加载 && 打包文件命名（ magic comment ）
      import(/* webpackChunkName: 'login' */ "@/views/login/index"),
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: 'layout' */ "@/views/layout/index"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("@/views/home/index"),
      },
      {
        path: "/role",
        name: "role",
        component: () => import("@/views/role/index"),
      },
      {
        path: "/menu",
        name: "menu",
        component: () => import("@/views/menu/index"),
      },
      {
        path: "/resource",
        name: "resource",
        component: () => import("@/views/resource/index"),
      },
      {
        path: "/course",
        name: "course",
        component: () => import("@/views/course/index"),
      },
      {
        path: "/user",
        name: "user",
        component: () => import("@/views/user/index"),
      },
      {
        path: "/advert",
        name: "advert",
        component: () => import("@/views/advert/index"),
      },
      {
        path: "/advert-space",
        name: "advert-space",
        component: () => import("@/views/advert-space/index"),
      },
    ],
  },
  {
    path: "*",
    name: "error-page",
    component: () => import("@/views/error-page/index"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
