import Vue from "vue";
import VueRouter from "vue-router";

// 引入路由中需要使用的组件功能
import Login from "@/views/login/index";
import Layout from "@/views/layout/index";
import Home from "@/views/home/index";
import Role from "@/views/role/index";
import Menu from "@/views/menu/index";
import Resource from "@/views/resource/index";
import Course from "@/views/course/index";
import User from "@/views/user/index";
import Advert from "@/views/advert/index";
import AdvertSpace from "@/views/advert-space/index";
import ErrorPage from "@/views/error-page/index";

Vue.use(VueRouter);

// 路由规则
const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "/role",
        name: "role",
        component: Role,
      },
      {
        path: "/menu",
        name: "menu",
        component: Menu,
      },
      {
        path: "/resource",
        name: "resource",
        component: Resource,
      },
      {
        path: "/course",
        name: "course",
        component: Course,
      },
      {
        path: "/user",
        name: "user",
        component: User,
      },
      {
        path: "/advert",
        name: "advert",
        component: Advert,
      },
      {
        path: "/advert-space",
        name: "advert-space",
        component: AdvertSpace,
      },
    ],
  },
  {
    path: "*",
    name: "error-page",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
