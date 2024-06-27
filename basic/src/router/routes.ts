const routes = [
  {
    path: "/",
    redirect: { name: "home" },
    meta: { title: "首页" },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home.vue"),
      },
      {
        path: "/other",
        name: "other",
        component: () => import("../views/other.vue"),
      },
    ],
  },
];

export default routes;
