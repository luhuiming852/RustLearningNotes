import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Rust入门笔记",
  themeConfig: {
    // 导航栏
    nav: [],
    sidebar: {
      "/": [
        {
          text: "安装",
          link: "/install/",
        },
        {
          text: "Hello world",
          link: "/helloworld/",
        },
        {
          text: "Cargo",
          link: "/hellocargo/",
        },
        {
          text: "变量",
          link: "/var/",
        },
      ],
    },
  },
});
