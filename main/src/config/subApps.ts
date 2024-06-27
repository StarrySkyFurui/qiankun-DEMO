export default {
  subApps: [
    {
      name: "basic", // 子应用名称，跟package.json一致
      entry:
        process.env.NODE_ENV === "development"
          ? "//localhost:7001"
          : "/basic/index.html", // 子应用入口，本地环境下指定端口
      container: "#sub-container", // 挂载子应用的dom
      activeRule:
        process.env.NODE_ENV === "development" ? "/basic" : "/main/basic", // 路由匹配规则
      props: {}, // 主应用与子应用通信传值
    },
  ],
};
