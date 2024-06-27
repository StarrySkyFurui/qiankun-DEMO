const routes = [
  {
    path: "",
    redirect: { name: "home" },
    meta: { title: "首页" },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home.vue"),
      },
      {
        path: "/login",
        name: "login",
        component: () => import("../views/login.vue"),
      },
      // {
      //   // history模式需要通配所有路由，详见vue-router文档
      //   path: "/basic/:pathMatch(.*)*",
      //   name: "basic",
      //   meta: {},
      //   component: () => import("@/components/SubContainer.vue"),
      // },
      {
        // history模式需要通配所有路由，详见vue-router文档
        path: "/basic/:pathMatch(.*)*",
        name: "basic",
        meta: {},
        component: () => import("@/components/SubContainer.vue"),
      },
    ],
  },
];

export default routes;
